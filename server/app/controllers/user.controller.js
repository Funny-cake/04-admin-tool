const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
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

	User.create(user)
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

exports.findAll = (req, res) => {
	User.findAll()
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

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};