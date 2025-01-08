// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import User from "./models/User.model";
// import Payment from "./models/Payment.model";
// import connectToDatabase from "./conntectToDatabase";

// type ResponseData = {
//   status: number;
//   message: string;
//   data?: any;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ status: 405, message: "Method Not Allowed" });
//   }

//   try {
//     const body = req.body;
//     const { event, session } = body;

//     if (!session || !session?.user?.id) {
//       return NextResponse.redirect("/login");
//     }

//     if (!event) {
//       return res
//         .status(400)
//         .json({ status: 400, message: "Event not provided" });
//     }
//     await connectToDatabase();
//     const user = await User.findById(session.user.id);
//     if (!user)
//       return res.status(400).json({
//         status: 400,
//         message: "Invalid User. Pleaser login",
//       });
//     const paymentStatus = await Payment.findOne({ userId: session.user.id });
//     if (!paymentStatus)
//       return res.status(400).json({ status: 400, message: "No payment Made" });
//     if (
//       (user.isNITJSR && paymentStatus.amount != 500) ||
//       (!user.isNITJSR && paymentStatus.amount != 1250)
//     )
//       return res
//         .status(401)
//         .json({ status: 401, message: "Invalid Payment amount" });
//     if (user.registeredEvents.includes(event)) {
//       return res
//         .status(405)
//         .json({ status: 405, message: "Already Registered" });
//     }
//     user.registeredEvents.push(event);

//     await user.save();

//     return res.status(200).json({
//       status: 200,
//       message: "Event successfully registered",
//       data: { event, user },
//     });
//   } catch (error: any) {
//     return res.status(500).json({
//       status: 500,
//       message: "Internal Server Error",
//       data: { error: error.message },
//     });
//   }
// }
import { NextApiRequest, NextApiResponse } from "next";
import User from "./models/User.model";
import Payment from "./models/Payment.model";
import connectToDatabase from "./conntectToDatabase";

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
    const { event, session, userEmails } = body;
    // console.log(body);
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

    if (!userEmails || !Array.isArray(userEmails) || userEmails.length === 0) {
      return res.status(400).json({
        status: 400,
        message: "No userEmails provided or invalid format",
      });
    }

    await connectToDatabase();

    const failedUpdates: { email: string; reason: string }[] = [];
    const successfulUpdates: string[] = [];

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
      } catch (err: any) {
        failedUpdates.push({ email, reason: err.message || "Unknown error" });
      }
    }
    console.log(failedUpdates);
    return res.status(200).json({
      status: 200,
      message: "Event registration processed",
      data: {
        successfulUpdates,
        failedUpdates,
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
