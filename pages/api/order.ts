import Razorpay from "razorpay";
import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { connectDB } from "@/utils/db";
// import { Payment } from "@/utils/Models/payments.models";
import axios from "axios";
// Initialize Razorpay instance
// type User = string ;
const razorpay = new Razorpay({
  key_id: process.env.key_id!, // Use proper environment variable naming
  key_secret: process.env.key_secret!, // Ensure this is defined in your environment
});

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
    // Check if the user is authenticated
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Verify JWT
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    if (!user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const { amount, currency } = req.body as {
      amount: string;
      currency: string;
    };
    console.log("debug 1");
    // Check payment status in MongoDB
    const existingPayment = await axios.post(
      " https://serverculfest25.vercel.app/api/v1/payments/verify",
      {
        token: token,
      }
    );
    console.log("debug 2");
    // const existingPayment = await Payment.findOne({
    //   userId: (user as JwtPayload).id,
    // });
    if (existingPayment && existingPayment.data.exists === true) {
      return res.status(400).json({ error: "Payment already made" });
    }

    console.log(`Creating order with Amount: ${amount}, Currency: ${currency}`);

    const options = {
      amount: amount,
      currency: currency,
      receipt: "rcp1",
    };

    const order = await razorpay.orders.create(options);
    console.log("Order created successfully:", order);

    // Return the order ID
    return res.status(200).json({ orderId: order.id });
  } catch (error: any) {
    console.error("Error creating order:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to create order. Please try again." });
  }
}
