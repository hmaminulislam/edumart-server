const express = require("express");
const { getBlogs, getBlog } = require("./blog.controller");
const router = express.Router();

router.get("/blogs", getBlogs);
router.get("/blog/:id", getBlog);

module.exports = router;
