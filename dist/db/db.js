const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(dbConfig.url, {
  dialect: 'postgres',
  define: {
  },
});