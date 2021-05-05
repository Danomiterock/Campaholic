const db = require("../models");
const bcrypt = require("bcrypt")
// Defining methods for the usersController
// Passing empty object will return all documents
// In the Users collection

module.exports = {
    findAll: function (req, res) {
        db.User
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.User
            .findOne({ username: req.body.username })
            .populate({
                path: "posts"
            })
            .then(dbModel => res.json(dbModel))
    },
    create: async function (req, res) {
        const { first_name, last_name, email, username, password } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password);

            db.User
                .create({
                    first_name,
                    last_name,
                    username,
                    password: hashedPassword,
                    email,

                }).then(dbModel => res.json(dbModel))
        } catch (err) {
            res.status(422).json(err)
        }


    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ username: req.params.username }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

//need to find one where the username=username for login function. We will check to see if the username of the post is = to the req.session.username.
//the req.session.username will store a user that has logged in to LocalStorage and will terminate at the end of the session.


//create will make a new user and hash a password for them... we will need to check the password with bcrypt.compare when the created user returns to log in.
router.post("/login", async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });