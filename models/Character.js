const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'class',
                key: 'id',
            }
        },
        stats_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'stats',
                key: 'id',
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'comment',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;