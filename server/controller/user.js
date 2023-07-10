const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = createUser;
