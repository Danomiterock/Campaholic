const db = require("../models");
const bcrypt = require("bcrypt");
const router = require("express").Router();

// Defining methods for the usersController
// Passing empty object will return all documents
// In the Users collection

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.User.findOne({ where: { username: req.body.username } })
      .populate({
        path: "posts",
      })
      .then((dbModel) => res.json(dbModel));
  },
  create: async function (req, res) {
    try{
  console.log(req.body);
     const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
  let newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
  }
  db.User.create(newUser)
  req.session.save(() => {
    req.session.username = newUser.username;
    req.session.logged_in = true;

    res.json({ user: newUser, message: "You are now logged in!" });
  })
} catch (err){
  res.status(422).json(err)
}

},

  login: async function (req, res) {
    try {
      const userData = await User.findOne({
        where: { username: req.body.username },
      });

      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }

      req.session.save(() => {
        req.session.username = userData.username;
        req.session.logged_in = true;

        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  update: function (req, res) {
    db.User.findOneAndUpdate({ username: req.params.username }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

