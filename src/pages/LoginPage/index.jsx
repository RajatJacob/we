import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { FirebaseContext } from '../../contexts/FirebaseContext';

export default class LoginPage extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: ""
		}
	}

	submit = e => {
		const { auth } = this.context;
		e.preventDefault()
		auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(() => { console.log("Error") })
		e.target.reset()
		this.setState({ email: "", password: "" })
	}

	render() {
		const { user } = this.context;
		if (user) return (
			<h1>Welcome, {user.email}</h1>
		)
		return (
			<div className="LoginPage">
				<Card noContainer>
					<div className="grid-container">
						<Container>
							<h1>Login</h1>
						</Container>
						<Container>
							<form onSubmit={this.submit}>
								<Input label="E-mail" icon="@" onChange={e => this.setState({ email: e.target.value })} />
								<Input label="Password" type="password"
									icon="*" onChange={e => this.setState({ password: e.target.value })} />
								<Input label="Login" type="submit" />
							</form>
						</Container>
					</div>
				</Card>
			</div>
		)
	}
}