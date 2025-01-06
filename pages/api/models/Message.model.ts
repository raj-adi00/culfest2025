import mongoose, { Schema, Document } from "mongoose";

const messageSchema = new mongoose.Schema({
  email: String,
  message: String,
});

// module.exports = mongoose.model("Payment", paymentSchema);
const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
