import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import LoginPage from './pages/LoginPage';

export default class App extends React.Component {
  render() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Container>
							<h1>Home</h1>
						</Container>
					</Route>
					<Route exact path="/login">
						<LoginPage/>
					</Route>
					<Route path="*">
						<Container>
							<h1>404</h1>
							Page Not Found!
						</Container>
					</Route>
				</Switch>
			</Router>
		</div>
	);
  }
}
