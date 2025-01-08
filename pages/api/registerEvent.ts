import { NextApiRequest, NextApiResponse } from "next";
import User from "./models/User.model";
import Payment from "./models/Payment.model";
import connectToDatabase from "./conntectToDatabase";
import Event from "./models/Event.model";
import { v4 as uuidv4 } from "uuid";
import EventPart from "./models/EventPart.model";
import mongoose from "mongoose";
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
    await connectToDatabase();

    const failedUpdates: { email: string; reason: string }[] = [];
    const successfulUpdates: string[] = [];
    const noofParticipants = await EventPart.findOne({
      event: event?.toString().toLowerCase(),
    });
    if (!noofParticipants) {
      return res.status(409).json({ status: 404, message: "event not found" });
    }
    const minPart = noofParticipants?.minParticipants;
    const maxPart = noofParticipants?.maxParticipants;
    console.log(userEmails.length);
    console.log(minPart);
    console.log(maxPart);
    if (userEmails.length > maxPart || userEmails.length < minPart) {
      return res.status(200).json({
        status: 200,
        message: "no of participants not satisfied",
      });
    }
    let eventDoc = await Event.findOne({
      eventName: event.toString().toLowerCase(),
    });

    if (!eventDoc) {
      eventDoc = new Event({
        eventName: event.toString().toLowerCase(),
        teams: [],
      });
      await eventDoc.save();
    }
    const isTeamNameTaken = eventDoc.teams.some(
      (team: any) =>
        team.teamName.replace(/\s+/g, "").toLowerCase() ===
        teamName.replace(/\s+/g, "").toLowerCase()
    );
    if (isTeamNameTaken) {
      return res.status(400).json({
        status: 400,
        message: `Team name "${teamName}" is already taken for this event.`,
      });
    }

    const usersForEvent = [];
    let newTeam;
    try {
      const users = await User.find({ email: { $in: userEmails } });

      if (users.length !== userEmails.length) {
        const foundEmails = users.map((user) => user.email);
        const missingEmails = userEmails.filter(
          (email) => !foundEmails.includes(email)
        );
        missingEmails.forEach((email) =>
          failedUpdates.push({ email, reason: "User not found" })
        );
        return res.status(400).json({
          status: 400,
          message: "Failed to register",
          data: {
            successfulUpdates,
            failedUpdates,
          },
        });
      }
      for (const user of users) {
        try {
          // Check if payment exists
          const paymentStatus = await Payment.findOne({ userId: user._id });
          if (!paymentStatus) {
            failedUpdates.push({
              email: user.email,
              reason: "No payment made",
            });
            continue;
          }

          // Check registration conditions
          if (user.isNITJSR) {
            if (
              paymentStatus.amount == 350 &&
              user.registeredEvents.length > 0
            ) {
              failedUpdates.push({
                email: user.email,
                reason: "Paid 350 but already registered for another event",
              });
              continue;
            } else if (
              paymentStatus.amount != 350 &&
              paymentStatus.amount != 500
            ) {
              failedUpdates.push({
                email: user.email,
                reason: "Invalid payment amount for NITJSR user",
              });
              continue;
            }
          } else {
            if (
              paymentStatus.amount == 650 &&
              user.registeredEvents.length > 0
            ) {
              failedUpdates.push({
                email: user.email,
                reason: "Paid 650 but already registered for another event",
              });
              continue;
            } else if (
              paymentStatus.amount != 650 &&
              paymentStatus.amount != 1250
            ) {
              failedUpdates.push({
                email: user.email,
                reason: "Invalid payment amount for non-NITJSR user",
              });
              continue;
            }
          }

          if (user.registeredEvents.includes(event)) {
            failedUpdates.push({
              email: user.email,
              reason: "Already registered for this event",
            });
            continue;
          }

          // Add valid user to the event list
          usersForEvent.push({ userId: user._id, name: user.name });
        } catch (err: any) {
          failedUpdates.push({
            email: user.email,
            reason: err.message || "Validation error",
          });
        }
      }

      // If any user failed validation, return failed updates
      if (failedUpdates.length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Failed to register",
          data: {
            successfulUpdates,
            failedUpdates,
          },
        });
      }

      // Update users and event if all checks pass
      const session = await mongoose.startSession();
      session.startTransaction();
      try {
        // Update all users
        await Promise.all(
          users.map((user) => {
            user.registeredEvents.push(event);
            return user.save({ session });
          })
        );

        // Update the event model
        newTeam = {
          teamName,
          teamId: uuidv4(),
          teamMembers: usersForEvent,
        };

        await Event.updateOne(
          { eventName: event.toString().toLowerCase() },
          { $push: { teams: newTeam } },
          { session }
        );

        await session.commitTransaction();
      } catch (err) {
        await session.abortTransaction();
        return res
          .status(500)
          .json({ status: 500, message: "something went wrong" });
      } finally {
        session.endSession();
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
    } catch (err: any) {
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        data: { error: err.message },
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      data: { error: error.message },
    });
  }
}
