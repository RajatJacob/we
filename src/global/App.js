import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modalActive: true
		}
	}

	toggleModal = () => {
		this.setState({modalActive: !this.state.modalActive})
	}

	render() {
		return (
			<Router>
			<div className="App">
				<NavigationBar />
				<Modal active={this.state.modalActive} toggle={this.toggleModal}>
					This is a Modal
				</Modal>
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
}
