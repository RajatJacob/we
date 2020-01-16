import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';
import HamburgerMenuToggle from '../HamburgerMenuToggle';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
			links: (this.props.links === undefined) ? [
				{name:"Code Of Conduct",url:"/code-of-conduct"},
				{name:"Privacy Policy",url:"/privacy-policy"},
				{name:"Feedback",url:"/feedback"},
				{name:"Contact",url:"/contact"}
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
				<HamburgerMenuToggle active={this.state.active} onClick={this.toggle} activeColor="white" inactiveColor="black"/>
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
