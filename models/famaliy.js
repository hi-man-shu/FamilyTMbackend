const mongooese = require("mongoose");
const Schema = require(mongooese.Schema);

const familyschema = Schema({
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "member",
    },
  ],
  Tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "task",
    },
  ],
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "history",
    },
  ],
});

module.exports = mongooese.model("family", familyschema);
