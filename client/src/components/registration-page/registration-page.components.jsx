import React, { useState } from 'react';
import styles from './registration-page.component.scss';
import { connect } from "react-redux";
import { createUser } from "../../actions/users";
import { useHistory } from "react-router-dom";

function RegistrationPage(props) {
	const [ name, setName ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const history = useHistory();

	function onSubmit(e) {
		e.preventDefault();

		if(name && email && password) {
			props
				.createUser(name, email, password)
				.then((data) => {
					history.push("/login");
				});
		} else {
			console.error("Please provide full data.")
		}
	} 

	return (
		<div className={styles.registrationPage}>
				<div>Registration Page</div>

				<div className={styles.container}>
				<form>
					<div class="mb-3">
						<label for="exampleInputName1" class="form-label">Name</label>
						<input 
							type="text" 
							class="form-control" 
							id="exampleInputName1" 
							value={name} 
							onChange={e => setName(e.target.value)} />
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input 
							type="email" 
							class="form-control" 
							id="exampleInputEmail1" 
							aria-describedby="emailHelp" 
							value={email} 
							onChange={e => setEmail(e.target.value)} />
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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
					<button type="submit" class="btn btn-primary" onClick={(e) => onSubmit(e)}>Registration</button>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, { createUser })(RegistrationPage);