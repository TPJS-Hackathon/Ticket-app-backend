const Ticket = require("../models/tickets.model")

const getAllTickets =  (req, res) => {
    Ticket.getAll()
    .then((results) => res.status(200).json(results))
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving passport from db");
      });
}


module.exports = {
    getAllTickets
}