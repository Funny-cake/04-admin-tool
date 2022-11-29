import express from "express";
import cors from "cors";
import db from "./app/models/db.js";
import userRoutes from "./app/routes/user.routes.js";
import authRoutes from "./app/routes/auth.routes.js";

const app = express();

db.sequelize.sync();

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ message: "Welcome to daria`s application" });
});

const PORT = process.env.PORT || 8080;

userRoutes(app);
authRoutes(app);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});