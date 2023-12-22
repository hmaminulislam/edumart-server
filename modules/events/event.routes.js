const express = require("express");
const { getEvents, getEvent } = require("./event.controller");
const router = express.Router();

// all events get 
router.get("/events", getEvents);

// single event get by id
router.get("/event/:id", getEvent)

module.exports = router;
