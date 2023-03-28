const router = require("express").Router();

// Displays Login Page
router.get("/", (req, res) => {
  res.render("login", { title: "Login" });
});

// Displays Home Page
router.get("/home", (req, res) => {
  res.render("homepage", { title: "Home" });
});

module.exports = router;
