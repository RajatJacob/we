import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link, NavLink, Redirect, Switch, Route } from 'react-router-dom';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default class UserProfile extends React.Component {
	static contextType = FirebaseContext;
	state = {
		user: {
			username: undefined
		}
	}
	username = this.props.match.params.username

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
			this.username
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
		const { isLoggedIn, auth } = this.context
		if (this.username !== this.username.toLowerCase())
			return <Redirect to={"/user/" + this.username.toLowerCase()} />
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
					{
						this.state.alert === "noUser" ?
							<Alert type="danger" title="Invalid user!" /> :
							<Link to={"/user/" + this.username}>
								<h1>
									{
										this.state.user.name
									}
								</h1>
							</Link>
					}
					<Container>
						<div className="tab-container">
							<NavLink to={"/user/" + this.username + "/posts"} className="tab" activeClassName="active">
								<div className="number">
									{this.state.posts ? this.state.posts.length : 0}
								</div>
								<div className="title">
									{
										this.state.posts ? this.state.posts.length === 1 ? "Post" :
											"Posts" : "Posts"
									}
								</div>
							</NavLink>
							<NavLink to={this.props.match.url + "/followers"} className="tab" activeClassName="active">
								<div className="number">
									{this.state.followers ? this.state.followers.length : 0}
								</div>
								<div className="title">
									{
										this.state.followers ? this.state.followers.length === 1 ? "Follower" :
											"Followers" : "Followers"
									}
								</div>
							</NavLink>
							<NavLink to={this.props.match.url + "/following"} className="tab" activeClassName="active">
								<div className="number">
									{this.state.user ? this.state.user.following ? this.state.user.following.length : 0 : 0}
								</div>
								<div className="title">Following</div>
							</NavLink>
						</div>
						{
							this.state.self ?
								<Button to={
									this.props.match.url + "/settings"
								} icon={<FontAwesomeIcon icon={faCog} />}>
									Settings
								</Button> :
								<Button>
									Follow
								</Button>
						}
					</Container>
				</Card>
				<Card>
					<Switch>
						<Route exact path={this.props.match.path} >
							<h2>Main</h2>
						</Route>
						<Route exact path={this.props.match.path + "/posts"} >
							<h2>Posts</h2>
						</Route>
						<Route exact path={this.props.match.path + "/followers"} >
							<h2>Followers</h2>
						</Route>
						<Route exact path={this.props.match.path + "/following"} >
							<h2>Followers</h2>
						</Route>
						<Route exact path={this.props.match.path + "/settings"} >
							{
								this.username === auth.currentUser.displayName ?
									<>
										<h2>Settings</h2>
										<Container>
											<Button to="/logout" icon={<FontAwesomeIcon icon={faSignOutAlt} />}>Logout</Button>
										</Container>
									</>
									:
									null
							}
						</Route>
					</Switch>
				</Card>
			</div>
		)
	}
}