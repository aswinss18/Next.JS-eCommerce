import mongoose from "mongoose";

export const connectMongoDB = async () => {
  console.log(process.env.MONGODB_URL!);

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(process.env.MONGODB_URL!);
};
