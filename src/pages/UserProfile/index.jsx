import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Card from '../../components/Card';
import Alert from '../../components/Alert';

export default class UserProfile extends React.Component {
	static contextType = FirebaseContext;
	state = {
		user: {
			username: undefined
		}
	}

	render() {
		const { firestore } = this.context
		firestore.collection("users").where("username", "==", this.props.match.params.username.toLowerCase())
			.get()
			.then(
				snapshot => {
					if (snapshot.size === 0) this.setState({
						alert: "noUser"
					})
					snapshot.forEach(doc => {
						this.setState({ user: doc.data() })
					})
				}
			);

		return (
			<div className="UserProfile">
				<Card>
					<h1>
						{
							this.state.alert === "noUser" ?
								<Alert type="danger" title="Invalid user!" /> :
								this.state.user.name
						}
					</h1>
					<div className="grid-container" id="topbar">
						<div>
							<h3>Posts</h3>
							0
						</div>
						<div>
							<h3>Followers</h3>
							0
						</div>
						<div>
							<h3>Following</h3>
							0
						</div>
					</div>
				</Card>
			</div>
		)
	}
}