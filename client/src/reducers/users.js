import {
	CREATE_USER,
	RETRIEVE_USERS,
	UPDATE_USER,
	UPDATE_ALL_USERS,
	DELETE_USER,
	DELETE_ALL_USERS,
} from "../actions/types";

const initialState = [];

function userReducer(users = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case CREATE_USER:
			return [...users, payload];

		case RETRIEVE_USERS:
			return payload;

		case UPDATE_USER:
			return users.map((user) => {
				if (user.id === payload.id) {
					return {
						...user,
						...payload,
					};
				} else {
					return user;
				}
			});

		case UPDATE_ALL_USERS:
			return users.map((user) => {
				return {
					...user,
					...payload,
				};
			});

		case DELETE_USER:
			return users.map((user) => {
				if (user.id === payload.id) {
					return {
						...user,
						...payload,
					};
				} else {
					return user;
				}
			});

		case DELETE_ALL_USERS:
			return users.map((user) => {
				return {
					...user,
					...payload,
				};
			});

		default:
			return users;
	}
};

export default userReducer;