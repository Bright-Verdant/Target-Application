const router = require("express").Router();

// Displays Home Page
router.get("/login", (req, res) => {
  res.render("login", { title: "Home Page" });
});

module.exports = router;
