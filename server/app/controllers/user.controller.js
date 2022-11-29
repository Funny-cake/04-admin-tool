import db from "../models/db.js";
import { getHash, getSlatedHash } from "../helpers/hash.helper.js";
import { mapUser } from "../helpers/user.helper.js"; 

export function create(req, res) {
	if (!req.body.name || !req.body.email || !req.body.password) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	const date = new Date();
	const salt = getHash(date.getTime().toString());
	const password = req.body.password;
	const hash = getSlatedHash(password, salt);

	const user = {
		name: req.body.name,
		email: req.body.email,
		registeredAt: date,
		salt: salt,
		hash: hash,
		updatedAt: date
	};

	db.users.create(user)
		.then((data) => {
			res.send(mapUser(data));
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the User."
			});
		});
};

export function findAll(req, res) {
	db.users.findAll()
		.then(data => {
			res.send(data.map(mapUser));
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Users."
			});
		});
};


export function findOne(req, res) {
	const id = req.params.id;

	db.users.findByPk(id)
		.then(data => {
			if (data) {
				res.send(mapUser(data));
			} else {
				res.status(404).send({
					message: `Cannot find User with id=${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving User with id=" + id
			});
		});
};

export function update(req, res) {
	const id = req.params.id;

	db.users.update(req.body, {
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: "User was updated successfully."
				});
			} else {
				res.send({
					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error updating User with id=" + id
			});
		});
};

export function deleteUser (req, res) {

};

export function deleteAllUsers (req, res) {

};