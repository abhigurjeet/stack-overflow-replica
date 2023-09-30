const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");

router.get("/", questionsController.getAllQuestions);
router.post("/user", questionsController.addUser);
router.post("/question", questionsController.addQuestion);
router.get("/question/:id", questionsController.getQuestion);
module.exports = router;
