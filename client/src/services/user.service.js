import http from "../http-common";
import authHeader from "./auth-header";

const baseURL = "/users";

class UserDataService {
	getAll() {
		return http.get(baseURL, { headers: authHeader() });
	}

	get(id) {
		return http.get(`${baseURL}/${id}`, { headers: authHeader() });
	}

	create(data) {
		return http.post(baseURL, data);
	}

	update(id, data) {
		return http.put(`${baseURL}/${id}`, data, { headers: authHeader() });
	}

	delete(id) {
		return http.delete(`${baseURL}/${id}`, { headers: authHeader() });
	}

	deleteAll() {
		return http.delete(baseURL, { headers: authHeader() });
	}

	blockUser(id) {
		return http.post(`${baseURL}/${id}/block`, { headers: authHeader() });
	}

	unblockUser(id) {
		return http.post(`${baseURL}/${id}/unblock`, { headers: authHeader() });
	}

	blockAllUsers() {
		return http.post(`${baseURL}/block-all`, { headers: authHeader() });
	}

	unblockAllUsers() {
		return http.post(`${baseURL}/unblock-all`, { headers: authHeader() });
	}
}

export default new UserDataService();