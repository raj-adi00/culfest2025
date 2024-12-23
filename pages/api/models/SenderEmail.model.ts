import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for the schema
interface EmailSchemaFormat extends Document {
  email: string;
  passkey: string;
  count: number;
  lastReset: Date;
}

// Define the schema
const EmailSchema = new Schema<EmailSchemaFormat>({
  email: { type: String, required: true },
  passkey: { type: String, required: true },
  count: { type: Number, default: 0 },
  lastReset: { type: Date, default: Date.now },
});

// Define the model
const SendMail = mongoose.models.SendMail || mongoose.model<EmailSchemaFormat>("SendMail", EmailSchema);

export default SendMail;
