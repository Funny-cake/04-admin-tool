import Express from "express";
import { create, findAll, findOne, update, deleteUser, deleteAllUsers, blockUser, unblockUser, blockAllUsers, unblockAllUsers } from "../controllers/user.controller.js";
import verifyToken from "../middleware/auth-jwt.js";

const userRoutes = (app) => {
	var router = Express.Router();

	router.post("/", create);
	router.get("/", [verifyToken], findAll);
	router.get("/:id", [verifyToken], findOne);
	router.put("/:id", [verifyToken], update);
	router.delete("/:id", [verifyToken], deleteUser);
	router.delete("/", [verifyToken], deleteAllUsers);
	router.post("/block-all", blockAllUsers);
	router.post("/unblock-all", unblockAllUsers);
	router.post("/:id/block", blockUser);
	router.post("/:id/unblock", unblockUser);

	app.use('/api/users', router);
};

export default userRoutes;