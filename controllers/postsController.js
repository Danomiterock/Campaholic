const db = require("../models");

// Defining methods for the postsController
// Passing empty object will return all documents
// In the Posts collection

module.exports = {
  findAll: function (req, res) {
    db.Post
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRecent: function (req, res) {
    db.Post
      .find({}).sort({$natural: 1}).limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  create: function (req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  ,
  remove: function (req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

//need to store the username in the local session storage after user has signed in.
