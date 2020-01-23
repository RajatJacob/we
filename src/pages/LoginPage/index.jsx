import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import GridContainer from '../../components/GridContainer';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Alert from '../../components/Alert';

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
		this.setState({
			alert: {
				type: "success",
				message: "Logging in..."
			}
		})
		auth.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => { this.setState({ error: null }) })
			.catch((error) => { this.setState({ error: error }) })
			.finally(() => {
				this.setState({ email: "", password: "" })
			})
	}

	render() {
		const { user } = this.context;
		if (user) return (
			<h1>Welcome, {user.email}</h1>
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
								<Input label="E-mail" icon="@" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
								<Input label="Password" type="password"
									icon="*" onChange={e => this.setState({ password: e.target.value })} />
								<Input label="Login" type="submit" />
							</form>
							{
								this.state.alert ?
									<Alert type={this.state.alert.type} title={this.state.alert.title}>
										{this.state.alert.message}
									</Alert> :
									null
							}
						</Container>
					</GridContainer>
				</Card>
			</div >
		)
	}
}