const router = require("express").Router();
const homeRoutes = require("./homeRoutes");

// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

router.use("/", homeRoutes);

module.exports = router;
