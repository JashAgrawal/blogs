const Blogs = require("../models/blog");
const User = require("../models/user");

const createDraft = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    console.log(req.body);
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const draft = new Blogs({
      title,
      body,
      userId,
    });

    await draft.save();
    res.status(201).json({ data: draft });
  } catch (error) {
    console.error("Error creating draft:", error);
    res.json({ error, message: "error creating draft" });
  }
};
const publishBlog = async (req, res) => {
  try {
    const draft = await Blogs.findByIdAndUpdate(req.params.blogId, {
      isDraft: false,
    });
    res.status(200).json({ data: draft });
  } catch (error) {
    console.error("Error creating draft:", error);
    res.json({ error, message: "error creating draft" });
  }
};

const updateDraft = async (req, res) => {
  try {
    const { title, body } = req.body;
    await Blogs.findByIdAndUpdate(req.params.blogId, { title, body });
    res.status(200).json({ message: "Draft update success" });
  } catch (error) {
    console.error("Error update draft:", error);
    res.json({ error, message: "error update draft" });
  }
};
const getAllDrafts = async (req, res) => {
  try {
    const drafts = await Blogs.find({
      userId: req.params.userId,
      isDraft: true,
    });
    res.status(200).json({ data: drafts });
  } catch (error) {
    console.error("Error fetching draft:", error);
    res.json({ error, message: "error fetching draft" });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const drafts = await Blogs.find({ isDraft: false })
      .sort({ updatedAt: -1 })
      .limit(20);
    res.status(200).json({ data: drafts });
  } catch (error) {
    console.error("Error fetching draft:", error);
    res.json({ error, message: "error fetching draft" });
  }
};
const getBlogById = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.blogId);
    res.status(200).json({ data: blog });
  } catch (error) {
    console.error("Error fetching draft:", error);
    res.json({ error, message: "error fetching draft" });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndDelete(req.params.blogId);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error("Error deleting draft:", error);
    res.json({ error, message: "error deleting draft" });
  }
};
module.exports = {
  createDraft,
  publishBlog,
  updateDraft,
  getAllBlogs,
  getAllDrafts,
  getBlogById,
  deleteBlog,
};
