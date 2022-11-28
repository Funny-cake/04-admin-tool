import express from "express";
import cors from "cors";
import db from "./app/models/db.js";
import userRoutes from "./app/routes/user.routes.js";

const app = express();
// app.use(...);

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

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});