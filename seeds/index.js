const sequelize = require('../config/connection');
const tBuilding = require('../models/tBuilding-model');
const targetData = require('./targetLocations.json');

const seedData = async () => {
  await sequelize.sync({ force: true });

  await tBuilding.bulkCreate(targetData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedData();