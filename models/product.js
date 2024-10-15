import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Product extends Model {}

Product.init(
  {
    // Model attributes are defined here
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductCode: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    paranoid: true, //used for soft delete
    sequelize, // We need to pass the connection instance
    freezeTableName: true, 
    modelName: 'product', // We need to choose the model name
    timestamps: true
  },
);

export default Product;