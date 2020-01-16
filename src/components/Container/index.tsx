import React from 'react'
import './style.scss'

export default class Container extends React.Component {
	render() {
		return (
			<div className="Container">
				{ this.props.children }
			</div>
		)
	}
}