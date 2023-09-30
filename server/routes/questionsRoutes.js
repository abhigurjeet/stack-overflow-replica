const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");

router.get("/", questionsController.getAllQuestions);
router.post("/user", questionsController.addUser);
router.post("/question", questionsController.addQuestion);
router.get("/question/:id", questionsController.getQuestion);
router.post("/question/:id", questionsController.addAnswer);
router.get("/question/:id/answers", questionsController.getAllAnswers);

module.exports = router;
