import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connect.js';

class UserRequest extends Model { }

UserRequest.init(
    {
        UserId: {
            type: DataTypes.INTEGER,
        },
        RequestId: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        modelName: 'userRequest',
        tableName: 'user_request',
        timestamps: false,
    },
);

export default UserRequest;