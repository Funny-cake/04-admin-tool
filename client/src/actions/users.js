import {
	CREATE_USER,
	RETRIEVE_USERS,
	UPDATE_USER,
	UPDATE_ALL_USERS,
	DELETE_USER,
	DELETE_ALL_USERS
} from "./types";

import UserDataService from "../services/user.service";

export const createUser = (name, email, password) => async (dispatch) => {
	try {
		const res = await UserDataService.create({ name, email, password });

		dispatch({
			type: CREATE_USER,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const retrieveUsers = () => async (dispatch) => {
	try {
		const res = await UserDataService.getAll();

		dispatch({
			type: RETRIEVE_USERS,
			payload: res.data,
		});

	} catch (err) {
		console.log(err);
	}
};

export const updateUser = (id, data) => async (dispatch) => {
	try {
		const res = await UserDataService.update(id, data);

		dispatch({
			type: UPDATE_USER,
			payload: data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const blockUser = (id) => async (dispatch) => {
	try {
		const res = await UserDataService.blockUser(id);

		console.log(res);

		dispatch({
			type: UPDATE_USER,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const blockAllUsers = () => async (dispatch) => {
	try {
		const res = await UserDataService.blockAllUsers();

		dispatch({
			type: UPDATE_ALL_USERS,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const unblockUser = (id) => async (dispatch) => {
	try {
		const res = await UserDataService.unblockUser(id);

		dispatch({
			type: UPDATE_USER,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const unblockAllUsers = () => async (dispatch) => {
	try {
		const res = await UserDataService.unblockAllUsers();

		dispatch({
			type: UPDATE_ALL_USERS ,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const deleteUser = (id) => async (dispatch) => {
	try {
		await UserDataService.delete(id);

		dispatch({
			type: DELETE_USER,
			payload: { id },
		});
	} catch (err) {
		console.log(err);
	}
};

export const deleteAllUsers = () => async (dispatch) => {
	try {
		const res = await UserDataService.deleteAll();

		dispatch({
			type: DELETE_ALL_USERS,
			payload: [],
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};