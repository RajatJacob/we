import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FirebaseContext } from './contexts/FirebaseContext';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Feed from './components/Feed';
import Card from './components/Card';
import Edit from './components/Edit';
import Resume from './components/Resume';
import Feedback from './components/Feedback';
import RVJoin from './components/RVJoin';
import View from './components/View';
import Container from './components/Container';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import ForgotPassword from './pages/ForgotPassword';
import VocationalCourses from './pages/VocationalCourses';
import Donation from './pages/Donation';
import Payment from './pages/Payment';
import Home from './pages/Home';
import Search from './pages/Search';
import CreatePost from './components/CreatePost';

export default class Routes extends React.Component {
	static contextType = FirebaseContext
	render() {
		return (
			<div className="Content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/signup" component={SignUp} />
					<Route path="/login" component={Login} />
					<Route path="/feed">
						<Container>
							<h1>Feed</h1>
							<Feed query="feed" />
						</Container>
					</Route>
					<Route path="/create" component={CreatePost} />
					<Route path="/user/:username" component={UserProfile} />
					<Route path="/logout" component={Logout} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route exact path="/courses" component={VocationalCourses} />
					<Route exact path="/resume/Edit" component={Edit} />
					<Route exact path="/resume" component={Resume} />
					<Route path="/RVJoin" component={RVJoin} />
					<Route exact path="/resume/View" component={View} />
					<Route path="/Feedback" component={Feedback} />
					<Route exact path="/donation" component={Donation} />
					<Route exact path="/payment" component={Payment} />
					<Route exact path="/search" component={Search} />
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