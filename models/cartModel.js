import { DataTypes } from 'sequelize';
import sequelize from '../../Express Database/connection';

const Cart = sequelize.define('Cart', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  custId: {
    type: DataTypes.INTEGER,
  },
  productId: {
    type: DataTypes.INTEGER,
  },
  productName: {
    type: DataTypes.STRING,
  },
  productQuantity: {
    type: DataTypes.INTEGER,
  },
}, {
  createdAt: true,
  updatedAt: true,
  freezeTableName: true,
  timestamps: true,
  logging: false,

});

// sequelize.sync({ alter: true });
export default Cart;
