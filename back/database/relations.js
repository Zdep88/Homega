import sequelize from "./connect.js";
import User from "../models/users.js";
import Request from "../models/request.js";

User.belongsToMany(Request, { through: 'userRequest', foreignKey: 'userId', otherKey: 'requestId' });
Request.belongsToMany(User, { through: 'userRequest', foreignKey: 'requestId', otherKey: 'userId' });

export { sequelize, User, Request };