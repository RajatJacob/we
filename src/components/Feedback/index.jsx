import React from 'react';
import ReactDOM from 'react-dom';
import './styleform.css';
import {FirebaseContext} from '../../contexts/FirebaseContext';

import { storage } from '../../contexts/FirebaseContext';

export default class Feedback extends React.Component
{
	static contextType = FirebaseContext;
	constructor(props){
	super(props);
      this.state = {
         form: {

         }


      };
		
this.handleSubmit=this.handleSubmit.bind(this);
this.baseState = this.state;
	}
	fileSelectedHandler=event=>{
		this.setState({selectedFile: event.target.files[0]})
	};
	handleChange = ({
      target
   }) => {
      console.log(this.state)
      var f = {
         form: this.state.form
      }
      f.form[target.name] = target.value;
      this.setState(f);
   };
	handleSubmit(event){
	const {
         firestore
      } = this.context;
      alert('Submitted');
      firestore.collection("Feedback").add(
         this.state.form
      )
      event.preventDefault();
   };
	render()
	{
		return(
			<form class="form-style" onSubmit={this.handleSubmit}>
			<h1 align="left">Feedback</h1>
			<br/>
			<div class="inner-wrap">
			<label>
			First Name 
			<input   name="fname" type="text" onChange={this.handleChange}/>
			</label>
			
         </div><br/>
			<div class="inner-wrap">
			<label>
			Feedback
			<textArea name="feedback" class="input1" rows="10" columns="40" required="required"onChange={this.handleChange} />
			</label>
			<br/>
			
			
			</div>
			

			<input type="submit" value="Submit" onClick={this.handleSubmit}/>
			</form>
			);
	
}}