import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './contexts/FirebaseContext';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Card from './components/Card';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import ForgotPassword from './pages/ForgotPassword';
import VocationalCourses from './pages/VocationalCourses';
import Home from './pages/Home';

export default class Routes extends React.Component {
	static contextType = FirebaseContext
	render() {
		const { auth } = this.context
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/user">
						{
							auth.currentUser ?
								<Redirect to={"/user/" + auth.currentUser.displayName} /> :
								<Redirect to="/login" />

						}
					</Route>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route path="/user/:username" component={UserProfile} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/forgotpassword" component={ForgotPassword} />
					<Route exact path="/courses" component={VocationalCourses} />
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