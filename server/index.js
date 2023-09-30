const express = require("express");
const app = express();
const mongoose = require("mongoose");
const questionsRoutes = require("./routes/questionsRoutes");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://abhigurjeet:dq250IwFtEVMq8Nd@cluster0.mjkbohf.mongodb.net/mainDb"
  );
  app.use(questionsRoutes);
}

app.listen("3001", console.log("running server"));
