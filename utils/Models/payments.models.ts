import mongoose, { Document, Model, Schema } from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: String,
  orderId: String,
  status: String, // e.g., "pending", "success", "failed"
  paymentId: String, // Optional, used for verifying payment
});

const Payment = mongoose.model("Payment", paymentSchema);

export { Payment };
