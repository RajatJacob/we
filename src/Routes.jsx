import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import Card from './components/Card';
import SignUp from './pages/SignUp';

export default class Routes extends React.Component {
	render() {
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/">
						<Card>
							<h1>Home</h1>
						</Card>
					</Route>
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/user/:username" component={UserProfile} />
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route path="*">
						<Card>
							<h1>404</h1>
							Page Not Found!
						</Card>
					</Route>
				</Switch>
			</div>
		);
	}
}