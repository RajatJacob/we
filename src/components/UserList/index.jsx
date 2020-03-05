import React from 'react';
import './style.scss';
import UserItem from '../UserItem';

export default class UserList extends React.Component {
	render() {
		return (
			<div className="UserList">
				{
					this.props.users.map(
						u => {
							return (
								<UserItem user={u} />
							)
						}
					)
				}
			</div>
		)
	}
}