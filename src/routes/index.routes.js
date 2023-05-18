const authRouter = require("./auth.routes")


const setupRoutes = (server) => {
    server.use("/auth", authRouter)
}

module.exports = {
    setupRoutes
}