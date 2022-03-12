const express = require('express')

const app = express()
app.use(express.json())

// Imports routes

const productRoutes = require("./routes/productRoute")

app.use("/api/v1", productRoutes)

module.exports = app