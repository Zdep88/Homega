import errorHandler from "../errorHandler.js";
import { User, Request, Verb } from '../database/relations.js';

const requestController = {

    async getIndex(req, res) {
        const answer = await Request.findAll({
            include: [
                {
                    model: Verb,
                },
                {
                    model: User,
                }]
        });
        return res.status(200).json(answer);
    },

}

export default requestController;