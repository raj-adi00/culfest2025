import { NextApiRequest, NextApiResponse } from "next";
import User from "./models/User.model";
import Payment from "./models/Payment.model";
import connectToDatabase from "./conntectToDatabase";
import Event from "./models/Event.model";
import { v4 as uuidv4 } from "uuid";
import EventPart from "./models/EventPart.model";
// import Event from "./models/Event.model";

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
    return res.status(405).json({ status: 405, message: "Method Not Allowed" });
  }

  try {
    const body = req.body;
    const { event, session, userEmails, teamName } = body;
    if (!session?.data || !session?.data?.user?.id) {
      return res
        .status(401)
        .json({ status: 401, message: "User not logged in" });
    }

    if (!event) {
      return res
        .status(400)
        .json({ status: 400, message: "Event not provided" });
    }
    if (!teamName || typeof teamName !== "string") {
      return res.status(400).json({
        status: 400,
        message: "Invalid or missing team name",
      });
    }
    if (!userEmails || !Array.isArray(userEmails) || userEmails.length === 0) {
      return res.status(400).json({
        status: 400,
        message: "No userEmails provided or invalid format",
      });
    }
    let eventDoc = await Event.findOne({ eventName: event });

    if (!eventDoc) {
      eventDoc = new Event({
        eventName: event,
        teams: [],
      });
      await eventDoc.save();
    }
    const isTeamNameTaken = eventDoc.teams.some(
      (team) => team.teamName === teamName
    );
    if (isTeamNameTaken) {
      return res.status(400).json({
        status: 400,
        message: `Team name "${teamName}" is already taken for this event.`,
      });
    }

    const usersForEvent = [];
    await connectToDatabase();

    const failedUpdates: { email: string; reason: string }[] = [];
    const successfulUpdates: string[] = [];
    const noofParticipants = await EventPart.findOne({ event: event });
    if (!noofParticipants.length) {
      return res.status(409).json({ status: 404, message: "event not found" });
    }
    const minPart = noofParticipants?.minParticipants;
    const maxPart = noofParticipants?.maxParticipants;
    if (noofParticipants > maxPart && noofParticipants < minPart) {
      return res.status(200).json({
        status: 200,
        message: "no of participants not satisfied",
      });
    }
    for (const email of userEmails) {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          failedUpdates.push({ email, reason: "User not found" });
          continue;
        }

        const paymentStatus = await Payment.findOne({ userId: user._id });
        if (!paymentStatus) {
          failedUpdates.push({ email, reason: "No payment made" });
          continue;
        }

        if (
          (user.isNITJSR && paymentStatus.amount != 500) ||
          (!user.isNITJSR && paymentStatus.amount != 1250)
        ) {
          failedUpdates.push({ email, reason: "Invalid payment amount" });
          continue;
        }

        if (user.registeredEvents.includes(event)) {
          failedUpdates.push({ email, reason: "Already registered" });
          continue;
        }

        user.registeredEvents.push(event);
        await user.save();
        successfulUpdates.push(email);
        usersForEvent.push({ userId: user._id, name: user.name });
      } catch (err: any) {
        failedUpdates.push({ email, reason: err.message || "Unknown error" });
      }
    }
    const newTeam = {
      teamName,
      teamId: uuidv4(), // Generate unique team ID
      teamMembers: usersForEvent,
    };
    if (
      successfulUpdates.length === userEmails.length &&
      usersForEvent.length > 0
    ) {
      // Add the new team with its members to the event

      await Event.updateOne(
        { eventName: event },
        { $push: { teams: newTeam } }
      );
    }

    return res.status(200).json({
      status: 200,
      message: "Event registration processed",
      data: {
        successfulUpdates,
        failedUpdates,
        newTeam,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      data: { error: error.message },
    });
  }
}
