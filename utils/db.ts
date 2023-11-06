import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoURL = process.env.MOBOG_URL;

  if (!mongoURL) {
    throw new Error("MongoDB URL is not defined in the environment.");
  }
  try {
    await mongoose.connect(mongoURL);
  } catch (error) {
    throw new Error("connection fgailed");
  }
};

export default connectDB;
