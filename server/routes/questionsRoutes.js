const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");

router.get("/", questionsController.getAllQuestions);

module.exports = router;
