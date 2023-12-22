const express = require("express");
const { getCourses, getCourse } = require("./course.controller");
const router = express.Router();

// all courses get
router.get("/courses", getCourses);

// single course get by id
router.get("/course/:id", getCourse);

module.exports = router;