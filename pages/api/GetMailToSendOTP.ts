import connectToDatabase from "./conntectToDatabase";
import SendMail from "./models/SenderEmail.model";

interface Data {
  email: string;
  passkey: string;
  count: number;
  lastReset: Date;
}

export const GetMailToSendOTP = async () => {
  // Get the environment variables for sender email and passkey
  const EnvSenderMail = process.env.EMAIL_USER;
  const EnvPassKey = process.env.EMAIL_PASS;
  try {
    // Connect to the database
    const res = await connectToDatabase();

    // If database connection fails, return env variables
    if (!res) return { sender: EnvSenderMail, passkey: EnvPassKey };

    // Find all email records
    const findMail = await SendMail.find({});

    // Loop through each email record
    for (const emailData of findMail) {
      const { email, passkey, count } = emailData; // Destructure the data

      // If the count is less than or equal to 495, update the count
      if (count <= 495) {
        // Update the email count in the database
        const updateCount = await SendMail.findOneAndUpdate(
          { email },
          { $set: { count: count + 1 } },
          { new: true } // Return the updated document
        );

        // If the update is successful, return the sender email and passkey
        if (updateCount) {
          return { sender: email, passkey };
        }
      }
    }

    // If no valid email was found or updated, return default environment values
    return { sender: EnvSenderMail, passkey: EnvPassKey };
  } catch (error) {
    console.error("Error in GetMailToSendOTP:", error);
    return { sender: EnvSenderMail, passkey: EnvPassKey };
  }
};
