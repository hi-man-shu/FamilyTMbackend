const express = require("express");
const mongoose = require("mongoose");
const { find, findOne } = require("./models/member");
require("dotenv").config();
const app = express();
const Member = require("./models/member");

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("app runnging on port", PORT);
      const url = new URL(`http://localhost:${PORT}`);
      console.log(url.href);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/login", (req, res) => {});

app.post("/ragister", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const member = new Member({ email, password });
  await member.save();
});
