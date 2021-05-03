const router = require("express").Router();
const bookRoutes = require("./books");
const postRoutes = require("./posts")

// Book routes
router.use("/books", bookRoutes);
router.use("/posts", postRoutes);

module.exports = router;
