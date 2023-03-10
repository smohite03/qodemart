import { DataTypes } from 'sequelize';
import sequelize from '../connection';

export const Cart = sequelize.define('Cart', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  productRate: {
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

export const CustomerProfile = sequelize.define('customerProfile', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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

export const Order = sequelize.define('Order', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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

export const Products = sequelize.define('Products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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

export const SellerProfile = sequelize.define('sellerProfile', {
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
export default User;

User.hasOne(SellerProfile, { onDelete: 'CASCADE', foreignKey: 'sellerId' });
//   SellerProfile.belongsTo(User,{onDelete :'CASCADE'});

User.hasOne(CustomerProfile, { onDelete: 'CASCADE', foreignKey: 'customerId' });
//   CustomerProfile.belongsTo(User,{onDelete :'CASCADE'});

User.hasMany(Products, { onDelete: 'CASCADE', foreignKey: 'sellerId' });
//   Products.belongsTo(User,{onDelete :'CASCADE'});

CustomerProfile.hasMany(Order, { onDelete: 'CASCADE', foreignKey: 'custId' });
// Order.belongsTo(CustomerProfile,{onDelete :'CASCADE'});

SellerProfile.hasMany(Order, { onDelete: 'CASCADE', foreignKey: 'sellerId' });
// Order.belongsTo(SellerProfile,{onDelete :'CASCADE'});

User.hasMany(Cart, { onDelete: 'CASCADE', foreignKey: 'customerId' });
// Cart.belongsTo(User,{onDelete :'CASCADE'});

Products.hasOne(Cart, { onDelete: 'CASCADE', foreignKey: 'productId' });
// Cart.belongsTo(Products , {onDelete : 'CASCADE'});

// sequelize.sync({ alter: true });
