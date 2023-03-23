const router = require("express").Router();

// Displays Home Page
router.get("/home", (req, res) => {
  res.render("homepage", { title: "Home Page" });
});

module.exports = router;
