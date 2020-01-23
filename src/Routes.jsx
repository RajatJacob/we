import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './contexts/FirebaseContext';
import Container from './components/Container';
import Alert from './components/Alert';
import LoginPage from './pages/LoginPage';

export default class Routes extends React.Component {
	static contextType = FirebaseContext
	render() {
		const { user, auth } = this.context
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/">
						<Container>
							<h1>Home</h1>
						</Container>
					</Route>
					<Route exact path="/user">
						{
							!user ?
								<Redirect to="/login" /> :
								<Alert type="success" title="Login successful!">
									Welcome, {user.email || user.displayName}!
									<div>
										<button onClick={() => { auth.signOut() }}>Sign Out</button>
									</div>
								</Alert>
						}
					</Route>
					<Route exact path="/login">
						<LoginPage />
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