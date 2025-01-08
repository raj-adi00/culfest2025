import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./conntectToDatabase";
import User from "./models/User.model";
import Otp from "./models/Otp.model";
import { hash } from "bcryptjs";
import { sendEmail } from "./sendMail";
import Message from "./models/Message.model";
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
    const { name, email, message } = req.body;
    // console.log(req.body);
    // console.log(req.body);
    if (!email) {
      return res
        .status(400)
        .json({ status: 400, message: "All Fields are required!!" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmail = false;
    if (emailRegex.test(email)) {
      isEmail = true;
    }

    await connectToDatabase();
    // await Otp.deleteMany({ email: email });
    await Message.create({ email: email, message: message });

    return res.status(201).json({
      status: 201,
      message: "message  sent",
      data: "result",
    });
  } catch (error) {
    // console.log("Signup error", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}
