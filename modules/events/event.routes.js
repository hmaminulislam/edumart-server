const express = require("express");
const { getEvents } = require("./event.controller");
const router = express.Router();

router.get("/events", getEvents);

module.exports = router;
