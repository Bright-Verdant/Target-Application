const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class tBuilding extends Model {}
// this model utilizes the data from the targetLocations.json seed file excepting (neighborhood, mailCode, intersectionDesc, postalZip, quadrant, quadrantDesc, latitude, longitude, timezone) this data is available in the seed file but is not utilized by the model

tBuilding.init(
  {
    tNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    storeType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    postal: {
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
    },
    county: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },




  {
    sequelize,
    freezeTableName: true,
    modelName: 'tBuilding',
    timestamps: false,
  }
);

module.exports = tBuilding;

















