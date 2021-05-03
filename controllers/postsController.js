const db = require("../models");

// Defining methods for the postsController
// Passing empty object will return all documents
// In the Posts collection

module.exports = {
  findAll: function(req, res) {
    db.Post
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}