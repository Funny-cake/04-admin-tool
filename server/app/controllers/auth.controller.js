import db from "../models/db.js";
import { getSlatedHash } from "../helpers/hash.helper.js";
import authConfig from "../config/auth.config.js";
import jwt from "jsonwebtoken";
import { mapUser } from "../helpers/user.helper.js";

export function login(req, res) {
	const email = req.body.email;
	const password = req.body.password;
	//const remember = req.body.remember;

	if (email && password) {
		db.users.findOne({
			where: {
				email: email,
				blockedAt: null,
				deletedAt: null
			}
		})
			.then(user => {
				if (user) {
					var salt = user.salt;
					var expected = user.hash;
					var actual = getSlatedHash(password, salt);

					if (expected == actual) {
						console.log("1:",  user.id, authConfig.secret, token);

						var token = jwt.sign({ id: user.id }, authConfig.secret, {
							expiresIn: 86400 // 24 hours
						});

						console.log("2:",  user.id, authConfig.secret, token);

						res.status(200).send({
							...mapUser(user),
							...{ accessToken: token }
						});
					} else {
						res.status(400).send({
							message: `Please check credentials.`
						});
					}
				} else {
					res.status(404).send({
						message: `Cannot find User with email=${email}.`
					});
				}
			})
			.catch((err) => {
				console.error(err);

				res.status(500).send({
					message: `Error retrieving User with email=${email}.`
				});
			});
	} else {
		res.status(400).send({
			message: `Response shouldn't be empty.`
		});
	}
};

export function logout(req, res) {
	db.users.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Users."
			});
		});
};