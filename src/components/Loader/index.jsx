import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

export default class Loader extends React.Component {
	render() {
		return (
			<div className="Loader">
				<FontAwesomeIcon icon={faCircleNotch} spin />
			</div>
		)
	}
}