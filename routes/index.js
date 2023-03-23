const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const signUpRoutes = require("./signUpRoutes");
const loginRoutes = require("./loginRoutes");
const apiRoutes = require('./api');
// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

router.use("/", homeRoutes);

router.use("/", loginRoutes);
router.use("/", signUpRoutes);




module.exports = router;