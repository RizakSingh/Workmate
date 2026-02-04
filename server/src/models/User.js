import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    enum: ["free", "paid"],
    default: "free"
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
