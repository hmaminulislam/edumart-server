const express = require("express");
const { getCourses, getCourse, getCoursesFilter } = require("./course.controller");
const router = express.Router();

// all courses get
router.get("/courses", getCourses);

// single course get by id
router.get("/course/:id", getCourse);

// courses filter 
router.get("/coursesfilter", getCoursesFilter);

module.exports = router;