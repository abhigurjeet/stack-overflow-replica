const Question = require("../models/question");
const Answer = require("../models/answer");
exports.getAllAnswers = async (req, res) => {
    try {
      const questionId = req.params.id;
      const answers = await Answer.find({ questionId });
      res.status(200).send(answers);
    } catch (error) {
      // Handle the error here
      res.status(500).send("Error getting all answers: " + error.message);
    }
};
  exports.addAnswer = async (req, res) => {
    try {
      const questionId = req.params.id;
      const { answerDetail } = req.body;
      const newAnswer = new Answer({ questionId, answerDetail, acceptedBy: [] });
      const addedAnswer = await newAnswer.save().then((ans) => {
        return ans;
      });
      return res.status(200).send(addedAnswer);
    } catch (error) {
      // Handle the error here
      res.status(500).send("Error adding new answer: " + error.message);
    }
  };