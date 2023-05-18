const database = require("../../database")

const getAll = () => {
    return database
        .query("SELECT * from tickets")
        .then(([results]) => results)
}

module.exports = {
    getAll,
}