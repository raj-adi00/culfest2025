import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../conntectToDatabase";
import User from "../models/User.model";
import { hash } from "bcrypt";
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
    const { email, password, name } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ status: 400, message: "Email and password required" });
    if (!name)
      return res.status(400).json({ status: 400, message: "Enter a name" });
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
    if (ExistingUser)
      return res
        .status(409)
        .json({ status: 409, message: "User already exists" });
    const hashedPassword = await hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, name });
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
      },
    });
  } catch (error) {
    console.log("Signup error", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}
