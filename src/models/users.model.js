const database = require("../../database")


const create = (user) => {
    return database
    .query("INSERT INTO users SET ?", user)
    .then(([results])=> results)
}

const findEmail = (email) =>  {
    return database
    .query("SELECT * FROM users WHERE email = ?", email)
    .then(([results]) => results)
}

const getAll = () => {
    return database
    .query("SELECT * from users")
    .then(([results]) => results)
}

module.exports = {
    create,
    findEmail,
    getAll,
}