import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/Quirex');
    console.log("✅ Db connected successfully............");
  } catch (error) {
    console.error("❌ Db connection failed:", error.message);
  }
}
