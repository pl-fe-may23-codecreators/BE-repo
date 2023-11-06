'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db/db"));
const PhoneDetails = db_1.default.define('PhoneDetails', {
    phoneId: sequelize_1.DataTypes.STRING,
    namespaceId: sequelize_1.DataTypes.STRING,
    name: sequelize_1.DataTypes.STRING,
    capacityAvailable: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    capacity: sequelize_1.DataTypes.STRING,
    priceRegular: sequelize_1.DataTypes.INTEGER,
    priceDiscount: sequelize_1.DataTypes.INTEGER,
    colorsAvailable: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    color: sequelize_1.DataTypes.STRING,
    images: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    description: sequelize_1.DataTypes.JSONB,
    screen: sequelize_1.DataTypes.STRING,
    resolution: sequelize_1.DataTypes.STRING,
    processor: sequelize_1.DataTypes.STRING,
    ram: sequelize_1.DataTypes.STRING,
    camera: sequelize_1.DataTypes.STRING,
    zoom: sequelize_1.DataTypes.STRING,
    cell: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING)
});
exports.default = PhoneDetails;
