const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SaveData extends Model {}


SaveData.init(
  {
    tNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
   
    postal: {
        allowNull: true,
      type: DataTypes.STRING
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  




  {
    sequelize,
    freezeTableName: true,
    modelName: 'savedata',
    timestamps: false,
  }
);

module.exports = SaveData;