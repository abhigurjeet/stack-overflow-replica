const express = require("express");
const app = express();
const questionsRoutes = require("./routes/questionsRoutes");
app.use(questionsRoutes);

app.listen("3002", console.log("running server"));
