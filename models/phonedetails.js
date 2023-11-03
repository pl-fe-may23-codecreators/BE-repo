'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhoneDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PhoneDetails.init({
    phoneId: DataTypes.STRING,
    namespaceId: DataTypes.STRING,
    name: DataTypes.STRING,
    capacityAvailable: DataTypes.ARRAY(DataTypes.STRING),
    capacity: DataTypes.STRING,
    priceRegular: DataTypes.INTEGER,
    priceDiscount: DataTypes.INTEGER,
    colorsAvailable: DataTypes.ARRAY(DataTypes.STRING),
    color: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.ARRAY(DataTypes.JSON),
    screen: DataTypes.STRING,
    resolution: DataTypes.STRING,
    processor: DataTypes.STRING,
    ram: DataTypes.STRING,
    camera: DataTypes.STRING,
    zoom: DataTypes.STRING,
    cell: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'PhoneDetails',
  });
  return PhoneDetails;
};