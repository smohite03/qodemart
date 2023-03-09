import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const CustomerProfile = sequelize.define('customerProfile', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
  },
  pincode: {
    type: DataTypes.INTEGER,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  area: {
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
export default CustomerProfile;
