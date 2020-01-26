import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import GridContainer from '../../components/GridContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Alert from '../../components/Alert';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: "",
			alert: null
		}
	}

	login = p => {
		p.then(() => {
			this.setState({
				email: "",
				password: "",
				alert: null
			})
		})
			.catch((error) => {
				this.setState({
					password: "",
					alert: {
						type: "danger",
						title: error.code,
						message: error.message
					}
				})
			})
	}

	submit = e => {
		const { auth } = this.context;
		e.preventDefault()
		this.setState({
			alert: {
				type: "success",
				message: "Logging in..."
			}
		})
		this.login(auth.signInWithEmailAndPassword(this.state.email, this.state.password))
	}

	logInWithGoogle = e => {
		const { firebase, auth } = this.context;
		e.preventDefault()
		const provider = new firebase.auth.GoogleAuthProvider()
		this.login(auth.signInWithPopup(provider))
	}

	render() {
		const { user } = this.context;
		if (user) return (
			<Redirect to="/user" />
		)
		return (
			<div className="LoginPage">
				<Card noContainer>
					<GridContainer>
						<Container>
							<h1>Login</h1>
						</Container>
						<Container>
							<form onSubmit={this.submit}>
								<Input label="E-mail" icon={<FontAwesomeIcon icon={faUser} />} onChange={e => this.setState({ email: e.target.value })} />
								<Input label="Password" type="password"
									icon={<FontAwesomeIcon icon={faLock} />} onChange={e => this.setState({ password: e.target.value })} />
								{
									this.state.alert ?
										<Alert type={this.state.alert.type} title={this.state.alert.title}>
											{this.state.alert.message}
										</Alert> :
										null
								}
								<Input label="Login" type="submit" />
							</form>
							<form onSubmit={this.logInWithGoogle}>
								<Input label="Login with Google" type="submit" style={
									{
										background: "#eeeeee"
									}
								} />
							</form>
						</Container>
					</GridContainer>
				</Card>
			</div >
		)
	}
}