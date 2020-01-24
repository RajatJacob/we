import React from 'react';
import ReactDOM from 'react-dom';
import './styleform.scss';
import CountrySelector from '../../components/CountrySelector';
import Input from '../../components/Input';

export default class OrganisationForm extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			name:'',
			website:'',
			info:'',
			address:'',
			contactperson1:'',
			contactperson2:'',
			contactemail:'',
			contactnumber:'',
			country:'',
			projects:'',
			gender:''

		};
		
this.handleSubmit=this.handleSubmit.bind(this);
this.baseState=this.state;
  
	}
	fileSelectedHandler=event=>{
		this.setState({selectedFile: event.target.files[0]})
	};
   handleClearForm=()=> {
      alert('reset done');
  this.setState(this.baseState);
      
    };
	handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });};
	handleSubmit(event)
	{
		alert('Submitted');
		event.preventDefault();
	};


	render()
	{
		return(
			<form className="form-style" onSubmit={this.handleSubmit}>
			<h1>Organisation Form</h1>
			<br/>
			<div className="inner-wrap">
			<label>
			 Name of the Organisation
			
			<input type="text" name={'name'}/>

          </label>
			<br/>
			<label>
			Website
         <input type="url" name={'website'} placeholder="https://www.sample.com"/>
			</label>
			</div>
			
			<br/>
			<div className="inner-wrap">
			<label>
			Address
         <textArea name={'address'} />
			</label>
			<br/>
			<label>
			Country
			<CountrySelector name={'country'} />
        	
        	</label>
    <br/>
			</div>
			<br/>
			
			<div className="inner-wrap" name={'contactperson1'}>
			<label>
			Contact Person
			<select className="dropdown" name="contactperson1" required="required" value={this.state.contactperson1} onChange={this.handleChange}>
            <option value="Mr.">Mr</option><br/>
            <option value="Mrs.">Mrs</option><br/>
            <option value="Miss">Miss</option><br/>
        	</select>
        	
        <input type="text" name={'contactperson2'}/>
			</label>
			<br/>
			<label>
			Contact Email
         <input type="email" name={'contactemail'}/>
			</label>
			<br/>
			<label>
			Contact 
         <input type="text" name={'contactnumber'}/>
			</label>
			<br/>
		
			
			</div>
			<br/>
			<div className="inner-wrap">
			<label>
			Tell us about your Organisation
         <textArea name={'info'}/>
			</label>
			<br/>
        	<label>
			Initiatives/Projects taken earlier
         <textArea name={'projects'}/>
			</label>
			<br/>
			<label>
			Photo Attachment
			<input type="file" name={'photo'} onChange={this.fileSelectedHandler}/>
			</label>
			<br/>
			<label>
			Views on gender equality
         <textArea name={'gender'}/>
			</label>
			<br/>
			</div>

			<input type="submit" value="Submit"/>
		
			<button type="button" onClick={this.handleClearForm} >Reset</button>
			<br/>
			</form>
			);
	}
}