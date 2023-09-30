const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  creationDate: { type: Date, default: Date.now },
  username: { type: String, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
