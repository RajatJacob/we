import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import logo from '../../resources/WE.png';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: (this.props.links === undefined) ? [
				{name: "Who We Are", url: "/who-we-are"},
				{name: "Opportunities", url: "/opportunities"},
				{name: "Join Us", url: "/join-us"},
				{name: "Support", url: "/support"},
				{name: "Community", url: "/community"}
			] : this.props.links
		}
	}

	toggle() {
		let ul = document.querySelector(".NavigationBar ul#links")
		if(ul.classList.contains("hidden"))
		ul.classList.remove("hidden")
		else ul.classList.add("hidden")
	}

	render() {
		return (
			<div className="NavigationBar">
				<a href="/"><img src={logo} alt="Instagram Logo"/></a>
				<span id="linkToggle" onClick={this.toggle}>&#9776;</span>
				<ul id="links" className="hidden">
					{
						this.state.links.map((x) => {
							return (
								<Link to={x.url}>
									<li>
										{x.name}
									</li>
								</Link>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default NavigationBar;
