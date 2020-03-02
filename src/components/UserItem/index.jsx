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
			done: false
		}
	}

	componentDidMount() {
		this.init()
	}

	init = () => {
		if (!this.state.done)
			this.props.user
				.get()
				.then(
					doc => {
						if (doc.exists) {
							this.setState(
								{ user: doc.data(), done: true }
							)
						}
					}
				)
				.finally(
					() => this.setState({ done: true })
				)
	}

	render() {
		const { isFollowing } = this.context;
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
							<Button>
								{
									isFollowing(this.state.user.uid) ? "Unfollow" : "Follow"
								}
							</Button>
						</> :
						<Loader />
				}
			</div>
		)
	}
}