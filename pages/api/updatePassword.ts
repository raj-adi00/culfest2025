import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./conntectToDatabase";
import User from "./models/User.model";
import Otp from "./models/Otp.model";
import { hash } from "bcryptjs";
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
    const { email, password } = req.body;
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
      // console.log("isemail", isEmail);
    }

    await connectToDatabase();
    // await Otp.deleteMany({ email: email });
    if (isEmail) {
      // console.log("object1");
      const ExistingUser = await User.findOne({ email });
      //   const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      if (!ExistingUser) {
        return res.status(409).json({
          status: 409,
          message: "User doesn't exists with  email",
        });
      }
      const hashedPassword = await hash(password, 10);
      const result = await User.findOneAndUpdate(
        { email },
        {
          password: hashedPassword,
        }
      );
      return res.status(201).json({
        status: 201,
        message: "password updated",
        data: "result",
      });
    } else {
      // console.log("object2");
      const ExistingUser = await User.findOne({ phone: email });

      if (!ExistingUser) {
        return res.status(409).json({
          status: 409,
          message: "User doesn't exists with  phone",
        });
      }
      const hashedPassword = await hash(password, 10);
      const result = await User.findOneAndUpdate(
        { phone: email },
        {
          password: hashedPassword,
        }
      );
      return res.status(201).json({
        status: 201,
        message: "password changed",
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
