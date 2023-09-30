const User = require("../models/user");
const Question = require("../models/question");

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({});
    res.send(questions);
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error getting all questions: " + error.message);
  }
};

exports.addQuestion = async (req, res) => {
  try {
    const { username, title, body, tags } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const newQuestion = new Question({
      user: user._id, // Set the user field to the user's _id
      title: "This is the first question",
      body: "This is a shipments assignment. So how do we proceed further?",
      tags: ["first", "shipments"],
    });
    res.send(questions);
  } catch (error) {
    // Handle the error here
    res.status(500).send("Error creating a new question: " + error.message);
  }
};

exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      const newUser = new User({ username, password });
      await newUser.save();
    } else {
      return res.status(409).send("username already exists");
    }
  } catch (error) {
    // Handle the error here
    res
      .status(500)
      .send(
        "Error creating new User, make sure username and password is not empty. Error message: " +
          error.message
      );
  }
};
// const user = await User.findOne({ username: "Gurjeet" });
// if (!user) {
//   return res.status(404).send("User not found");
// }
// const newQuestion = await new Question({
//   user: user._id, // Set the user field to the user's _id
//   title: "This is the fourth question",
//   body: "This is a shipments assignment. So how do we proceed further?",
//   tags: ["fourth", "shipments"],
// });
// await newQuestion.save();
