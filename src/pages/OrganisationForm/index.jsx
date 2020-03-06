import React from 'react';
import './styleform.scss';
import CountrySelector from '../../components/CountrySelector';
//import TextEditor from '../../components/TextEditor';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../../components/Input';
import { Redirect } from 'react-router-dom';
import Container from '../../components/Container';


export default class OrganisationForm extends React.Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props);
		this.state = {
			form: {

			},
			submitted: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleUpload = this.handleUpload.bind(this);
		this.baseState = this.state;

	}
	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		})
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
	handleSubmit(event) {
		const {
			firestore
		} = this.context;
		event.preventDefault();
		console.log(this.state.form)
		firestore.collection("organisation").add(
			this.state.form
		).then(
			() => { 
				this.setState({submitted: true})
			}
		)
	};


	// handleUpload = () => {
	// 	const { file } = this.state;
	// 	const uploadTask = storage.ref('files/${file.name}').put(file);
	// 	uploadTask.on('state_changed', (snapshot) => { }, (error) => { console.Consolelog(error); }, () => {
	// 		storage.ref('files').child(file.name).getDownloadURL().then(url => {
	// 			console.log(url);
	// 		})
	// 	});
	// }
	render() {
		if(this.state.submitted) return (
			<Redirect to="Register/Registered" />
		)
		return (
			<Container>
			<form className="form-style" onSubmit={this.handleSubmit} >
				<h1> Organisation Form </h1> <br />
				<div className="inner-wrap" >
					<label >
						Name of the Organisation
						<input type="text" name={'name'} onChange={this.handleChange} required="required" />
					</label><br />
					<label>
						Website
						<input type="url" name={'website'} placeholder="https://www.sample.com" onChange={this.handleChange} required="required" />
					</label>
				</div>
				<br />
				<div className="inner-wrap" >
					<label >
						Address
						<textArea name={'address'} onChange={this.handleChange} required="required" />
					</label><br />
					<label >
						Country
						<CountrySelector name={'country'} onChange={this.handleChange} required="required" />
					</label><br />
				</div>
				<br />
				<div className="inner-wrap" name={'contactperson1'} >
					<label>
						Contact Person
						<select className="dropdown" name="contactperson1" required="required" value={this.state.contactperson1} onChange={this.handleChange} >
							<option value="Mr." > Mr </option><br />
							<option value="Mrs." > Mrs </option><br />
							<option value="Miss" > Miss </option><br />
						</select>

						<input type="text" name={'contactperson2'} onChange={this.handleChange} required="required" />
					</label>
					<br />
					<label>
						Contact Email
						<input type="email" name={'contactemail'} onChange={this.handleChange} required="required" />
					</label><br />
					<label >
						Contact Number <input type="text" name={'contactnumber'} onChange={this.handleChange} required="required" />
					</label> <br />
				</div><br />
				<div className="inner-wrap" >
					<label>
						<div >
							Description.Tell us about your Organisation    
							<div class="tooltip"> 𝒊 
								<span class="tooltiptext">The principles of your organisation and mention how it can contribute to our family.</span>
						  	</div>   		    
							<textArea name={'description'} onChange={this.handleChange} required="required" />
					 	</div>
					</label> <br />

					<label>
						Initiatives / Projects taken earlier &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						<div class="tooltip"> 𝒊 
							<span class="tooltiptext">Mention major and minor projects initiated by your organisation.</span>
						</div>   		    
						 <textArea name={'projects'} onChange={this.handleChange} required="required" />
					</label> <br />

					<label >
						Views on gender equality		    
						<textArea name={'gender'} onChange={this.handleChange} required="required" />
					</label > <br />
				</div>
				<Input label="SUBMIT" type="submit" onClick={this.handleSubmit}/>
				{/*<input type="submit" value="Submit" onClick={this.handleUpload} />*/}

			</form>
			</Container>
		);
	}
}