import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Loader';

export default class UserItem extends React.Component {
	static contextType = FirebaseContext;

	constructor(props) {
		super(props)
		this.state = {
			user: {},
			done: false,
			followChange: false,
			isFollowing: false
		}
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
				() => {
					this.getIsFollowing(uid)
					this.setState({ followChange: false })
				}
			)
	}

	componentDidMount() {
		this.init()
	}

	init = () => {
		const { auth } = this.context
		if (!this.state.done)
			this.props.user
				.get()
				.then(
					doc => {
						if (doc.exists) {
							this.setState(
								{ uid: doc.id, user: doc.data(), done: true, self: auth.currentUser.uid === doc.id }
							)
						}
					}
				)
				.finally(
					() => this.setState({ done: true })
				)
	}

	render() {
		return (
			<div className="UserItem">
				{
					this.state.done ?
						<>
							<div className="photo">
								{
									this.state.user.photoURL ?
										<img src={this.state.user.photoURL} alt="" className="profilePicture" /> :
										<div className="profilePicture">
											<FontAwesomeIcon icon={faUser} />
										</div>
								}
							</div>
							<Link to={("/user/" + this.state.user.username) || null} >
								{
									"@" + this.state.user.username
								}
							</Link>
							{
								this.state.self ?
									<Button to={"/user/" + this.state.user.username}>View</Button> :
									<Button active={this.state.followChange} onClick={this.follow}>
										{
											this.state.isFollowing ?
												"Unfollow" :
												"Follow"
										}
									</Button>
							}
						</> :
						<Loader />
				}
			</div>
		)
	}
}