"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconfig_1 = __importDefault(require("../dbconfig"));
const sequelize = new sequelize_1.Sequelize(dbconfig_1.default.url, {
    dialectOptions: {
        ssl: true
    }
});
exports.default = sequelize;
