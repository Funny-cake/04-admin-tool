import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UsersPage from './components/UsersPage/UsersPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';


ReactDOM.render(
	<div>
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<UsersPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/registration">
					<RegistrationPage />
				</Route>
			</Switch>
		</BrowserRouter>
	</div>, document.getElementById('app')
);