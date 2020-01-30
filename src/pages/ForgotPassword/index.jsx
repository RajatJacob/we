import React from 'react';
import Card from '../../components/Card';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Alert from '../../components/Alert';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class ForgotPassword extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			alert: null
		}
	}
	submit = e => {
		const { auth } = this.context;
		this.setState({
			alert: {
				type: "info",
				message: "Sending..."
			}
		})
		e.preventDefault()
		auth.sendPasswordResetEmail(this.state.email).then(() => {
			this.setState({
				alert: {
					type: "success",
					message: "Email sent."
				}
			})

		}).catch((error) => {
			this.setState({
				alert: {
					type: "danger",
					message: error.message
				}
			})
		});
	}
	render() {

		return (
			<Card>
				<h3>Reset Password</h3>
				We will send an email with a link to reset your password.
				<form onSubmit={this.submit}>
					<Input label="E-mail" icon={<FontAwesomeIcon icon={faUser} />} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
					<Input label="Send" type="submit" />
				</form>
				{
					this.state.alert ?
						<Alert type={this.state.alert.type} title={this.state.alert.title}>
							{this.state.alert.message}
						</Alert> :
						null
				}
			</Card>
		)
	}
}