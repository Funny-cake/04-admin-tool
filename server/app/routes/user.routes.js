import Express from "express";
import { create, findAll, findOne, update, deleteUser, deleteAllUsers } from "../controllers/user.controller.js";

const userRoutes = (app) => {
	var router = Express.Router();

	router.post("/", create);

	router.get("/", findAll);

	router.get("/:id", findOne);

	router.put("/:id", update);

	router.delete("/:id", deleteUser);

	router.delete("/", deleteAllUsers);

	app.use('/api/users', router);
};

export default userRoutes;