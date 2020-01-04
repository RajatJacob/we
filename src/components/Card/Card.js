import React from 'react';
import './Card.scss';

class Card extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Card container">
				{ this.props.children }
			</div>
		)
	}
}

export default Card;