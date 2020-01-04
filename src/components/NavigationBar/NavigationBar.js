import React from 'react';
import { Link } from 'react-router-dom';
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

	show() {
		this.setState('active', true);
		this.classList.add('active');
	}

	hide() {
		this.setState('active', false);
		this.classList.remove('active');
	}

	toggle() {
		if(this.state.active) this.hide();
		else this.show();
	}

	render() {
		return (
			<div className="NavigationBar">
				<ul id="links">
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
