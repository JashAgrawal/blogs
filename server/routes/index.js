const express = require("express");
const createUser = require("../controller/user");
const {
  createDraft,
  publishBlog,
  updateDraft,
  getAllBlogs,
  getAllDrafts,
  getBlogById,
  deleteBlog,
} = require("../controller/blog");
const router = express.Router();

router.post("/create-user", createUser);
router.post("/add-drafts", createDraft);
router.patch("/publish-blog/:blogId", publishBlog);
router.patch("/edit-drafts/:blogId", updateDraft);
router.get("/get-blog-by-id/:blogId", getBlogById);
router.get("/get-drafts/:userId", getAllDrafts);
router.get("/get-blogs", getAllBlogs);
router.delete("/delete-blog/:blogId", deleteBlog);

module.exports = router;
