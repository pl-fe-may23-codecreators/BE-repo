import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize({
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

export default sequelize;
