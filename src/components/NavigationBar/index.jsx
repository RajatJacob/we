import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';

class Tab extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state =
		{
			links: this.props.links ||
				[
					{ name: "Home", url: "/" },
					{ name: "Feed", url: "/feed" },
					{ name: "Search", url: "/search" },
					{ name: "Login", url: "/login" },
				]
		}

	}
	render() {
		const { user, auth } = this.context;
		return (
			<div className="NavigationBar">
				{
					this.state.links.map((h) => {
						return (
							<NavLink className="center" to={h.url} activeClassName="active">
								{h.name}
							</NavLink>
						)
					})
				}
				{
					user ? <button onClick={() => { auth.signOut() }}>Logout</button> : null
				}
			</div>
		);
	}

}
export default Tab;