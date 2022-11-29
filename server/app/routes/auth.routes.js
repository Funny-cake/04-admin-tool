import Express from "express";
import { login, logout } from "../controllers/auth.controller.js";

const authRoutes = (app) => {
	var router = Express.Router();

	router.post("/login", login);

	router.post("/logout", logout);

	app.use('/api/auth', router);
};

export default authRoutes;