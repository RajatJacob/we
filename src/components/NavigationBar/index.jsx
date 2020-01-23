import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';

class Tab extends React.Component {
	static contextType = FirebaseContext;

	render() {
		const { user, auth } = this.context;
		const links = (user) ?
			[
				{ name: "Home", url: "/" },
				{ name: "User Profile", url: "/userprofile" },
				{ name: "Feed", url: "/feed" },
				{ name: "Search", url: "/search" },
			] : [
				{ name: "Home", url: "/" },
				{ name: "Login", url: "/login" }
			];
		links.forEach((x) => console.log(x.name))
		return (
			<div className="NavigationBar">
				{
					links.map((h) => {
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