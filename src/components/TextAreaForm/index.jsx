import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
export default class TextArea extends React.Component{
	render()
	{
		return(
			<textArea name="this.props.name" className="input1"  required="this.props.required" value={this.state.name} onChange={this.props.onChange} />
			
			);
	}
}