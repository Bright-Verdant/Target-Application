const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const signUpRoutes = require("./signUpRoutes");
const loginRoutes = require("./loginRoutes");
const apiRoutes = require('./api');
const data = require('../seeds/targetLocations.json');
// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

router.use("/", homeRoutes);

router.use("/", loginRoutes);
router.use("/", signUpRoutes);


router.get(":tNumber|:address", (req, res) => {
  const search = req.params.tNumber || req.params.address;

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
    const valuesOnly = Object.values(filteredObject);
    res.json(valuesOnly);
  } else {
    res.status(404).send("T-Number OR Address Not Found!");
  }
});



module.exports = router;



