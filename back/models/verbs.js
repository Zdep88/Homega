import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connect.js';

class Verb extends Model { }

Verb.init(
    {
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        modelName: 'Verb',
        tableName: 'verb',
        timestamps: false,
    },
);

export default Verb;