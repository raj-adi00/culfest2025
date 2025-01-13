import mongoose from "mongoose";

let imageDb: mongoose.Connection | null = null;

export default async function connectToImageDatabase() {
  if (imageDb) return imageDb;

  // Use mongoose.createConnection to connect to the image database
  imageDb = mongoose.createConnection(
    "mongodb+srv://raj_adi:adityaraj234@cluster0.nljbs.mongodb.net/"
  );

  // Make sure the connection is successful before returning the connection
  imageDb.on("connected", () => {
    console.log("Connected to the image database");
  });

  return imageDb;
}
