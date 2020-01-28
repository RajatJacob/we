import React from 'react';
import './style.scss';

export default class Button extends React.Component {
	render() {
		return (
			<div className="Button" onClick={this.props.onClick}>
				{
					this.props.icon ?
						<span className="icon">
							{this.props.icon}
						</span> :
						null
				}
				<span className="message">
					{this.props.children}
				</span>
			</div>
		)
	}
}