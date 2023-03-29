const router = require("express").Router();


// Displays Home Page
router.get("/guest", (req, res) => {
  res.render("guestpage", { title: "guestpage" });
});

module.exports = router;
