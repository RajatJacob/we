import React from 'react';
import './NavigationBar.css';
import '../../resources/WE.png';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: (this.props.links === undefined) ? [
				{name: "Home", url: "/"},
				{name: "Who We Are", url: "/"},
				{name: "Opportunities", url: "/"}
			] : this.props.links
		}
	}

	render() {
		return (
			<div className="NavigationBar">
				<ul id="links">
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
