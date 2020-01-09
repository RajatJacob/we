import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

function App() {
	return (
		<Router>
		<div className="App">
			<NavigationBar />
			<div className="Content">
				<Switch>
					<Route exact path="/">
						Home
						<Card>
							<h1>Card</h1>
						</Card>
					</Route>
					<Route exact path="/who-we-are">
						Who We Are
					</Route>
					<Route exact path="/opportunities">
						Opportunities
				  	</Route>
					<Route exact path="/join-us">
						Join Us
				  	</Route>
					<Route exact path="/support">
						Support
				  	</Route>
					<Route exact path="/community">
						Community
				  	</Route>
				</Switch>
				
				<Footer />
			</div>
		</div>
		</Router>
	);
}

export default App;
