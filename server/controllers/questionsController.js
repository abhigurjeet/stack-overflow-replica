const User = require("../models/user");
const Question = require("../models/question");
const Answer = require("../models/answer");
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).send(questions);
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error getting all questions: " + error.message);
  }
};
exports.getQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await Question.find({ _id: questionId });
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send("Error getting question: " + error.message);
  }
};


exports.addQuestion = async (req, res) => {
  try {
    const { username, title, body, tags } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const newQuestion = new Question({ user: user._id, title, body, tags });
    newQuestion.save();
    res.status(200).send("Question added");
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error creating a new question: " + error.message);
  }
};



exports.editQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { username, title, body, tags } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: questionId },
      { title, body, tags },
      { new: true }
    );

    if (updatedQuestion) {
      return res.status(200).send("Question updated");
    } else {
      return res.status(404).send("Question not found");
    }
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error updating question: " + error.message);
  }
};

