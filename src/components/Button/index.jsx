import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
	render() {
		const b = (
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
		return (
			this.props.to ?
				<Link to={this.props.to} className="ButtonLink">
					{b}
				</Link> :
				b
		)
	}
}