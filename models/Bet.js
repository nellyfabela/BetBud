const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bet extends Model {}

Bet.init(

    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'bet'
        // indexes: [
        //     {
        //         unique: true,
        //         fields: ['user_usnm'],
        //         name: 'idx_user',
        //     },
        // ]
    },

);

module.exports = Bet;