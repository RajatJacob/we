import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

class Tab extends React.Component {
	constructor(props) {
		super(props)
		this.state =
		{
			links: this.props.links === undefined ?
				[
					{ name: "Home", url: "/" },
					{ name: "Feed", url: "/feed" },
					{ name: "Search", url: "/search" },
					{ name: "Login", url: "/login" },
				] : this.props.links
		}

	}
	render() {
		return (
			<div className="Tab">
				<ul id="links" >
					{
						this.state.links.map((h) => {
							return (
								<NavLink to={h.url} activeClassName="active">
									<li>
										{h.name}
									</li>
								</NavLink>
							)
						})
					}
				</ul>
			</div>
		);
	}

}
export default Tab;