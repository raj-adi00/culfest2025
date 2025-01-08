// pages/api/models/EventPart.model.ts

import mongoose, { Schema, Document, Model } from "mongoose";

// 1. Define an interface representing a document in MongoDB.
interface IEventPart extends Document {
  event: string;
  minParticipants: number;
  maxParticipants: number;
}

// 2. Create a Schema corresponding to the document interface.
const eventPartSchema: Schema<IEventPart> = new Schema({
  event: { type: String, required: true, unique: true },
  minParticipants: { type: Number, required: true },
  maxParticipants: { type: Number, required: true },
});

// 3. Prevent model recompilation errors in development.
const EventPart: Model<IEventPart> =
  mongoose.models.EventPart || mongoose.model<IEventPart>("EventPart", eventPartSchema);

// 4. Export the model.
export default EventPart;
