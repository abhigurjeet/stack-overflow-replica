const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");
const userController=require("../controllers/userController");
const answerController=require("../controllers/answersController")

router.get("/", questionsController.getAllQuestions);
router.post("/user", userController.addUser);
router.post("/question", questionsController.addQuestion);
router.get("/question/:id", questionsController.getQuestion);
router.post("/question/:id", answerController.addAnswer);
router.get("/question/:id/answers", answerController.getAllAnswers);

module.exports = router;
