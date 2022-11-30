import http from "../http-common";

const baseURL = "/auth";

const key = "user";

class AuthService {
	login(email, password, remember) {
		return http
			.post(`${baseURL}/login`, { email, password, remember })
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem(key, JSON.stringify(response.data));
				}
				return response.data;
			});
	}

	logout() {
		localStorage.removeItem(key);
	}

	currentUser() {
		return JSON.parse(localStorage.getItem(key));
	}
}

export default new AuthService();