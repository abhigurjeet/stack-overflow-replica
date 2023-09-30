const mongoose = require("mongoose");
const Question = require("./question");
const User = require("./user");
const answerSchema = new mongoose.Schema({
  creationDate: { type: Date, default: Date.now },
  answerDetail: { type: String, required: true },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  acceptedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Answer", answerSchema);
