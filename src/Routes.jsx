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
/*import Computer from './pages/VocationalCourses/BasicComputer';
import Sanitation from './pages/VocationalCourses/Sanitation';
import Bakery from './pages/VocationalCourses/Bakery';
import Elderly from './pages/VocationalCourses/Elderly';
import Haircare from './pages/VocationalCourses/Haircare';
import Childhood from './pages/VocationalCourses/Childhood';
import Ayurveda from './pages/VocationalCourses/Ayurveda';
import English from './pages/VocationalCourses/English';
import Design from './pages/VocationalCourses/Design';*/
import Courses from './components/Courses';
 
export default class Routes extends React.Component {
	static contextType = FirebaseContext
	render() {
		const { auth } = this.context
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
					<Route exact path="/Courses" component={VocationalCourses} />
					{/*<Route exact path="/Courses/Computer" component={Computer} />
					<Route exact path="/Courses/Sanitation" component={Sanitation} />
					<Route exact path="/Courses/Bakery" 
					component={Bakery} />
					<Route exact path="/Courses/Elderly" 
					component={Elderly} />
					<Route exact path="/Courses/Haircare" 
					component={Haircare} />
					<Route exact path="/Courses/Childhood" 
					component={Childhood} />
					<Route exact path="/Courses/Design" 
					component={Design} />
					<Route exact path="/Courses/Ayurveda" 
					component={Ayurveda} />
					<Route exact path="/Courses/English" 
					component={English} />*/}
					<Route path="/Courses/:coursename" 
					component={Courses} />
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