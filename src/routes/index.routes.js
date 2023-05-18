const authRouter = require("./auth.routes")
const ticketRouter = require("./tickets.routes")


const setupRoutes = (server) => {
    server.use("/auth", authRouter)
    server.use("/ticket", ticketRouter)
}

module.exports = {
    setupRoutes
}