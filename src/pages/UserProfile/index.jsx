import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link, Redirect } from 'react-router-dom';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Container from '../../components/Container';

export default class UserProfile extends React.Component {
	static contextType = FirebaseContext;
	state = {
		user: {
			username: undefined
		}
	}

	listen = () => {
		const { firestore } = this.context
		firestore.collection("users")
			.doc(this.state.uid)
			.onSnapshot(
				snapshot => {
					this.setState({
						user: snapshot.data(),
						alert: null
					})
					this.getPosts()
					this.getFollowers()
				}
			)
	}

	getPosts = () => {
		const { firestore } = this.context
		var posts = []
		firestore.collection("users/" + this.state.uid + "/posts")
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
		firestore.collection("users").where("following", "array-contains", firestore.collection("users").doc(this.state.uid))
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
		const { getUserRefByUsername, auth } = this.context
		getUserRefByUsername(
			this.props.match.params.username
		).limit(1)
			.get()
			.then(
				snapshot => {
					if (snapshot.size === 0) {
						this.setState({
							alert: "noUser"
						})
					}
					else {
						snapshot.forEach(
							doc => {
								this.setState({
									uid: doc.id,
									self: (
										auth.currentUser.uid
										===
										doc.id
									)
								})
								this.listen()
							}
						)
					}
				}
			);
	}

	render() {
		const { isLoggedIn, isFollowing } = this.context
		if (this.state.uid) console.log("isFollowing: " + isFollowing(this.state.uid))
		if (this.props.match.params.username !== this.props.match.params.username.toLowerCase())
			return <Redirect to={"/user/" + this.props.match.params.username.toLowerCase()} />
		if (!isLoggedIn) {
			return (
				<Container>
					<Alert type="danger" title="Not logged in!">
						Please <Link to="/login">Login</Link> to see this page.
					</Alert>
				</Container>
			)
		}
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
					<Container>
						<div className="grid-container" id="topbar">
							<div className="grid-item">
								<h3>Posts</h3>
								<span className="number">
									{this.state.posts ? this.state.posts.length : 0}
								</span>
							</div>
							<div className="grid-item">
								<h3>Followers</h3>
								<span className="number">
									{this.state.followers ? this.state.followers.length : 0}
								</span>
							</div>
							<div className="grid-item">
								<h3>Following</h3>
								<span className="number">
									{this.state.user ? this.state.user.following ? this.state.user.following.length : 0 : 0}
								</span>
							</div>
						</div>
						{
							this.state.self ?
								<Button to={
									"/user/" + this.props.match.params.username + "/settings"
								}>
									Settings
								</Button> :
								this.state.uid && isFollowing(this.state.uid) ?
									<Button>
										Unfollow
									</Button> :
									<Button>
										Follow
									</Button>
						}
					</Container>
				</Card>
			</div>
		)
	}
}