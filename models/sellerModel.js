import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const SellerProfile = sequelize.define('sellerProfile', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  sellerId: {
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
  pincode: {
    type: DataTypes.INTEGER,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  shopArea: {
    type: DataTypes.STRING,
  },
  gstNum: {
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
export default SellerProfile;
