import { Sequelize } from 'sequelize'
import dbConfig from '../dbconfig'

const sequelize = new Sequelize(dbConfig.url, {
  dialectOptions: {
    ssl: true
  }
  // dialect: 'postgres',
  // define: {
  // },
})

export default sequelize
