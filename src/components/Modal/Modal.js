import React from 'react'
import './Modal.scss'
import Card from '../Card/Card'

export default class Modal extends React.Component {
	render() {
		var className = "Modal"
		if(this.props.active) className += " active"
		var toggleFunc = (this.props.active) ? this.props.toggle : null
		return (
			<div className={className}>
				<div className="backdrop" onClick={toggleFunc}></div>
				<Card>
					<span id="toggle" onClick={toggleFunc}>&times;</span>
					{this.props.children}
				</Card>
			</div>
		)
	}
}