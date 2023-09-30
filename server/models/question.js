const mongoose = require("mongoose");
const User = require("./user");
const questionSchema = new mongoose.Schema({
  creationDate: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [{ type: String, required: true }],
});

module.exports = mongoose.model("Question", questionSchema);
