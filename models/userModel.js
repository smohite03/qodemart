import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const User = sequelize.define('RegistrationData', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
  },
  gender: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true,
  timestamps: false,
  logging: false,

});

// sequelize.sync({ alter: true });
export default User;
