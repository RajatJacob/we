import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FirebaseContext } from './contexts/FirebaseContext';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Card from './components/Card';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import ForgotPassword from './pages/ForgotPassword';
import VocationalCourses from './pages/VocationalCourses';
import Home from './pages/Home';
import Donation from './pages/Donation';

export default class Routes extends React.Component {
	static contextType = FirebaseContext
	render() {
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route path="/user/:username" component={UserProfile} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/forgotpassword" component={ForgotPassword} />
					<Route exact path="/courses" component={VocationalCourses} />
					<Route exact path="/donation" component={Donation} />
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