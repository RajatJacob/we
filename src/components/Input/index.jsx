import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
			<div className={"Input" + (this.props.icon ? "" : " noIcon") + (this.props.type === "submit" ? " submit" : "")}>
				<div className="iconContainer center">
					<span className="icon">{this.props.icon || null}</span>
				</div>
				<input onChange={this.props.onChange} placeholder={this.props.label || ""} type={this.state.type || "text"} value={this.props.type === "submit" ? this.props.label : this.props.value} />
				{
					this.props.type === "password"
						?
						<div className="iconContainer center" id="visibleToggle">
							<span className="icon" onClick={this.toggleVisible}>
								{this.state.type === "password" ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
							</span>
						</div>
						: ""
				}
			</div>
		)
	}
}