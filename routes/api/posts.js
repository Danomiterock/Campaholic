const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/books"
router.route("/")
  .get(postsController.findAll);

module.exports = router;