import { Cashfree } from "cashfree-pg";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./conntectToDatabase";
import User from "./models/User.model";
import Payment from "./models/Payment.model";

// Define the POST handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      msg: "Method not allowed. Use POST.",
    });
  }

  // console.log("Request received");

  try {
    await connectToDatabase();

    // Check if the user is authenticated
    const { session } = req.body;
    if (!session) {
      return res.status(401).json({ msg: "Not authenticated" });
    }

    const userId = session?.user?._id;
    if (!userId) {
      return res.status(401).json({ msg: "Not authenticated" });
    }

    // Check if user exists in the database by their id
    const user = await User.findOne({ _id: userId });
    const paystatus = await Payment.findOne({ userId: userId });

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    // If payment already made, return error
    if (paystatus && paystatus.status === "success") {
      return res.status(400).json({ msg: "Payment already made" });
    }

    const { order_id, order_amount, customer_id, customer_phone } = req.body;

    // Set Cashfree credentials from environment variables
    Cashfree.XClientId = process.env.CASHFREE_APP_ID!;
    Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY!;
    Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

    const amount = user.isNITJSR ? 500 : 1250;
    // Configure order request
    const orderRequest = {
      order_id,
      order_amount: amount,
      order_currency: "INR",
      customer_details: {
        customer_id,
        customer_phone,
      },
      order_meta: {
        return_url: "https://www.culfest.in/profile", // Redirect URL after payment
      },
    };

    // Create an order with Cashfree
    const response = await Cashfree.PGCreateOrder("2023-08-01", orderRequest);

    if (response?.status === 200) {
      return res.status(200).json({
        success: true,
        msg: "Order created successfully!",
        data: response.data,
      });
    } else {
      return res.status(500).json({
        success: false,
        msg: "No response data received from Cashfree.",
      });
    }
  } catch (error: any) {
    console.error("Error in order creation:", error);
    return res.status(500).json({
      success: false,
      msg: error?.response?.data?.message || "Error processing the request.",
    });
  }
}
