import Sequelize from 'sequelize';

const sequelize = new Sequelize('UserInformation', 'user_1', 'test123', {
  host: 'localhost',
  dialect: 'postgres',
});

try {
  sequelize.authenticate();
  console.log('Connection established .');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
