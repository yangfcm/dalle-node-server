import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Database is connected"))
    .catch((e) => {
      throw e;
    });
};

export default connectDB;
