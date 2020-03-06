import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
export default class Input extends React.Component
{
	render()
	{
		return(
			<input name={this.props.name} 
			className="input" 
			value={this.state.name} 
			required={this.props.required} 
			onChange={this.props.onChange} />
			);

	}
}

