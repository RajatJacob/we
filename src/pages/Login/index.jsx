import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import GridContainer from '../../components/GridContainer';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSync } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Alert from '../../components/Alert';
import { Redirect, Link } from 'react-router-dom';

export default class Login extends React.Component {
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

	loginWithGoogle = e => {
		const { auth, firebase } = this.context
		e.preventDefault()
		const provider = new firebase.auth.GoogleAuthProvider()
		this.login(auth.signInWithPopup(provider))
	}

	submit = e => {
		const { auth } = this.context;
		e.preventDefault()
		this.setState({
			alert: {
				type: "success",
				icon: <FontAwesomeIcon icon={faSync} spin />,
				message: "Logging in..."
			}
		})
		auth.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => { this.setState({ alert: null, email: "", password: "" }) })
			.catch((error) => {
				this.setState({
					alert: {
						type: "danger",
						title: error.code,
						message: error.message
					},
					password: ""
				})
			})
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
								<Input label="E-mail" icon={<FontAwesomeIcon icon={faUser} />} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
								<Input label="Password" type="password"
									icon={<FontAwesomeIcon icon={faLock} />} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
								{
									this.state.alert ?
										<Alert type={this.state.alert.type} title={this.state.alert.title} icon={this.state.alert.icon}>
											{this.state.alert.message}
										</Alert> :
										null
								}
								<Input label="Login" type="submit" />
							</form>
							<Button onClick={this.loginWithGoogle} icon={<FontAwesomeIcon icon={faGoogle} />}>
								Login with Google
							</Button>
							<Link to="/signup">Don't have an account yet? Sign up</Link>
						</Container>
					</GridContainer>
				</Card>
			</div >
		)
	}
}