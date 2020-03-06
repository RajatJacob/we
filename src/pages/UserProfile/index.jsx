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
import { faCog, faUser, faFile } from '@fortawesome/free-solid-svg-icons';
import UserProfileSettings from '../../components/UserProfileSettings';
import UserList from '../../components/UserList';
import Feed from '../../components/Feed';
import Loader from '../../components/Loader';

export default class UserProfile extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state =
		{
			user: {
				username: ""
			},
			done: false,
			isFollowing: false,
			followChange: false,
			unsubscribe: () => { }
		}
	}

	getUserData = uid => {
		const { firestore } = this.context
		return new Promise(
			(resolve, reject) => {
				this.setState(
					{
						unsubscribe:
							firestore.collection("users")
								.doc(uid)
								.onSnapshot(
									snapshot => {
										this.setState({ user: snapshot.data() })
										resolve(snapshot.data())
									}
								)
					}
				)
			}
		)
	}

	getFollowers = uid => {
		const { getFollowers } = this.context
		return getFollowers(uid)
	}
	getFeedQuery = uid => {
		const { firestore } = this.context
		return firestore
			.collection("users")
			.doc(uid)
			.collection("posts")
	}

	getPosts = feedQuery => {
		var posts = []
		return new Promise(
			(resolve, reject) => {
				feedQuery
					.get()
					.then(
						snapshot => {
							snapshot.forEach(
								doc => {
									posts.push(doc.data())
								}
							)
							resolve(posts)
						}
					)
					.catch(err => reject(err))
			}
		)
	}

	isSelf = uid => {
		const { auth } = this.context
		this.setState({ self: uid === auth.currentUser.uid })
	}

	getUID = () => {
		const { getUserRefByUsername } = this.context
		return new Promise(
			(resolve, reject) => {
				getUserRefByUsername(
					this.props.match.params.username
				).limit(1)
					.get()
					.then(
						snapshot => {
							if (snapshot.size === 0) {
								reject({ message: "No users" })
							}
							else {
								var id
								snapshot.forEach(
									doc => id = doc.id || id
								)
								resolve(id)
							}
						}
					)
			}
		)
	}

	getIsFollowing = uid => {
		const { isFollowing } = this.context
		isFollowing(uid).then(
			f => {
				this.setState({
					isFollowing: f
				})
			}
		)
	}

	follow = () => {
		const uid = this.state.uid
		console.log(uid)
		this.setState({ followChange: true })
		const { follow } = this.context
		follow(uid)
			.then(
				() =>
					this.getFollowData(uid)
			)
	}

	getFollowData = uid => {
		this.getIsFollowing(uid)
		this.getFollowers(uid)
			.then(
				followers => {
					this.setState(
						{
							followers: followers,
							followChange: false
						}
					)
				}
			)
			.catch(
				err => [
					console.log(err)
				]
			)
	}

	componentDidMount() {
		this.init()
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.match.params.username !== this.props.match.params.username
		)
			this.init()
	}

	componentWillUnmount() {
		this.state.unsubscribe()
	}

	init = () => {
		this.state.unsubscribe()
		this.setState({ done: false })
		this.getUID()
			.then(
				uid => {
					this.isSelf(uid)
					this.getUserData(uid)
						.then(
							user => {
								this.setState({ uid: uid, user: user, done: true })
							}
						)
					const fq = this.getFeedQuery(uid)
					this.getPosts(fq)
						.then(
							posts => this.setState({ posts: posts, feedQuery: fq })
						)
					this.getFollowData(uid)
				}
			)
	}

	render() {
		const { isLoggedIn } = this.context
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
			<div className="UserProfile" >
				{
					this.state.done ?
						<>
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
									{
										this.state.user.bio ?
											<div className="bio">
												{
													this.state.user.bio
												}
											</div> :
											null
									}
									<Container>
										{
											this.state.self ?
												<div className="split">
													<Button
														to="/rvjoin"
														icon={<FontAwesomeIcon icon={faFile} />}
													>
														Résumé
													</Button>
													<Button
														to={
															this.props.match.url + "/settings"
														}
														icon={<FontAwesomeIcon icon={faCog} />}>
														Settings
													</Button>
												</div> :
												<Button active={this.state.followChange} onClick={
													this.follow
												} >
													{
														this.state.isFollowing ?
															"Unfollow" :
															"Follow"
													}
												</Button>
										}
										<div className="tab-container">
											<NavLink to={this.props.match.url} className="tab" activeClassName="active"
												isActive={
													(match, location) => {
														if (!location) return false;
														const { pathname } = location;
														console.log(pathname);
														return pathname === this.props.match.url;
													}
												}>
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
								</Container>
							</Card>
							<Container>
								<Switch>
									<Route exact path={this.props.match.url} >
										<h2>Posts</h2>
										<Feed query={this.state.feedQuery} />
									</Route>
									<Route exact path={this.props.match.url + "/followers"} >
										<h2>Followers</h2>
										{
											this.state.followers ?
												<UserList users={this.state.followers.reverse()} /> :
												null
										}
									</Route>
									<Route exact path={this.props.match.url + "/following"} >
										<h2>Following</h2>
										{
											this.state.user.following ?
												<UserList users={this.state.user.following.reverse()} /> :
												null
										}
									</Route>
									<Route exact path={this.props.match.path + "/settings"} >
										{
											this.state.self ?
												this.state.uid ?
													<UserProfileSettings uid={this.state.uid} /> : null
												:
												null
										}
									</Route>
								</Switch>
							</Container>
						</> :
						<Loader />
				}
			</div >
		)
	}
}