import React from 'react';
import './style.scss';

export default class GridContainer extends React.Component {
	render() {
		return (
			<div className="GridContainer">
				{
					this.props.children.map((x) => {
						return (
							<div className="GridItem">
								{x}
							</div>
						)
					})
				}
			</div>
		)
	}
}