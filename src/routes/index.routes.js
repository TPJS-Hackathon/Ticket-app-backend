const authRouter = require("./auth.routes")
const ticketRouter = require("./tickets.routes")
const databaseRouter = require("./database.routes")
const userRouter = require("./user.routes")


const setupRoutes = (server) => {
    server.use("/auth", authRouter)
    server.use("/ticket", ticketRouter)
    server.use("/db", databaseRouter)
    server.use("/users", userRouter)
}

module.exports = {
    setupRoutes
}