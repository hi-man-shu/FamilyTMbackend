const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  email: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("member", memberSchema);
