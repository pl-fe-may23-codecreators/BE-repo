const { Sequelize } = require('sequelize');
const dbConfig = require('./dbconfig');

const sequelize = new Sequelize(dbConfig.url, {
  dialectOptions: {
    ssl: true,
  }
  // dialect: 'postgres',
  // define: {
  // },
});

module.exports = sequelize;