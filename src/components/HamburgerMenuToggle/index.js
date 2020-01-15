import React from 'react'
import './index.scss'

export default class HamburgerMenuToggle extends React.Component {
	constructor(props) {
		super(props)
		this.style = {
			"--color": (props.color === undefined) ? "black" : props.color
		}
		this.style["--activeColor"] = (props.activeColor === undefined) ? this.style["--color"] : props.activeColor
		this.style["--inactiveColor"] = (props.inactiveColor === undefined) ? this.style["--activeColor"] : props.inactiveColor
		this.style["--width"] = (props.width === undefined) ? "1em" : props.width
	}

	render() {
		var className = "HamburgerMenuToggle"
		if(this.props.active) className += " active"
		return (
			<div className={ className } onClick={ this.props.onClick } style = { this.style }>
				<span id="a"></span>
				<span id="b"></span>
				<span id="c"></span>
			</div>
		);
	}
}