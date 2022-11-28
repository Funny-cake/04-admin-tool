import Express from "express";
import { create, findAll, findOne, update /*, delete, deleteAll */ } from "../controllers/user.controller.js";

const userRoutes = (app) => {
	var router = Express.Router();

	router.post("/", create);

	router.get("/", findAll);

	router.get("/:id", findOne);

	 router.put("/:id", update);

	// router.delete("/:id", delete);

	// router.delete("/", deleteAll);

	app.use('/api/users', router);
};

export default userRoutes;