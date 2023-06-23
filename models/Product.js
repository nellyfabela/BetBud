const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            autoIncrement: true, 
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        category_name: {
            type: DataTypes.STRING,
            references: {
                model: 'category',
                key: 'category_name'
            },
        },
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'product',
    }
);

module.exports = Product;