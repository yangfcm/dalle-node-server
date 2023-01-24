import express from "express";
import * as dotnev from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotnev.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("hello");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server is running."));
  } catch (e) {
    console.log(e.message);
  }
};

startServer();
