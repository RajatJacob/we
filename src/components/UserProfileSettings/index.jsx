import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Container from '../Container';
import Button from '../Button';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faAt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Alert from '../Alert';

export default class UserProfileSettings extends React.Component {
	static contextType = FirebaseContext;
	state = {
		user: {
			username: "",
			name: ""
		},
		alert: null
	}

	save = e => {
		e.preventDefault()
		const { firestore, auth } = this.context
		auth.currentUser.updateProfile(
			{
				displayName: this.state.user.username
			}
		).then(
			() => firestore.collection("users").doc(this.props.uid).update(
				this.state.user
			)
		).then(
			() => {
				this.setState({
					alert: <Alert type="success">Updated!</Alert>
				})
			}
		).catch(
			err => {
				this.setState({
					alert: <Alert type="danger">{err.message}</Alert>
				})
			}
		)
	}

	componentDidMount = () => {
		const { firestore } = this.context
		firestore.collection("users").doc(this.props.uid).get().then(
			doc => {
				const d = doc.data()
				this.setState(
					{
						user: {
							username: d.username,
							name: d.name,
							bio: d.bio
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

						<Input icon={<FontAwesomeIcon icon={faAt} />} label="Username" value={this.state.user.username} onChange={
							e => this.setState(
								{
									user: {
										username: e.target.value
									}
								}
							)
						} />
						<Input icon={<FontAwesomeIcon icon={faAddressCard} />} label="Bio" value={this.state.user.bio} onChange={
							e => this.setState(
								{
									user: {
										bio: e.target.value
									}
								}
							)
						} />
						<Input label="Save" type="submit" onClick={this.save} />
					</form>
					<Button to="/logout" icon={<FontAwesomeIcon icon={faSignOutAlt} />}>Logout</Button>
				</Container>
			</div>
		)
	}
}