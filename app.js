// DEPENDACIES
const express = require("express")
const morgan = require("morgan")

// CONFIGURATION
const app = express()

// ROUTES
app.get("/", ( req, res ) => {
    res.setHeader('Content-Type', 'text-html')
    res.write(
        'Welcome'
    )
    res.end()
})

// MIDDLEWARE TO SEE HTTP REQUESTS
app.use(morgan("tiny"))

module.exports = app;
