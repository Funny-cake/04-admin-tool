import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UsersPage from './components/users-page/users-page.component';
import LoginPage from './components/login-page/login-page.component';
import RegistrationPage from './components/registration-page/registration-page.components';

import { Provider } from 'react-redux';
import store from './store';



ReactDOM.render(
	<Provider store={store}>
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
		</div>
	</Provider>, document.getElementById('app')
);