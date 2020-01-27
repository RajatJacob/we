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

	getPosts = () => {
		const { firestore } = this.context
		var posts = []
		firestore.collection("users/" + this.state.userDocID + "/posts")
			.get()
			.then(
				snapshot => {
					snapshot.forEach(
						doc => {
							posts.push(doc.data())
						}
					)
					this.setState({ posts: posts })
				}
			)
	}

	getFollowers = () => {
		const { firestore } = this.context
		var followers = []
		firestore.collection("users").where("following", "array-contains", firestore.collection("users").doc(this.state.userDocID))
			.get()
			.then(
				snapshot => {
					snapshot.forEach(
						doc => {
							followers.push(doc.id)
						}
					)
					this.setState({ followers: followers })
				}
			)
	}

	componentDidMount() {
		const { firestore } = this.context
		const userRef = firestore.collection("users").where("username", "==", this.props.match.params.username.toLowerCase())
		userRef
			.get()
			.then(
				snapshot => {
					if (snapshot.size === 0) this.setState({
						alert: "noUser"
					})
					snapshot.forEach(doc => {
						this.setState(
							{
								user: doc.data(),
								userDocID: doc.id
							}
						)
						this.getPosts()
						this.getFollowers()
					})
				}
			);
	}

	render() {
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
							{this.state.posts ? this.state.posts.length : 0}
						</div>
						<div>
							<h3>Followers</h3>
							{this.state.followers ? this.state.followers.length : 0}
						</div>
						<div>
							<h3>Following</h3>
							{this.state.user ? this.state.user.following ? this.state.user.following.length : 0 : 0}
						</div>
					</div>
				</Card>
			</div>
		)
	}
}