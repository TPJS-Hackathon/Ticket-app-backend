const Users = require("../models/users.model")

const signUpUser = (req, res, next) => {
    const {email} = req.body

    Users.findEmail(email)
        .then(email => {
            if (!email[0]) {
                next()
            } else {
                res.status(409).send("An account already exists with this email")
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("can't create user");
        })
}



module.exports = {
    signUpUser,
}