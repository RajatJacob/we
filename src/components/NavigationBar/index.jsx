import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';

class Tab extends React.Component {
	static contextType = FirebaseContext;

	render() {
		const { user } = this.context;
		const links = (user) ?
			[
				{ name: "Feed", url: "/feed" },
				{ name: "Search", url: "/search" },
				{ name: "My Profile", url: "/user" },
			] : [
				{ name: "Home", url: "/" },
				{ name: "Login", url: "/login" }
			];
		links.forEach((x) => console.log(x.name))
		return (
			<div className="NavigationBar">
				{
					links.map((h) => {
						var checkActive = null;
						if (h.url === "/") checkActive = (match, location) => {
							if (!location) return false;
							const { pathname } = location;
							console.log(pathname);
							return pathname === "/";
						}
						return (
							<NavLink className="center" to={h.url} activeClassName="active" isActive={checkActive}>
								{h.name}
							</NavLink>
						)
					})
				}
			</div>
		);
	}

}
export default Tab;