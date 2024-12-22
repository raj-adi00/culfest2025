import cron from "node-cron";
import mongoose from "mongoose";
import SendMail from "./models/SenderEmail.model";
import connectToDatabase from "./conntectToDatabase";
const resetEmailCounts = async () => {
  try {
    await SendMail.updateMany(
      {},
      { $set: { count: 0, lastReset: new Date() } }
    );
    console.log("Email counts reset to 0.");
  } catch (error) {
    console.error("Error resetting email counts:", error);
  }
};

cron.schedule("0 0 * * *", async () => {
  console.log("Running cron job to reset email counts.");
  try {
    await connectToDatabase();
    await resetEmailCounts();
    console.log("Successfully Set Email Sent Count to 0");
  } catch (error) {
    console.log("Failed to refresh Email sent count");
  }
});
