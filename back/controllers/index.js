import errorHandler from "../errorHandler.js";

const indexController = {
    
    index(req, res) {
        res.json({ message: 'Hello World!' });
    },

    error(req, res) {
        errorHandler.throwError(418);
    }
};

export default indexController;