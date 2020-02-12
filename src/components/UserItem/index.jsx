import React from 'react';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class UserItem extends React.Component {
	static contextType = FirebaseContext;

	constructor(props) {
		super(props)
		this.state = {
			user: {}
		}
	}

	render() {
		const { isFollowing } = this.context;
		this.props.user.get().then(
			doc => {
				if (doc.exists) {
					this.setState(
						{ user: doc.data() }
					)
				}
			}
		)
		return (
			<div className="UserItem">
				{
					this.state.user.photoURL ?
						<img src={this.state.user.photoURL} alt="" className="profilePicture" /> :
						<div className="profilePicture">
							<FontAwesomeIcon icon={faUser} />
						</div>
				}
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
			</div>
		)
	}
}