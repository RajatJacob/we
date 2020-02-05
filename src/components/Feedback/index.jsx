import React from 'react';
import ReactDOM from 'react-dom';
import './styleform.css';

export default class OrganisationForm extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			fname:'',
         feedback:''
			

		};
		
this.handleSubmit=this.handleSubmit.bind(this);
this.onResetClick=this.onResetClick.bind(this);
	}
	fileSelectedHandler=event=>{
		this.setState({selectedFile: event.target.files[0]})
	};
	handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });};
	handleSubmit(event)
	{
		alert('Submitted');
		event.preventDefault();
	}
	 onResetClick(event) {
	 	alert('Reset Done');
        event.preventDefault();
        this.setState={
			fname:'',
         feedback:''
			

		};
    }
	render()
	{
		return(
			<form class="form-style" onSubmit={this.handleSubmit}>
			<h1 align="left">Feedback</h1>
			<br/>
			<div class="inner-wrap">
			<label>
			First Name 
			<input  value="input" name="fname" type="text" value={this.state.fname} onChange={this.handleChange}/>
			</label>
			
         </div><br/>
			<div class="inner-wrap">
			<label>
			Feedback
			<textArea name="feedback" class="input1" rows="10" columns="40" required="required" value={this.state.feedback} onChange={this.handleChange} />
			</label>
			<br/>
			
			
			</div>
			

			<input type="submit" value="Submit"/>
		
			<button class="button" type="button" onClick={this.onResetClick} >Reset</button>
			<br/>
			</form>
			);
	
}}