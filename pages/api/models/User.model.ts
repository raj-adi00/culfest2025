import mongoose, { Schema, Document } from 'mongoose';

// Define User Schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Avoid overwriting the model during hot reload in Next.js
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
