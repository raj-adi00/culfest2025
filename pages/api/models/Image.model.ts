import mongoose, { Schema, Document } from "mongoose";

const imageSchema = new mongoose.Schema({
  email: String,
  userId: String,
  url: String,
});

// module.exports = mongoose.model("Payment", paymentSchema);
const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);

export default Image;
