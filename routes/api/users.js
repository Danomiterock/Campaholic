const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)

router.route("/login")
  .get(usersController.findOne)
//   .put(usersController.update)

module.exports = router;

//the :username route is going to findOne user by username