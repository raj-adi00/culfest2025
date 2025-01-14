import mongoose from "mongoose";

let mainDb: mongoose.Connection | null = null;

export default async function connectToDatabase() {
  if (mainDb) return mainDb;

  // Connect to the main database without deprecated options
  const connection = await mongoose.connect(process.env.MONGODB_URL as string);

  mainDb = connection.connection;
  return mainDb;
}
