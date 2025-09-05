import { Router } from "express";
import indexController from "./controllers/index.js";
import userController from "./controllers/user.js";
import requestController from "./controllers/request.js";

const router = Router();

router.get('/', indexController.index);
router.get('/error', indexController.error);

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router.get('/requests', requestController.getIndex);

export default router;