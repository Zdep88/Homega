import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connect.js';

class Request extends Model { }

Request.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'Request',
        tableName: 'request',
        timestamps: false,
    },
);

export default Request;