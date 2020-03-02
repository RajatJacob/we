import React from 'react';
import './style.scss';

export default class Overlay extends React.Component {
	render() {
		var className = "Overlay"
		className += this.props.active ? " active" : ""
		return (
			<div className={className}>
				<div className="backdrop"></div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}