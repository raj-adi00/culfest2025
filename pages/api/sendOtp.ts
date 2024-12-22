import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./conntectToDatabase";
import User from "./models/User.model";
import Otp from "./models/Otp.model";
import { sendEmail } from "./sendMail";
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
    const { email } = req.body;
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
      console.log("isemail", isEmail);
    }

    await connectToDatabase();

    if (isEmail) {
      console.log("object1");
      const ExistingUser = await User.findOne({ email });
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      if (!ExistingUser) {
        return res.status(409).json({
          status: 409,
          message: "User doesn't exists with  email",
        });
      }
      const otp = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); //logic to generate 6 digit OTP
      const result = await Otp.findOneAndUpdate(
        { email },
        {
          otp: otp,
          expireTime: Date.now() + 60 * 1000 * 10,
        },
        options
      );
      //logic to send otp on email
      const Name = ExistingUser?.name;
      const subject = "OTP for Verification";
      const receiver = String(email);
      const OTP = otp;
      const text = `Dear ${Name},Your OTP for verification is: ${OTP}. It is valid for 10 minutes.`;
      const html = `Dear ${Name},<br><p>Your OTP for verification is: <strong>${OTP}</strong></p><p>This OTP is valid for 10 minutes.</p>`;
      const SendOTPToMail = await sendEmail({ receiver, subject, text, html });
      if (!SendOTPToMail)
        return res
          .status(409)
          .json({ status: 409, message: "Failded to send Mail" });
      return res.status(201).json({
        status: 201,
        message: "Otp sent",
        data: "result",
      });
    } else {
      console.log("object2");
      const ExistingUser = await User.findOne({ phone: email });
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      if (!ExistingUser) {
        return res.status(409).json({
          status: 409,
          message: "User doesn't exists with  phone",
        });
      }
      const otp = "14";
      const result = await Otp.findOneAndUpdate(
        { phone: email },
        {
          otp: otp,
          expireTime: Date.now() + 60 * 1000 * 10,
        },
        options
      );
      return res.status(201).json({
        status: 201,
        message: "Otp sent",
        data: "result",
      });
    }
  } catch (error) {
    // console.log("Signup error", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}
