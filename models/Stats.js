const { Model, DataTypes } = require('requelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        damage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 100,
                isNumeric: true,
                isDecimal: false,
            },
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 100,
                isNumeric: true,
                isDecimal: false,
            },
        },
        background: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [1, 300],
            },
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [1, 20],
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'stats',
    }
);

module.exports = Stats;