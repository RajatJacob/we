<<<<<<< HEAD
import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';
import FirebaseContextProvider from './contexts/FirebaseContext';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<FirebaseContextProvider>
						<NavigationBar />
						<Routes />
					</FirebaseContextProvider>
				</Router>
			</div >
		);
	}
}
=======
import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';
import FirebaseContextProvider from './contexts/FirebaseContext';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<FirebaseContextProvider>
						<NavigationBar />
						<Routes />
					</FirebaseContextProvider>
					
				</Router>
			</div >
		);
	}
}
>>>>>>> 216a57e1220ff71813866189ab510d26d56af8c2
