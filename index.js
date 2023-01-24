import express from "express";
import * as dotnev from "dotenv";
import cors from "cors";

dotnev.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("hello");
});

const startServer = () => {
  app.listen(8080, () => console.log("Server is running."));
};

startServer();
