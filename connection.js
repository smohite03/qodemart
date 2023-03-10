import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// For Postgres SQL Server
const sequelize = new Sequelize(`postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_USERNAME_PASSWORD}@localhost:5432/${process.env.DATABASE_NAME}`);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
