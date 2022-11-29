import React, { useState } from 'react';
import styles from './login-page.component.scss';
import AuthService from "../../services/auth.service";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remeber, setRemember] = useState(false);
	const history = useHistory();
	
	function onSubmit(e) {
		e.preventDefault();

		if (email && password) {
			AuthService.login(email, password, remeber)
				.then((data) => {
					if(data) {
						history.push("/");
					} else {
						console.error("Something went wrong!");
					}
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			console.error("Please provide full data.")
		}
	}

	return (
		<div className={styles.loginPage}>
			<div>Login Page</div>
			<div className={styles.container}>
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							value={email}
							onChange={e => setEmail(e.target.value)} />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							value={password}
							onChange={e => setPassword(e.target.value)} />
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1" />
						<label
							class="form-check-label"
							for="exampleCheck1"
							value={remeber}
							onChange={e => setRemember(e.target.value)}>Remember me</label>
					</div>
					<button type="submit" class="btn btn-primary" onClick={(e) => onSubmit(e)}>Sing in</button>
				</form>
			</div>
		</div>
	)
}