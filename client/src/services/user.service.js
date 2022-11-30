import apiClient from "../http-common";
import authHeader from "./auth-header";

const baseURL = "/users";

class UserDataService {
	getAll() {
		return apiClient.get(baseURL, { headers: authHeader() });
	}

	get(id) {
		return apiClient.get(`${baseURL}/${id}`, { headers: authHeader() });
	}

	create(data) {
		return apiClient.post(baseURL, data);
	}

	update(id, data) {
		return apiClient.put(`${baseURL}/${id}`, data, { headers: authHeader() });
	}

	delete(id) {
		return apiClient.delete(`${baseURL}/${id}`, { headers: authHeader() });
	}

	deleteAll() {
		return apiClient.delete(baseURL, { headers: authHeader() });
	}

	blockUser(id) {
		return apiClient.post(`${baseURL}/${id}/block`, { headers: authHeader() });
	}

	unblockUser(id) {
		return apiClient.post(`${baseURL}/${id}/unblock`, { headers: authHeader() });
	}

	blockAllUsers() {
		return apiClient.post(`${baseURL}/block-all`, { headers: authHeader() });
	}

	unblockAllUsers() {
		return apiClient.post(`${baseURL}/unblock-all`, { headers: authHeader() });
	}
}

export default new UserDataService();