const ticketRouter = require("express").Router()
const ticketController = require("../controllers/tickets.controller")


ticketRouter.get("/", ticketController.getAllTickets)



module.exports = ticketRouter