import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: ""
		}
	}

	submit = e => {
		e.preventDefault()
		alert("Welcome, " + this.state.email)
		e.target.reset()
		this.setState({ email: "", password: "" })
	}

	render() {
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