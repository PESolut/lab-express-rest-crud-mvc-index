// DEPENDACIES
const express = require("express")
const morgan = require("morgan")

// CONFIGURATION
const app = express()

// ROUTES

// Generic route
app.get("/", ( req, res ) => {
    res.setHeader('Content-Type', 'text-html')
    res.write(
        'Hello, world!'
    )
    res.end()
})

// Locations controller
const locationsController = require("./controllers/locations.controllers");
app.use("/locations", locationsController);

// Machines controller
const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

// Persons controller
const personsController = require('./controllers/persons.controller');
app.use("/persons", personsController);

// Plans controller
const plansController = require('./controllers/plans.controller');
app.use("/plans", plansController)

// Events controller
const eventsController = require('./controllers/special-events.controller');
app.use('/events', eventsController)

// MIDDLEWARE TO SEE HTTP REQUESTS
app.use(morgan("tiny"))

module.exports = app;
