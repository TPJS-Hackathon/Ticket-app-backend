const { hashPassword, verifyPassword } = require("../helpers/password")
const jwt = require("jsonwebtoken")
const User = require("../models/users.model")


const createUser = (req, res) => {
    const { email, password } = req.body;
  
    //* hash pass
    hashPassword(password).then((hashedPassword) => {
      const user = {
        email: email,
        hashedPassword: hashedPassword,
      };
      User.create(user)
        .then((results) =>
          res.status(201).json({
            email: email,
            message: `The user with the email ${email} has been created`,
          })
        )
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error accessing the db.");
        });
    });
};


  const loginUser = (req, res) => {
    const { email, password } = req.body

    User.findEmail(email)
        .then((emails) => {
            if (emails[0] != null && emails.length > 0) {
                verifyPassword(emails[0].hashedPassword, password).then(
                    (isVerified) => {
                        if (isVerified) {
                            const payload = { sub: emails[0].id}
                            const token = jwt.sign(payload, process.env.JWT_SECRET)
    
                            delete emails[0].hashedPassword

                            res.send({token , user: emails[0]})
                        } else {
                            res.status(401).send("Invalid Email or Password")
                        }
                    }
                )
            } else {
                res.status(409).send("Invalid Email or Password")
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });

}


const getAllUsers = (req, res) => {
  User.getAll()
    .then(results => res.status(200).json(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving passport from db");
    });
}

module.exports = {
    createUser,
    loginUser,
    getAllUsers
}
