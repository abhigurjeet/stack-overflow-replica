const User = require("../models/user");
exports.addUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(200).send("User added");
      } else {
        return res.status(409).send("username already exists");
      }
    } catch (error) {
      res.status(500).send("Error creating new User: " + error.message);
    }
  };