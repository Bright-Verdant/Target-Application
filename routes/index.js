const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const userRoutes = require('../routes/api/userRoutes');
const signUp = require('./signUp');
const apiRoutes = require('./api');
const data = require('../seeds/targetLocations.json');
// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

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
    const filteredObject = {
      tNumber: targetObject.tNumber,
      address: targetObject.address,
      city: targetObject.city,
      state: targetObject.state,
      postal: targetObject.postal
    };
    res.json(filteredObject);
  } else {
    res.status(404).send("T-Number OR Address Not Found!");
  }
});

module.exports = router;



