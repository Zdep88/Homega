import { sequelize } from '../database/relations.js';
import errorHandler from "../errorHandler.js";

const indexController = {

    async index(req, res) {
        let answer = {};
        answer.serverStatus = "ONLINE"
        try {
            await sequelize.authenticate();
            answer.databaseTest = 'SUCCESS';
            res.json({
                "message": "Welcome to Homega !",
                "serverStatus": "OK",
                "databaseStatus" : "OK"
            });
        } catch (error) {
            res.status(500).json({
                "message": "Welcome to Homega !",
                "Server Status": "OK",
                "Database Status": "KO"
            });
        }
    },

    error(req, res) {
        errorHandler.throwError(418);
    }
};

export default indexController;