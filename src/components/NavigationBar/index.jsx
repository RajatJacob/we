import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faFile, faKey } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props)
		this.state =
		{
			links: this.props.links ||
				[
					{ name: "Home", url: "/", icon: <FontAwesomeIcon icon={faHome} /> },
					{ name: "Feed", url: "/feed", icon: <FontAwesomeIcon icon={faFile} /> },
					{ name: "Search", url: "/search", icon: <FontAwesomeIcon icon={faSearch} /> },
					{ name: "Login", url: "/login", icon: < FontAwesomeIcon icon={faKey} /> }
				]
		}
	}

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
					this.state.links.map((h) => {
						var checkActive = null;
						if (h.url === "/") checkActive = (match, location) => {
							if (!location) return false;
							const { pathname } = location;
							console.log(pathname);
							return pathname === "/";
						}
						return (
							<NavLink to={h.url} className="center" activeClassName="active" isActive={checkActive}>
								<div>
									<span className="icon">{h.icon || h.name}</span>
									<span className="name">{h.name}</span>
								</div>
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

export default NavigationBar;