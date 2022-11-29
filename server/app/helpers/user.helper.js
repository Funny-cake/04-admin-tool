export function mapUser(user) {
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		registeredAt: user.registeredAt,
		lastLoginAt: user.lastLoginAt,
		updatedAt: user.updatedAt,
		blockedAt: user.blockedAt,
		deletedAt: user.deletedAt
	}
}