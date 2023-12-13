const express = require("express");
const { getEvents, getEvent } = require("./event.controller");
const router = express.Router();

router.get("/events", getEvents);
router.get("/event/:id", getEvent)

module.exports = router;
