import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default class Alert extends React.Component {
	icons = {
		default: <FontAwesomeIcon icon={faCircle} />,
		success: <FontAwesomeIcon icon={faCheckCircle} />,
		info: <FontAwesomeIcon icon={faInfoCircle} />,
		warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
		danger: <FontAwesomeIcon icon={faExclamationTriangle} />
	}

	render() {
		var className = "Alert "
		className += this.props.type || "default"
		return (
			<div className={className}>
				<div className="icon center">
					{this.props.icon ? this.props.icon : this.props.type ? this.icons[this.props.type] : null}
				</div>
				<div className="content center">
					<div className="title">{this.props.title}</div>
					{this.props.children}
				</div>
			</div>
		)
	}
}