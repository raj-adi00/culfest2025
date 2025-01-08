import mongoose, { Schema, Document } from "mongoose";

const eventpartSchema = new mongoose.Schema({
  event: String,
  minParticipants: Number,
  maxParticipants: Number,
});

// module.exports = mongoose.model("Payment", paymentSchema);
const EventPart =
  mongoose.models.Eventpart || mongoose.model("EventPart", eventpartSchema);

export default EventPart;
