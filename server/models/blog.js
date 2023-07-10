const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    isDraft: { type: Boolean, default: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;
