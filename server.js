const express = require("express")
const { setupRoutes } = require("./src/routes/index.routes")
const cors = require("cors")
require("dotenv").config()
const port = process.env.APP_PORT || 5001
const server = express()
server.use(express.json())

server.get("/", (req, res) => {
    res.send("Welcome to Ticket App")
})

server.use(
    cors({
      "origin":"http://localhost:3000"
    })
  )

setupRoutes(server)

server.listen(port, () => {
    console.log("server listening on port ", port)
} )