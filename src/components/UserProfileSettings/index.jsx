import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Container from '../Container';
import Button from '../Button';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

export default class UserProfileSettings extends React.Component {
	static contextType = FirebaseContext;
	state = {
		user: {
			username: "",
			name: ""
		}
	}

	save = e => {
		e.preventDefault()
		const { firestore } = this.context
		firestore.collection("users").doc(this.props.uid).update(
			this.state.user
		)
	}

	componentDidMount = () => {
		const { firestore } = this.context
		firestore.collection("users").doc(this.props.uid).get().then(
			doc => {
				const d = doc.data()
				this.setState(
					{
						user:
						{
							username: d.username,
							name: d.name
						}
					}
				)
			}
		)
	}

	render() {
		return (
			<div className="UserProfileSettings">
				<h2>Settings</h2>
				<Container>
					<form onSubmit={this.save}>
						<Input icon={<FontAwesomeIcon icon={faUser} />} label="Name" value={this.state.user.name} onChange={
							e => this.setState(
								{
									user: {
										name: e.target.value
									}
								}
							)} />

						<Input icon={<FontAwesomeIcon icon={faUser} />} label="Username" value={this.state.user.username} onChange={
							e => this.setState(
								{
									user: {
										username: e.target.value
									}
								}
							)
						} />
						<Input label="Save" type="submit" />
					</form>
					<Button to="/logout" icon={<FontAwesomeIcon icon={faSignOutAlt} />}>Logout</Button>
				</Container>
			</div>
		)
	}
}