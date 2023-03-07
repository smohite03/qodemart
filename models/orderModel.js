import { DataTypes } from 'sequelize';
import sequelize from '../../Express Database/connection';

const Order = sequelize.define('Order', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  custId: {
    type: DataTypes.INTEGER,
  },
  sellerId: {
    type: DataTypes.INTEGER,
  },
  productIds: {
    type: DataTypes.STRING,
  },
  orderStatus: {
    type: DataTypes.STRING,
  },
  paymentStatus: {
    type: DataTypes.STRING,
  },
  OrderDesciption: {
    type: DataTypes.STRING,
  },
}, {
  createdAt: true,
  updatedAt: true,
  freezeTableName: true,
  timestamps: true,
  logging: false,
});

// sequelize.sync({ alter: true });
export default Order;
