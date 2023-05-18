const databaseRouter = require("express").Router()
const databaseController = require("../controllers/database.controller")


databaseRouter.post("/", databaseController.createTicket)



module.exports = databaseRouter