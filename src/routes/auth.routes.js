const authRouter = require("express").Router()
const UserController = require("../controllers/users.controller")
const { signUpUser } = require("../middlewares/users.middleware")

//* create a new user, end-point: ... /auth/sign-up
authRouter.post("/sign-up", signUpUser, UserController.createUser)

//* login with an user, end-point .../auth/login
authRouter.post("/login", UserController.loginUser)




module.exports = authRouter