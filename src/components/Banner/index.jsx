import React from 'react';
import './style.scss';

export default class Banner extends React.Component {
	render() {
		return (
			<div className="Banner">
				{this.props.children}
			</div>
		)
	}
}