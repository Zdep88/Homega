import sequelize from "./connect.js";
import User from "../models/users.js";
import Request from "../models/request.js";
import Verb from "../models/verbs.js";
import UserRequest from "../models/userRequest.js";

User.belongsToMany(Request, { through: { model: UserRequest } });
Request.belongsToMany(User, { through: { model: UserRequest } });

Request.belongsTo(Verb, { foreignKey: 'verbId' });
Verb.hasMany(Request, { foreignKey: 'verbId' });

export { sequelize, User, UserRequest, Request, Verb };