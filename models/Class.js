const { Model, Datatypes } = require('sequelize');
const sequilize = require('../config/connection');

class Class extends Model {}

Class.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Datatypes.STRING(30),
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [1, 30]
            }
        },
        alignment: {
            type: Datatypes.STRING(30),
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