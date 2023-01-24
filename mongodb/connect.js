import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB is connected."))
    .catch((e) => {
      console.log("Failed to connect MongoDB: " + e.message);
    });
};

export default connectDB;
