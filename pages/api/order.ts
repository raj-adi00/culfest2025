import Razorpay from "razorpay";
import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { connectDB } from "@/utils/db";
// import { Payment } from "@/utils/Models/payments.models";
import axios from "axios";
import User from "./models/User.model";
import Payment from "./models/Payment.model";
import connectToDatabase from "./conntectToDatabase";
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
    await connectToDatabase();
    // Check if the user is authenticated
    const { session } = req.body;
    if (!session) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Verify JWT
    // const user = jwt.verify(token, process.env.JWT_SECRET!);
    // console.log("session in order .ts", session?.user?._id);
    const userId = session?.user?._id;
    if (!userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const { amount, currency } = req.body as {
      amount: string;
      currency: string;
    };
    // console.log("debug 1");
    // Check payment status in MongoDB

    // const { token } = req.body;
    // console.log("verify working");
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("decoded", decoded);
    // Check if user exists in the database by their id
    const user = await User.findOne({
      _id: userId,
    });
    const paystatus = await Payment.findOne({
      userId: userId,
    });

    if (!user) {
      // console.log("here no user");
      return res.status(401).json({ error: "User not found" });
    }
    // if()
    if (paystatus && paystatus.status === "success") {
      // console.log("paystatus", paystatus);
      // console.log("success payment");

      return res.status(400).json({ error: "Payment already made" });
    }

    // const existingPayment = await axios.post(
    //   " https://serverculfest25.vercel.app/api/v1/payments/verify",
    //   {
    //     token: token,
    //   }
    // );
    // console.log("debug 2");
    // const existingPayment = await Payment.findOne({
    //   userId: (user as JwtPayload).id,
    // });

    // console.log(`Creating order with Amount: ${amount}, Currency: ${currency}`);

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
    console.log("Error creating order:", error.response.data.error);
    console.log(error);
    return res.status(500).json({ error: error.response.data.error });
  }
}
