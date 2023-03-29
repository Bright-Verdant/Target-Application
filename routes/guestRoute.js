const router = require("express").Router();


// Displays Home Page
router.get("/guest", (req, res) => {
  res.render("guestpage", { title: "Home" });
});

module.exports = router;
