require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const questionsRoutes = require("./routes/questionsRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().catch((err) => console.log(err));
async function main() {
  app.use(cors());
  await mongoose.connect(`${process.env.DATABASE_URL}/mainDb`).then(
    (res) => console.log("Connected to the database"),
    (err) => console.log("Error connecting to database ->",err.message)
  )
  app.use(questionsRoutes);
}

app.listen("3008", console.log("running server"));
