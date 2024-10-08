import mongoose from "mongoose";

export const connectDB = async () => {
  
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "assignment",
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log("ERROR CONNECTING TO MONGODB", err);
    });
};
