const mongoose = require("mongoose");
const Blogs = require("./blog");

const userSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
