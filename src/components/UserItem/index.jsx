import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Loader';

export default class UserItem extends React.Component {
	static contextType = FirebaseContext;

	state = {
		user: {},
		done: false
	}

	componentDidMount() {
		this.init()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.user !== this.props.user)
			this.init()
	}

	init = () => {
		const { auth } = this.context
		this.setState({ done: false })
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
				() => {
					this.setState({ done: true })
				}
			)
	}

	render() {
		return (
			<div className="UserItem">
				{
					this.state.done ?
						<Link to={("/user/" + this.state.user.username) || null} >
							<div className="photo">
								{
									this.state.user.photoURL ?
										<img src={this.state.user.photoURL} alt="" className="profilePicture" /> :
										<div className="profilePicture">
											<FontAwesomeIcon icon={faUser} />
										</div>
								}
							</div>
							<div className="user">
								{
									this.state.user.name ?
										<span className="name">
											{this.state.user.name}
										</span> : null
								}
								{
									<span className="username">{"@" + this.state.user.username}</span>
								}
							</div>
						</Link>
						:
						<Loader />
				}
			</div>
		)
	}
}