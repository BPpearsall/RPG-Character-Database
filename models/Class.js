const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {}

Class.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [1, 30]
            }
        },
        alignment: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [1, 30]
            }
        },
    },
    {
        sequelize,
        timestamps:false,
        underscored: true,
        modelName: 'class'
    }
);

module.exports = Class;