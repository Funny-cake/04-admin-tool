const setupUser = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(255)
		},
		email: {
			type: Sequelize.STRING(255)
		},
		hash: {
			type: Sequelize.STRING(64)
		},
		salt: {
			type: Sequelize.STRING(64)
		},
		lastLoginAt: {
			type: Sequelize.DATE
		},
		blockedAt: {
			type: Sequelize.DATE
		},
		deletedAt: {
			type: Sequelize.DATE
		},
		createdAt: {
			type: Sequelize.DATE
		},
		updatedAt: {
			type: Sequelize.DATE
		}
	});

	return User;
};

export default setupUser;