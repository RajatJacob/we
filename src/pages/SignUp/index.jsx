import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import GridContainer from '../../components/GridContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faGhost, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Alert from '../../components/Alert';
import { Link, Redirect } from 'react-router-dom';

export default class SignUp extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			username: "",
			email: "",
			password: "",
			confirmPassword: ""
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
		const { auth, getUserRefByUsername } = this.context;
		e.preventDefault()
		this.setState({
			alert: {
				type: "success",
				message: "Signing in..."
			}
		})
		auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				this.setState({ alert: null })
				getUserRefByUsername(this.state.username).get().then(
					snapshot => {
						if (snapshot.size !== 0) {
							this.setState({
								alert: {
									type: "danger",
									title: "User exists",
									message: "Please use a different username"
								},
								username: ""
							})
						}
					}
				)
			})
			.catch((error) => {
				this.setState({
					alert: {
						type: "danger",
						title: error.code,
						message: error.message
					}
				})
			})
			.finally(() => {
				this.setState({
					password: "",
					confirmPassword: ""
				})
			})
	}

	render() {
		const { user } = this.context;
		if (user) return (
			<Redirect to="/login" />
		)
		return (
			<div className="SignUp">
				<Card noContainer>
					<GridContainer>
						<Container>
							<h1>Sign Up</h1>
						</Container>
						<Container>
							<form onSubmit={this.submit}>
								<Input label="Name" icon={<FontAwesomeIcon icon={faUser} onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />} />
								<Input label="Username" icon={<FontAwesomeIcon icon={faGhost} />} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
								<Input label="E-mail" icon={<FontAwesomeIcon icon={faEnvelope} />} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
								<Input label="Password" type="password"
									icon={<FontAwesomeIcon icon={faLock} />} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
								<Input label="Confirm Password" type="password"
									icon={<FontAwesomeIcon icon={faLock} />} onChange={e => this.setState({ confirmPassword: e.target.value })} value={this.state.confirmPassword} />
								{
									this.state.alert ?
										<Alert type={this.state.alert.type} title={this.state.alert.title}>
											{this.state.alert.message}
										</Alert> :
										null
								}
								<Input label="SignUp" type="submit" />
							</form>
							<Button onClick={this.loginWithGoogle} icon={<FontAwesomeIcon icon={faGoogle} />}>
								Sign Up with Google
							</Button>
							<Link to="/login">Already have an account? Login</Link>
						</Container>
					</GridContainer>
				</Card>
			</div >
		)
	}
}