const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
<<<<<<< HEAD
const data = require('../seeds/targetLocations.json');

=======
const signUpRoutes = require("./signUpRoutes");
const loginRoutes = require("./loginRoutes");
const apiRoutes = require('./api');
>>>>>>> 2b218afc800e14f817752df45292e8ac16fd9c51
// Allows handlebars to render templates (Keep here for now)
router.get("/", (req, res) => {
  res.render("layouts/main");
});

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
    res.json(filteredObject);
  } else {
    res.status(404).send("T-Number OR Address Not Found!");
  }
});

router.use("/", homeRoutes);

<<<<<<< HEAD
module.exports = router;

=======
router.use("/", loginRoutes);
router.use("/", signUpRoutes);




module.exports = router;
>>>>>>> 2b218afc800e14f817752df45292e8ac16fd9c51
