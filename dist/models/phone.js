'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db/db"));
const { Model } = require('sequelize');
class Phone extends Model {
}
Phone.init({
    category: sequelize_1.DataTypes.STRING,
    phoneId: sequelize_1.DataTypes.STRING,
    itemId: sequelize_1.DataTypes.STRING,
    name: sequelize_1.DataTypes.STRING,
    fullPrice: sequelize_1.DataTypes.INTEGER,
    price: sequelize_1.DataTypes.INTEGER,
    screen: sequelize_1.DataTypes.STRING,
    capacity: sequelize_1.DataTypes.STRING,
    color: sequelize_1.DataTypes.STRING,
    ram: sequelize_1.DataTypes.STRING,
    year: sequelize_1.DataTypes.INTEGER,
    image: sequelize_1.DataTypes.STRING
}, {
    sequelize: db_1.default,
    modelName: 'Phone'
});
exports.default = Phone;
