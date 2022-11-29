import React from 'react';
import styles from './login-page.component.scss';



export default function LoginPage() {
	const [ name, setName ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	return (
		<div className={styles.loginPage}>
			<div>Login Page</div>
			<div className={styles.container}>
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" />
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1" />
						<label class="form-check-label" for="exampleCheck1">Remember me</label>
					</div>
					<button type="submit" class="btn btn-primary">Sing in</button>
				</form>
			</div>
		</div>
	)
}