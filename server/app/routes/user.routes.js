import Express from "express";
import { create, findAll, findOne, update, deleteUser, deleteAllUsers } from "../controllers/user.controller.js";
import verifyToken from "../middleware/auth-jwt.js";

const userRoutes = (app) => {
	var router = Express.Router();

	router.post("/", create);

	router.get("/", [verifyToken], findAll);

	router.get("/:id", [verifyToken], findOne);

	router.put("/:id", [verifyToken], update);

	router.delete("/:id", [verifyToken], deleteUser);

	router.delete("/", [verifyToken], deleteAllUsers);

	app.use('/api/users', router);
};

export default userRoutes;