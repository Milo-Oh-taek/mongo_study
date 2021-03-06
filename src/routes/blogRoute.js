const { Router } = require("express");
const blogRouter = Router();
const { Blog } = require("../models/Blog");
const { isValidObjectId } = require("mongoose");
const { User } = require("../models/User");

blogRouter.post("/", async (req, res) => {
  try {
    const { title, content, islive, userId } = req.body;
    if (typeof title !== "string")
      res.status(400).send({ err: "title is required" });
    if (typeof content !== "string")
      res.status(400).send({ err: "content is required" });
    if (islive && islive !== "boolean")
      res.status(400).send({ err: "islive must be a boolean" });
    if (!isValidObjectId(userId))
      res.status(400).send({ err: "userId is invalid" });
    let user = await User.findById(userId);
    if (!user) res.status(400).send({ err: "user does not exist" });

    let blog = new Blog({ ...req.body, user });
    await blog.save();
    return res.send({ blog });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

blogRouter.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

blogRouter.get("/:userId", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

blogRouter.put("/:userId", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

blogRouter.patch("/:userId", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

module.exports = { blogRouter };
