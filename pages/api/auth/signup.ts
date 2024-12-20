import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../conntectToDatabase";
import User from "../models/User.model";
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
    // username: String,
    // email: String,
    // password: String,

    // phone: String,
    // city: String,
    // state: String,
    // college: String,
    // gender: String,
    // graduationYear: String,
    // isNITJSR: Boolean,
    const {
      email,
      password,
      username,
      phone,
      city,
      state,
      gender,
      college,
      isNITJSR,
      graduationYear,
      confirmPassword,
    } = req.body;
    // console.log(req.body);
    if (
      !email ||
      !password ||
      !username ||
      !confirmPassword ||
      !phone ||
      !city ||
      !state ||
      !college
    ) {
      return res
        .status(400)
        .json({ status: 400, message: "All Fields are required!!" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 400,
        message: "Invalid email format",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        status: 400,
        message: "Password must be at least 6 characters long",
      });
    }
    await connectToDatabase();
    const ExistingUser = await User.findOne({ email });
    const ExistingUser1 = await User.findOne({ phone });
    if (ExistingUser || ExistingUser1)
      return res.status(409).json({
        status: 409,
        message: "User already exists with same phone or email",
      });
    const hashedPassword = await hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      name: username,
      phone,
      city,
      state,
      college,
      isNITJSR,
      graduationYear,
      gender,
    });
    if (!user)
      return res.status(500).json({
        status: 500,
        message: "Internal server error",
      });
    return res.status(201).json({
      status: 201,
      message: "User registered Successfully",
      data: {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        city: user.city,
        state: user.state,
        college: user.college,
        isNITJSR: user.isNITJSR,
        graduationYear: user.graduationYear,
        gender: user.gender,
      },
    });
  } catch (error) {
    // console.log("Signup error", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}
