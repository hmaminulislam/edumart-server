const express = require("express");
const { getEvents } = require("../controller/event.controller");
const router = express.Router();

router.get('/events', getEvents)


module.exports = router;