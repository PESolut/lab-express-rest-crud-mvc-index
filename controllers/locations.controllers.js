const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/locations.model")

locations.get("/", (req, res) => {
    res.json(locationsArray)
})

module.exports = locations;