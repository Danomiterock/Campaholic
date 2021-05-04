const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

// RWH code snips
router
  .route("/login")


  //creates new user and hashes a secure password with bcrypt, need to import bcrypt
app.post("/users", async ({ first_name, last_name, username, password }, res) =>{
  try{
  const hashedPassword = await bcrypt.hash(password);
  const user = {
    first_name,
    last_name,
    username,
    hashedPassword
  }

  } catch{
    
  }
})
