import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './contexts/FirebaseContext';
import Alert from './components/Alert';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import Card from './components/Card';
import SignUp from './pages/SignUp';

export default class Routes extends React.Component {
	static contextType = FirebaseContext
	render() {
		const { user, auth } = this.context
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/">
						<Card>
							<h1>Home</h1>
						</Card>
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