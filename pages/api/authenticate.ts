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
      message: "Method not allowed. Use POST.",
    });
  }

  // console.log("Request received");

  try {
    await connectToDatabase();

    // Check if the user is authenticated
    const { session } = req.body;
    if (!session) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const userId = session?.user?._id;
    if (!userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Check if user exists in the database by their id
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Fetch payment status to check if already paid
    const paystatus = await Payment.findOne({ userId: userId });
    if (paystatus && paystatus.status === "success") {
      return res.status(400).json({ error: "Payment already made" });
    }

    // Extract order ID from the request body
    const { id } = req.body;
    // console.log(id);
    const order_id = id;
    // Set Cashfree credentials from environment variables
    Cashfree.XClientId = process.env.CASHFREE_APP_ID!;
    Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY!;
    Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

    // Fetch payment status using Cashfree PG API
    const orderResponse = await Cashfree.PGOrderFetchPayments(
      "2023-08-01",
      order_id
    );
    // console.log("object_data", orderResponse?.data);

    if (orderResponse?.data) {
      const transaction = orderResponse?.data?.find(
        (transaction: any) =>
          transaction.payment_status === "SUCCESS" ||
          transaction.payment_status === "PENDING"
      );

      if (transaction?.payment_status === "SUCCESS") {
        // Create and save payment record in the database
        // console.log(transaction.payment_amount);
        const newPayment = new Payment({
          userId: userId,
          paymentId: transaction.cf_payment_id,
          orderId: transaction.order_id,
          status: "success",
          amount:transaction.payment_amount?.toString()
        });

        // Save the payment in the database
        await newPayment.save();

        return res.status(200).json({
          success: true,
          message: "Payment verified successfully",
          order_status: "Success",
        });
      } else if (transaction?.payment_status === "PENDING") {
        return res.status(200).json({
          success: true,
          message: "Payment is pending",
          order_status: "Pending",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Payment failed",
          order_status: "Failure",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch payment status from Cashfree",
      });
    }
  } catch (error: any) {
    console.error("Error in payment verification:", error);
    return res.status(500).json({
      success: false,
      message:
        error?.response?.data?.message || "Error processing the request.",
    });
  }
}
