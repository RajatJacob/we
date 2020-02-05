<<<<<<< HEAD
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import Feedback from './components/Feedback';
import Resume from './components/Resume';

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
					<Route exact path="/Resume">
						<Resume />
					</Route>
					<Route exact path="/Feedback">
						<Feedback />
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
=======
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
>>>>>>> 216a57e1220ff71813866189ab510d26d56af8c2
}