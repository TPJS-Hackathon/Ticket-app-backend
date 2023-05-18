const authRouter = require("./auth.routes")
const ticketRouter = require("./tickets.routes")
const databaseRouter = require("./database.routes")


const setupRoutes = (server) => {
    server.use("/auth", authRouter)
    server.use("/ticket", ticketRouter)
    server.use("/db", databaseRouter)
}

module.exports = {
    setupRoutes
}