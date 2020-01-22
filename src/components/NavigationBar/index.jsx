import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

class Tab extends React.Component {
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
			</div>
		);
	}

}
export default Tab;