const express = require("express");
const app = express();
const { userRouter } = require("./routes/userRoute");
const { blogRouter } = require("./routes/blogRoute");
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://admin:mARcL5KcoDDLFgSX@mongodbtutorial.1zhzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    mongoose.set("debug", true);
    console.log("mongodb conected");

    app.use(express.json());

    app.use("/user", userRouter);
    app.use("/blog", blogRouter);
    app.listen(3000, function () {
      console.log("server listening on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
