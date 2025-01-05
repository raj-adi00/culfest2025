import mongoose, { Schema, Document } from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: String,
  orderId: String,
  status: String, // e.g., "pending", "success", "failed"
  paymentId: String, // Optional, used for verifying payment
  amount: String,
});

// module.exports = mongoose.model("Payment", paymentSchema);
const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
