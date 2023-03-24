const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const data = require('../seeds/targetLocations.json');

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

module.exports = router;

