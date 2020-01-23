import React from 'react';
import './style.scss';

export default class Alert extends React.Component {
	render() {
		var className = "Alert "
		className += this.props.type || "default"
		return (
			<div className={className}>
				<div className="title">{this.props.title}</div>
				{this.props.children}
			</div>
		)
	}
}