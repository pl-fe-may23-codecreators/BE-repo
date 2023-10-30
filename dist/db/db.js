"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://codecreators_db_user:EIFoLEo5K4GSyLLROr5P0uPb3Ed8gUST@dpg-cktqiapfbg8c73afpcdg-a.frankfurt-postgres.render.com/codecreators_db', {
    dialectOptions: {
        ssl: true
    }
    // dialect: 'postgres',
    // define: {
    // },
});
exports.default = sequelize;
