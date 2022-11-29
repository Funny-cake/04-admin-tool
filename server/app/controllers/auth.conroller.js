import db from "../models/db.js";
import { getSlatedHash } from "../helpers/hash.helper.js";

export function login(req, res) {
	const email = req.params.email;
	const password = req.params.password;

	if (email && password) {
		db.users.findOne({
			email: email,
			blockedAt: null,
			deletedAt: null
		})
			.then(user => {
				if (user) {
					var salt = data.salt;
					var expected = data.hash;
					var actual = getSlatedHash(password, salt);
					if(expected == actual) {
						req.session.loggedin = true;
						req.session.username = username;
						res.send("Ok!");
					} else {
						res.status(503).send({
							message: `Please check credentials.`
						});
					}
				} else {
					res.status(404).send({
						message: `Cannot find User with email=${email}.`
					});
				}
			})
			.catch(err => {
				res.status(500).send({
					message: `Error retrieving User with email=${email}.`
				});
			});
	}
	res.status(404).send({
		message: `Cannot find User with email=${email}.`
	});
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