const express = require("express");
const events = express.Router();
const eventsArray = require("../models/plan.model")

events.get("/", (req, res) => {
    res.json(eventsArray)
})

module.exports = events;