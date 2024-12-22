import mongoose, { Schema, Document } from "mongoose";

const otpSchema = new mongoose.Schema({
  email: String,
  phone: String,
  otp: String,
  expireTime: Date,
});

// module.exports = mongoose.model("Payment", paymentSchema);
const Otp = mongoose.models.Otp || mongoose.model("Otp", otpSchema);

export default Otp;
