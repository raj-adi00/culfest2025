import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./conntectToDatabase";
import SendMail from "./models/SenderEmail.model";


const addEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Destructure the email and passkey from the request body
      const { email, passkey } = req.body;

      // Check if email and passkey are provided
      if (!email || !passkey) {
        return res.status(400).json({ message: "Email and passkey are required" });
      }

      // Create a new sender email record
      const newEmail = new SendMail({
        email,
        passkey,
        count: 0, // Initialize count to 0
        lastReset: new Date(),
      });

      // Save the new email record
      await newEmail.save();

      // Return success response
      return res.status(201).json({ message: "Email added successfully", data: newEmail });
    } catch (error:any) {
      console.error("Error adding email:", error);
      return res.status(500).json({ message: "Server error", error: error?.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default addEmail;
