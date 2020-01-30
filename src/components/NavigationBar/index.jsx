import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';

class NavigationBar extends React.Component {
	static contextType = FirebaseContext;

	render() {
		const { isLoggedIn } = this.context;
		const links = (isLoggedIn) ?
			[
				{ name: "Home", url: "/", icon: <FontAwesomeIcon icon={faHome} /> },
				{ name: "Search", url: "/search", icon: <FontAwesomeIcon icon={faSearch} /> },
				{ name: "Feed", url: "/feed", icon: <FontAwesomeIcon icon={faBuffer} /> },
				{ name: "User", url: "/user", icon: <FontAwesomeIcon icon={faUser} /> }
			] : [
				{ name: "Home", url: "/", icon: <FontAwesomeIcon icon={faHome} /> },
				{ name: "Login", url: "/login", icon: <FontAwesomeIcon icon={faKey} /> }
			];
		return (
			<div className="NavigationBar">
				{
					links.map((h) => {
						var checkActive = null;
						if (h.url === "/") checkActive = (match, location) => {
							if (!location) return false;
							const { pathname } = location;
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
			</div>
		);
	}

}

export default NavigationBar;