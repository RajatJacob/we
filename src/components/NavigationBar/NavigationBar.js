import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
			links: (this.props.links === undefined) ? [
				{name: "Who We Are", url: "/who-we-are"},
				{name: "Opportunities", url: "/opportunities"},
				{name: "Join Us", url: "/join-us"},
				{name: "Support", url: "/support"},
				{name: "Community", url: "/community"}
			] : this.props.links
		}
	}

	show = () => {
		this.setState({'active': true});
	}

	hide = () => {
		this.setState({'active': false});
	}

	toggle = () => {
		this.setState({'active': !this.state.active});
	}

	render() {
		let className = "NavigationBar"
		if(this.state.active) className += " active"
		return (
			<div className={ className }>
				<div id="toggle" onClick={ this.toggle }>
					<span id="a"></span>
					<span id="b"></span>
					<span id="c"></span>
				</div>
				<ul id="links">
					{
						this.state.links.map((x) => {
							return (
								<NavLink to={x.url} onClick={ this.hide } activeClassName="active">
									<li>
										{x.name}
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

export default NavigationBar;
