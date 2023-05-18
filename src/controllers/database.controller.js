const Ticket = require("../models/tickets.model")
const tickets = require("../../SQL/ITSM_data_117.json")


const createTicket = (req, res) => {
    tickets.map((ticket) => Ticket.createTicket(ticket))
    res.status(200).send("Ticket table with data")
}


module.exports = {
    createTicket,
}