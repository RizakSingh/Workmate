import mongoose from "mongoose";

export const startMongo = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing in environment variables");
    }

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    throw error;
  }
};
