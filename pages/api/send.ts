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
    console.log(req.body);
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
    const Name = name;
    const subject = "Message from Contact Us";
    const receiver = String(email);

    const text = `Dear ${Name},Thanks for contacting`;
    const html = `Dear ${Name},<br><p>Thanks for contacting us  <strong>We will review your query ${message} soon.</strong></p><p>Thank You .</p>`;
    const SendOTPToMail = await sendEmail({ receiver, subject, text, html });
    if (!SendOTPToMail)
      return res
        .status(409)
        .json({ status: 409, message: "Failded to send Mail" });
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
