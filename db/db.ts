import { Sequelize } from 'sequelize'
import dbConfig from '../dbconfig'

const sequelize = new Sequelize(dbConfig.url, {
  dialectOptions: {
    ssl: true
  }
})

export default sequelize
