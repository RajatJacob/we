import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';

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
				<Header/>
				<NavigationBar />
				<div className="Content">
					<Switch>
						<Route exact path="/">
							Home
						</Route>
						<Route exact path="/who-we-are">
							Who We Are
							<Modal active={this.state.modalActive} toggle={this.toggleModal}>
								<div className="container">
									This is a modal.
								</div>
							</Modal>
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
						<Route exact path="/code-of-conduct">
							Code Of Conduct
						</Route>
						<Route exact path="/privacy-policy">
							Privacy Policy
						</Route>
						<Route exact path="/feedback">
							Feedback
						</Route>
						<Route exact path="/contact">
							Contact
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
			</Router>
		);
	}
}
