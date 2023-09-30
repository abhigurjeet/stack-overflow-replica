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
exports.getAllAnswers = async (req, res) => {
  try {
    const { questionId } = req.body;
    const answers = await Answer.find({ questionId });
    res.status(200).send(answers);
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error getting all questions: " + error.message);
  }
};
exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(200).send("User added");
    } else {
      return res.status(409).send("username already exists");
    }
  } catch (error) {
    res.status(500).send("Error creating new User: " + error.message);
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
    await newQuestion.save();
    res.status(200).send("Question added");
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error creating a new question: " + error.message);
  }
};

exports.addAnswer = async (req, res) => {
  try {
    const { questionId, answerDetail } = req.body;
    const newAnswer = new Answer({ questionId, answerDetail, acceptedBy: [] });
    await newAnswer.save(); // Wait for the answer to be saved
    return res.status(200).send("Answer added");
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error adding new answer: " + error.message);
  }
};
