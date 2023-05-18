const express = require("express")
require("dotenv").config()
const port = process.env.APP_PORT || 5001
const server = express()
server.use(express.json())



server.listen(port, () => {
    console.log("server listening on port ", port)
} )