const router = require("express").Router();

// Displays Sing up
router.get("/", (req, res) => {
  res.render("signUp", { title: "Sign Up Page" });
});

module.exports = router;