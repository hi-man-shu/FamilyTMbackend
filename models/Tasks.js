const mongooese = require("mongoose");
const Schema = require(mongooese.Schema);

const taskSchema = Schema({
  title: String,
  des: String,
  dueDate: Date,
  isCompleted: Boolean,
  assign: String,
});

module.exports = mongooese.model("task", taskSchema);
