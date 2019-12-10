import React from 'react';
import './NavigationBar.css';
import logo from '../../resources/WE.png'

class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: (this.props.links === undefined) ? [
				{name: "Who We Are", url: "/"},
				{name: "Opportunities", url: "/"},
				{name: "Join Us", url: "/"},
				{name: "Support", url: "/"},
				{name: "Community", url: "/"}
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
								<a href={x.url}>
									<li>
										{x.name}
									</li>
								</a>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default NavigationBar;
