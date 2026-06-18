const express = require("express");
const multer = require("multer");
const uploadFile = require("../services/storage.service");
const postModel = require("./models/post.model.js");
const cors=require('cors')
const app = express();

const upload = multer({
  storage: multer.memoryStorage(),
});
app.use(cors())
app.use(express.json());

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);

  console.log(result);
  const post = await postModel.create({
    image: result.url,
    Caption: req.body.caption,
  });

  return res.status(201).json({
    message: "post saved successfully",
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  return res.status(201).json({
    message: "posts fetched successfully",
    posts,
  });
});

app.delete("/posts/:id", async (req, res) => {  
  const { id } = req.params;
  await postModel.findByIdAndDelete(id);
  return res.status(200).json({
    message: "post deleted successfully",
  });
});

module.exports = app;
