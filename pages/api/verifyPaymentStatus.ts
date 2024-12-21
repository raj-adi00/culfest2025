import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./conntectToDatabase";
import User from "./models/User.model";
import Payment from "./models/Payment.model";
type ResponseData = {
  status: number;
  message: string;
  data?: any;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: 405,
      message: "Method not allowed",
    });
  }
  try {
    const { session } = req.body;
    const session1 = session.data;
    await connectToDatabase();
    console.log("session", session1);
    const user = await User.findOne({ _id: session1?.user?.id });
    // console.log(user);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        data: null,
      });
    }
    const payment = await Payment.findOne({ userId: user._id });
    if (!payment) {
      return res.status(200).json({
        status: 404,
        message: "Payment not found",
        data: null,
      });
    }

    if (payment && payment.status === "success") {
      return res.status(200).json({
        status: 200,
        message: "Payment verified successfully",
        data: payment,
      });
    }
    // console.log(req.body);
  } catch (error) {
    // console.log("Signup error", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}
