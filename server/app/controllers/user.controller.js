import db from "../models/db.js";

export function create(req, res) {
	if (!req.body.name || !req.body.email) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	const user = {
		name: req.body.name,
		email: req.body.email,
		registered_date: new Date()
	};

	db.users.create(user)
		.then((data) => {
			res.send(data);
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
			res.send(data);
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
				res.send(data);
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

// export function update (req, res) {

// };

// export function delete (req, res) {

// };

// export function deleteAll (req, res) {

// };