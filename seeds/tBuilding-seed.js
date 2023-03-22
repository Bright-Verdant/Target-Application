// this code is defunct and replaced by seeds/index.js correct?



const fs = require('fs');
const tBuilding = require('../models/tBuilding-model');

// Read the JSON file
const tBuildingData = fs.readFileSync('./targetLocations.json', 'utf-8'); 

// the above line 5 is throwing an error right now





// Parse the JSON data
const data = JSON.parse(tBuildingData);

// Insert the data into the database
tBuilding.bulkCreate(data)
  .then(() => console.log('Data inserted successfully'))
  .catch((err) => console.error(err));
