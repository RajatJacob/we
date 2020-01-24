import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';

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
					<Route exact path="/signup">
						<SignUp />
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