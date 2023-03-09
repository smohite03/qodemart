import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const Products = sequelize.define('Products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  sellerId: {
    type: DataTypes.INTEGER,
  },
  imgpath: {
    type: DataTypes.STRING,
  },
  productName: {
    type: DataTypes.STRING,
  },
  productRate: {
    type: DataTypes.INTEGER,
  },
  productDiscription: {
    type: DataTypes.STRING,
  },
  productCategory: {
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
export default Products;
