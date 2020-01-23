import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';

export default class Routes extends React.Component {
	render() {
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/">
						<Container>
							<h1>Home</h1>
						</Container>
					</Route>
					<Route exact path="/feed">
					</Route>
					<Route exact path="/search">
					</Route>
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/user">
						<UserProfile />
					</Route>
					<Route path="*">
						<Container>
							<h1>404</h1>
							Page Not Found!
							</Container>
					</Route>
				</Switch>
			</div>
		);
	}
}