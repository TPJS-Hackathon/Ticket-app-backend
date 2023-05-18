const database = require("../../database")

const getAll = () => {
    return database
        .query("SELECT * from tickets")
        .then(([results]) => results)
}

const createTicket = (ticket) => {
    return database
    .query("INSERT INTO tickets SET ?", ticket)
    .then(([results]) => results);
}

module.exports = {
    getAll,
    createTicket,
}