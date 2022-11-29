import http from "../http-common";

const baseURL = "/auth";

class AuthService {
	login(email, password, remember) {
		return http
			.post(`${baseURL}/login`, { email, password, remember })
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				return response.data;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}
}

export default new AuthService();