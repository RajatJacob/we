import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './contexts/FirebaseContext';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Card from './components/Card';
import Button from './components/Button';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import ForgotPassword from './pages/ForgotPassword';

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
								<Card>
									Welcome, {user.email || user.displayName}!
									<Button onClick={() => { auth.signOut() }}>Sign Out</Button>
								</Card>
						}
					</Route>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/user/:username" component={UserProfile} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/forgotpassword" component={ForgotPassword} />
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