import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  teams: [
    {
      teamId: { type: String, default: uuidv4 }, // Generate unique teamId
      teamName: { type: String, required: true },
      teamMembers: [
        {
          //hello
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          name: { type: String, required: true },
        },
      ],
    },
  ],
});
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
