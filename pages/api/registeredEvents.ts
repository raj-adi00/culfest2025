import { NextApiRequest, NextApiResponse } from "next";
import User from "./models/User.model";
import Payment from "./models/Payment.model";
import connectToDatabase from "./conntectToDatabase";
import Event from "./models/Event.model";
import { v4 as uuidv4 } from "uuid";
import EventPart from "./models/EventPart.model";
// import Event from "./models/Event.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: 405, message: "Method Not Allowed" });
  }

  try {
    const body = req.body;
    const { user } = body;
    // console.log(body);
    if (!user) {
      return res
        .status(401)
        .json({ status: 401, message: "User not logged in" });
    }
    // console.log(user);

    await connectToDatabase();
    const response = await User.findOne({
      email: user.email,
    });
    if (!response) {
      return res.status(401).json({ status: 401, message: "User not found" });
    }
    const registered = response.registeredEvents;
    return res.status(200).json({
      status: 200,
      message: "Event registration processed",
      events: registered,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      data: { error: error.message },
    });
  }
}
