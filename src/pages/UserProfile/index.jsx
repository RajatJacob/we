import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link, NavLink, Redirect, Switch, Route } from 'react-router-dom';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import UserProfileSettings from '../../components/UserProfileSettings';
import UserList from '../../components/UserList';

export default class UserProfile extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state = (
			{
				user: {
					username: "undefined"
				}
			}
		)
	}

	getUserData = () => {
		const { firestore } = this.context
		if (this.state.uid)
			return firestore.collection("users")
				.doc(this.state.uid)
				.get()
				.then(
					doc => {
						this.setState({
							user: doc.data(),
							alert: null
						})
					}
				)
	}

	getFollowers = () => {
		const { getFollowers } = this.context
		getFollowers(this.state.uid).then(
			f => {
				this.setState(
					{
						followers: f
					}
				)
			}
		)
			.catch(
				err => {
					console.log(err)
				}
			)
	}

	getPosts = () => {
		const { firestore } = this.context
		var posts = []
		if (this.state.uid)
			return firestore
				.collection("users")
				.doc(this.state.uid)
				.collection("posts")
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

	setUID = () => {
		const { getUserRefByUsername, auth } = this.context
		return getUserRefByUsername(
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
							}
						)
					}
				}
			)
	}

	componentDidUpdate() {
		if (this.state.user.username !== this.props.match.params.username) {
			this.setUID()
				.then(this.getUserData)
				.then(this.getFollowers)
				.then(this.getPosts)
		}
	}

	render() {
		const { isLoggedIn, auth, follow, isFollowing } = this.context
		if (this.state.user.username !== this.state.user.username.toLowerCase())
			return <Redirect to={"/user/" + this.state.user.username.toLowerCase()} />
		if (!isLoggedIn) {
			return (
				<Card>
					<Alert type="danger" title="Not logged in!">
						Please <Link to="/login">Login</Link> to see this page.
					</Alert>
				</Card>
			)
		}
		return (
			<div className="UserProfile">
				<Card noContainer>
					{
						this.state.alert === "noUser" ?
							<Container>
								<Alert type="danger" title="Invalid user!" />
							</Container> :
							<Banner>
								{
									this.state.user.photoURL ?
										<img src={this.state.user.photoURL} alt="" className="profilePicture" /> :
										<div className="profilePicture">
											<FontAwesomeIcon icon={faUser} />
										</div>
								}
								<h1>
									{this.state.user.name}
								</h1>
								<Link className="username" to={"/user/" + this.state.user.username}>
									{
										"@" + (this.state.user.username || "")
									}
								</Link>
							</Banner>
					}
					<Container>
						<Container>
							{
								this.state.self ?
									<Button to={
										this.props.match.url + "/settings"
									} icon={<FontAwesomeIcon icon={faCog} />}>
										Settings
									</Button> :
									<Button onClick={() => follow(this.state.uid)} >
										{
											isFollowing(this.state.uid) ?
												"Follow" :
												"Unfollow"
										}
									</Button>
							}
							<div className="tab-container">
								<NavLink to={"/user/" + this.state.user.username + "/posts"} className="tab" activeClassName="active">
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
						</Container>
						<Switch>
							<Route exact path={this.props.match.path + "/posts"} >
								<h2>Posts</h2>
							</Route>
							<Route exact path={this.props.match.path + "/followers"} >
								<h2>Followers</h2>
								{
									this.state.followers ?
										<UserList users={this.state.followers} /> :
										null
								}
							</Route>
							<Route exact path={this.props.match.path + "/following"} >
								<h2>Following</h2>
								{
									this.state.user.following ?
										<UserList users={this.state.user.following} /> :
										null
								}
							</Route>
							<Route exact path={this.props.match.path + "/settings"} >
								{
									this.state.user.username === auth.currentUser.displayName ?
										this.state.uid ?
											<UserProfileSettings uid={this.state.uid} /> : null
										:
										null
								}
							</Route>
						</Switch>
					</Container>
				</Card>
			</div >
		)
	}
}