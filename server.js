const express = require("express")
const { setupRoutes } = require("./src/routes/index.routes")
require("dotenv").config()
const port = process.env.APP_PORT || 5001
const server = express()
server.use(express.json())

server.get("/", (req, res) => {
    res.send("Welcome to Ticket App")
})

setupRoutes(server)

server.listen(port, () => {
    console.log("server listening on port ", port)
} )