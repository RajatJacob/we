import React from 'react';
import './style.scss';

export default class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			type: this.props.type
		}
	}

	toggleVisible = () => {
		this.setState(
			{
				type:
					this.state.type === "password"
					? "text"
					: this.props.type
			}
		)
	}
	
	render() {
		return (
			<div className={ "Input" + (this.props.icon ? "" : " noIcon") }>
				<span className="icon">{ this.props.icon || null }</span>
				<input placeholder={ this.props.label || ""  } type={ this.state.type || "text" } />
				{
					this.props.type === "password"
					? <span className="icon" id="visibleToggle" onClick={ this.toggleVisible }>
						{ this.state.type === "password" ? "show" : "hide" }
					</span>
					: ""
				}
			</div>
		)
	}
}