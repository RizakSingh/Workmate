import mongoose from "mongoose";

const aiOutputSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tool: {
      type: String,
      enum: ["email", "resume", "planner", "summarizer"],
      required: true,
    },
    input: {
      type: Object,
      required: true,
    },
    output: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AIOutput", aiOutputSchema);
