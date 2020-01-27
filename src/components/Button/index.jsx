import React from 'react';
import './style.scss';

export default class Button extends React.Component {
	render() {
		return (
			<div className="Button" onClick={this.props.onClick}>
				{this.props.children}
			</div>
		)
	}
}