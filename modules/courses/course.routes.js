const express = require("express");
const { getCourses, getCourse } = require("./course.controller");
const router = express.Router();

router.get("/courses", getCourses);
router.get("/course/:id", getCourse);

module.exports = router;