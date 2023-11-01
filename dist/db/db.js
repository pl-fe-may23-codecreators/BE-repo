"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const sequelize = new sequelize_1.Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    dialectOptions: {
        ssl: true,
    },
});
exports.default = sequelize;
