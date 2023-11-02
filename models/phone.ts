'use strict'

import { DataTypes } from "sequelize";
import sequelize from "../db/db";

const {
  Model
} = require('sequelize')

class Phone extends Model {}
Phone.init({
  category: DataTypes.STRING,
  phoneId: DataTypes.STRING,
  itemId: DataTypes.STRING,
  name: DataTypes.STRING,
  fullPrice: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  screen: DataTypes.STRING,
  capacity: DataTypes.STRING,
  color: DataTypes.STRING,
  ram: DataTypes.STRING,
  year: DataTypes.INTEGER,
  image: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Phone'
})

export default Phone;
