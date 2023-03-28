const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const userRoutes = require('../routes/api/userRoutes');
const signUp = require('./signUp');
const saveCard = require('../routes/api/userRoutes');
const apiRoutes = require('./api');
const data = require('../seeds/targetLocations.json');
// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

router.use("/saveCard", saveCard)
router.use("/", homeRoutes);
router.use('/', userRoutes);
router.use("/", signUp);
router.use('/api', apiRoutes);

router.get('/api/:value',  (req, res) => {
  const search = req.params.value;

  const targetObject = data.find(
    obj => obj.tNumber.toLowerCase() === search.toLowerCase() || obj.address.toLowerCase() === search.toLowerCase()
  );

  if (targetObject) {
    res.json(targetObject);
  } else {
    res.status(404).send("T-Number OR Address Not Found!");
  }
});

module.exports = router;



