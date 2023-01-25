import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      posts,
    });
  } catch (error) {
    return res.status(400).send({
      error: error.response?.data?.message || error.message,
    });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, image } = req.body;
    const imageUrl = await cloudinary.uploader.upload(image);
    const newPost = await Post.create({
      name,
      prompt,
      image: imageUrl.url,
    });
    return res.status(201).json({
      post: newPost,
    });
  } catch (error) {
    return res.status(400).send({
      error: error.response?.data?.message || error.message,
    });
  }
});

export default router;
