import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faFile, faKey } from '@fortawesome/free-solid-svg-icons';

class Tab extends React.Component {
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
export default Tab;