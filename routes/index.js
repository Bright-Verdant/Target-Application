const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require('./api');
// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

router.use("/", homeRoutes);


router.use('/api', apiRoutes);

module.exports = router;