import { NextApiRequest, NextApiResponse } from "next";
// import connectToDatabase from "./connectToDatabase";
// import connectToImageDatabase from "./connectToImageDatabase"; // Separate DB connection utility
import User from "./models/User.model";
import Payment from "./models/Payment.model";
import ImageModel from "./models/Image.model"; // Image model
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import connectToDatabase from "./connection";
import connectToImageDatabase from "./connecttoimage";

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

  try {
    // Connect to the primary database for User and Payment
    const mainDb = await connectToDatabase();

    // Connect to the secondary database for Image
    const imageDb = await connectToImageDatabase();

    // Check if the user is authenticated
    const { url, user_Id, session } = req.body;
    if (!session) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const userId = session?.user?._id;
    if (!userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Check if the user exists in the main database
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Fetch payment status to check if the payment is already made
    const paystatus = await Payment.findOne({ userId: userId });
    if (paystatus && paystatus.status === "success") {
      return res.status(400).json({ error: "Payment already made" });
    }

    // Use the image database connection to query the Image model
    const Image = imageDb.model("Image", ImageModel.schema);
    const result = await Image.findOne({ userId: userId });
    if (result) {
      return res.status(200).json({ message: "Image already uploaded" });
    }

    // Save the new image URL for the user
    const newImage = await Image.create({
      email: user.email,
      userId: userId,
      url: url,
    });

    const answer = await newImage.save();
    if (!answer) {
      return res.status(201).json({
        success: true,
        message: "Image not uploaded successfully",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
    });
  } catch (error: any) {
    console.error("Error in image upload:", error);
    return res.status(500).json({
      success: false,
      message:
        error?.response?.data?.message || "Error processing the request.",
    });
  }
}
