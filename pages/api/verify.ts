import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import jwt, { JwtPayload } from "jsonwebtoken";
import axios from "axios";
// import { connectDB } from "@/utils/db";
// import { Payment } from "@/utils/Models/payments.models";
// Generate the Razorpay signature
const generateSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
): string => {
  const keySecret = process.env.key_secret!;
  return crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");
};

// Connect to MongoDB
// connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" }); // Reject non-POST methods
  }

  try {
    // Parse request body
    const { orderCreationId, razorpayPaymentId, razorpaySignature } = req.body;

    if (!orderCreationId || !razorpayPaymentId || !razorpaySignature) {
      return res.status(400).json({
        message:
          "Missing required fields: orderCreationId, razorpayPaymentId, or razorpaySignature",
        isOk: false,
      });
    }

    // Verify the user's authentication
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authenticated", isOk: false });
    }

    // Verify JWT
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Not authenticated", isOk: false });
    }

    // Generate the signature and compare
    const generatedSig = generateSignature(orderCreationId, razorpayPaymentId);

    if (generatedSig !== razorpaySignature) {
      return res.status(400).json({
        message: "Payment verification failed",
        isOk: false,
      });
    }

    // Update payment status in MongoDB
    // await Payment.updateOne(
    //   { userId: (user as JwtPayload).id },
    //   {
    //     $set: {
    //       status: "success",
    //       paymentId: razorpayPaymentId,
    //       orderId: orderCreationId,
    //     },
    //   },
    //   { upsert: true }
    // );
    const responseforupdate = await axios.post(
      " https://serverculfest25.vercel.app/api/v1/payments/update",
      {
        token: token,
        // userId: (user as JwtPayload).id,
        paymentId: razorpayPaymentId,
        orderId: orderCreationId,
        status: "success",
      }
    );
    if (responseforupdate.data.savedpayment.status === "success") {
      return res.status(200).json({
        message: "Payment verified successfully",
        isOk: true,
      });
    } else {
      return res.status(400).json({ isOk: false, message: "not working " });
    }
  } catch (error: any) {
    console.error("Error during payment verification:", error.message);

    return res.status(500).json({
      message: "Internal server error",
      isOk: false,
      error: error.message,
    });
  }
}
