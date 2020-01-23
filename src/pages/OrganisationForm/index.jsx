import React from 'react';
import ReactDOM from 'react-dom';
import './styleform.scss';

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
    }
	render()
	{
		return(
			<form class="form-style" onSubmit={this.handleSubmit}>
			<h1>Organisation Form</h1>
			<br/>
			<div class="inner-wrap">
			<label>
			Name of the Organisation
			<input  value="input" name="name" type="text" required="required" value={this.state.name} onChange={this.handleChange}/>
			</label>
			<br/>
			<label>
			Website
			<input value="input" name="website" type="url" required="required" placeholder="https://www.sample.com" value={this.state.website} onChange={this.handleChange}/>
			</label>
			</div>
			
			<br/>
			<div class="inner-wrap">
			<label>
			Address
			<textArea name="address" class="input1" rows="4" columns="40" required="required" value={this.state.address} onChange={this.handleChange} />
			</label>
			<br/>
			<label>
			Country
			<select class="dropdown" name="country" required="required" value={this.state.country} onChange={this.handleChange}>
            <option value="Afganistan">Afghanistan</option><br/>
   <option value="Albania">Albania</option><br/>
   <option value="Algeria">Algeria</option><br/>
   <option value="American Samoa">American Samoa</option><br/>
   <option value="Andorra">Andorra</option><br/>
   <option value="Angola">Angola</option><br/>
   <option value="Anguilla">Anguilla</option><br/>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option><br/>
   <option value="Argentina">Argentina</option><br/>
   <option value="Armenia">Armenia</option><br/>
   <option value="Aruba">Aruba</option><br/>
   <option value="Australia">Australia</option><br/>
   <option value="Austria">Austria</option><br/>
   <option value="Azerbaijan">Azerbaijan</option><br/>
   <option value="Bahamas">Bahamas</option><br/>
   <option value="Bahrain">Bahrain</option><br/>
   <option value="Bangladesh">Bangladesh</option><br/>
   <option value="Barbados">Barbados</option><br/>
   <option value="Belarus">Belarus</option><br/>
   <option value="Belgium">Belgium</option><br/>
   <option value="Belize">Belize</option><br/>
   <option value="Benin">Benin</option><br/>
   <option value="Bermuda">Bermuda</option><br/>
   <option value="Bhutan">Bhutan</option><br/>
   <option value="Bolivia">Bolivia</option><br/>
   <option value="Bonaire">Bonaire</option><br/>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option><br/>
   <option value="Botswana">Botswana</option><br/>
   <option value="Brazil">Brazil</option><br/>
   <option value="British Indian Ocean Ter">British Indian Ocean Ter</option><br/>
   <option value="Brunei">Brunei</option><br/>
   <option value="Bulgaria">Bulgaria</option><br/>
   <option value="Burkina Faso">Burkina Faso</option><br/>
   <option value="Burundi">Burundi</option><br/>
   <option value="Cambodia">Cambodia</option><br/>
   <option value="Cameroon">Cameroon</option><br/>
   <option value="Canada">Canada</option><br/>
   <option value="Canary Islands">Canary Islands</option><br/>
   <option value="Cape Verde">Cape Verde</option><br/>
   <option value="Cayman Islands">Cayman Islands</option><br/>
   <option value="Central African Republic">Central African Republic</option><br/>
   <option value="Chad">Chad</option><br/>
   <option value="Channel Islands">Channel Islands</option><br/>
   <option value="Chile">Chile</option><br/>
   <option value="China">China</option><br/>
   <option value="Christmas Island">Christmas Island</option><br/>
   <option value="Cocos Island">Cocos Island</option><br/>
   <option value="Colombia">Colombia</option><br/>
   <option value="Comoros">Comoros</option><br/>
   <option value="Congo">Congo</option><br/>
   <option value="Cook Islands">Cook Islands</option><br/>
   <option value="Costa Rica">Costa Rica</option><br/>
   <option value="Cote DIvoire">Cote DIvoire</option><br/>
   <option value="Croatia">Croatia</option><br/>
   <option value="Cuba">Cuba</option><br/>
   <option value="Curaco">Curacao</option><br/>
   <option value="Cyprus">Cyprus</option><br/>
   <option value="Czech Republic">Czech Republic</option><br/>
   <option value="Denmark">Denmark</option><br/>
   <option value="Djibouti">Djibouti</option><br/>
   <option value="Dominica">Dominica</option><br/>
   <option value="Dominican Republic">Dominican Republic</option><br/>
   <option value="East Timor">East Timor</option><br/>
   <option value="Ecuador">Ecuador</option><br/>
   <option value="Egypt">Egypt</option><br/>
   <option value="El Salvador">El Salvador</option><br/>
   <option value="Equatorial Guinea">Equatorial Guinea</option><br/>
   <option value="Eritrea">Eritrea</option><br/>
   <option value="Estonia">Estonia</option><br/>
   <option value="Ethiopia">Ethiopia</option><br/>
   <option value="Falkland Islands">Falkland Islands</option><br/>
   <option value="Faroe Islands">Faroe Islands</option><br/>
   <option value="Fiji">Fiji</option><br/>
   <option value="Finland">Finland</option><br/>
   <option value="France">France</option><br/>
   <option value="French Guiana">French Guiana</option><br/>
   <option value="French Polynesia">French Polynesia</option><br/>
   <option value="French Southern Ter">French Southern Ter</option><br/>
   <option value="Gabon">Gabon</option><br/>
   <option value="Gambia">Gambia</option><br/>
   <option value="Georgia">Georgia</option><br/>
   <option value="Germany">Germany</option><br/>
   <option value="Ghana">Ghana</option><br/>
   <option value="Gibraltar">Gibraltar</option><br/>
   <option value="Great Britain">Great Britain</option><br/>
   <option value="Greece">Greece</option><br/>
   <option value="Greenland">Greenland</option><br/>
   <option value="Grenada">Grenada</option><br/>
   <option value="Guadeloupe">Guadeloupe</option><br/>
   <option value="Guam">Guam</option><br/>
   <option value="Guatemala">Guatemala</option><br/>
   <option value="Guinea">Guinea</option><br/>
   <option value="Guyana">Guyana</option><br/>
   <option value="Haiti">Haiti</option><br/>
   <option value="Hawaii">Hawaii</option><br/>
   <option value="Honduras">Honduras</option><br/>
   <option value="Hong Kong">Hong Kong</option><br/>
   <option value="Hungary">Hungary</option><br/>
   <option value="Iceland">Iceland</option><br/>
   <option value="Indonesia">Indonesia</option><br/>
   <option value="India">India</option><br/>
   <option value="Iran">Iran</option><br/>
   <option value="Iraq">Iraq</option><br/>
   <option value="Ireland">Ireland</option><br/>
   <option value="Isle of Man">Isle of Man</option><br/>
   <option value="Israel">Israel</option><br/>
   <option value="Italy">Italy</option><br/>
   <option value="Jamaica">Jamaica</option><br/>
   <option value="Japan">Japan</option><br/>
   <option value="Jordan">Jordan</option><br/>
   <option value="Kazakhstan">Kazakhstan</option><br/>
   <option value="Kenya">Kenya</option><br/>
   <option value="Kiribati">Kiribati</option><br/>
   <option value="Korea North">Korea North</option><br/>
   <option value="Korea Sout">Korea South</option><br/>
   <option value="Kuwait">Kuwait</option><br/>
   <option value="Kyrgyzstan">Kyrgyzstan</option><br/>
   <option value="Laos">Laos</option><br/>
   <option value="Latvia">Latvia</option><br/>
   <option value="Lebanon">Lebanon</option><br/>
   <option value="Lesotho">Lesotho</option><br/>
   <option value="Liberia">Liberia</option><br/>
   <option value="Libya">Libya</option><br/>
   <option value="Liechtenstein">Liechtenstein</option><br/>
   <option value="Lithuania">Lithuania</option><br/>
   <option value="Luxembourg">Luxembourg</option><br/>
   <option value="Macau">Macau</option><br/>
   <option value="Macedonia">Macedonia</option><br/>
   <option value="Madagascar">Madagascar</option><br/>
   <option value="Malaysia">Malaysia</option><br/>
   <option value="Malawi">Malawi</option><br/>
   <option value="Maldives">Maldives</option><br/>
   <option value="Mali">Mali</option><br/>
   <option value="Malta">Malta</option><br/>
   <option value="Marshall Islands">Marshall Islands</option><br/>
   <option value="Martinique">Martinique</option><br/>
   <option value="Mauritania">Mauritania</option><br/>
   <option value="Mauritius">Mauritius</option><br/>
   <option value="Mayotte">Mayotte</option><br/>
   <option value="Mexico">Mexico</option><br/>
   <option value="Midway Islands">Midway Islands</option><br/>
   <option value="Moldova">Moldova</option><br/>
   <option value="Monaco">Monaco</option><br/>
   <option value="Mongolia">Mongolia</option><br/>
   <option value="Montserrat">Montserrat</option><br/>
   <option value="Morocco">Morocco</option><br/>
   <option value="Mozambique">Mozambique</option><br/>
   <option value="Myanmar">Myanmar</option><br/>
   <option value="Nambia">Nambia</option><br/>
   <option value="Nauru">Nauru</option><br/>
   <option value="Nepal">Nepal</option><br/>
   <option value="Netherland Antilles">Netherland Antilles</option><br/>
   <option value="Netherlands">Netherlands Holland, Europe</option><br/>
   <option value="Nevis">Nevis</option><br/>
   <option value="New Caledonia">New Caledonia</option><br/>
   <option value="New Zealand">New Zealand</option><br/>
   <option value="Nicaragua">Nicaragua</option><br/>
   <option value="Niger">Niger</option><br/>
   <option value="Nigeria">Nigeria</option><br/>
   <option value="Niue">Niue</option><br/>
   <option value="Norfolk Island">Norfolk Island</option><br/>
   <option value="Norway">Norway</option><br/>
   <option value="Oman">Oman</option><br/>
   <option value="Pakistan">Pakistan</option><br/>
   <option value="Palau Island">Palau Island</option><br/>
   <option value="Palestine">Palestine</option><br/>
   <option value="Panama">Panama</option><br/>
   <option value="Papua New Guinea">Papua New Guinea</option><br/>
   <option value="Paraguay">Paraguay</option><br/>
   <option value="Peru">Peru</option><br/>
   <option value="Phillipines">Philippines</option><br/>
   <option value="Pitcairn Island">Pitcairn Island</option><br/>
   <option value="Poland">Poland</option><br/>
   <option value="Portugal">Portugal</option><br/>
   <option value="Puerto Rico">Puerto Rico</option><br/>
   <option value="Qatar">Qatar</option><br/>
   <option value="Republic of Montenegro">Republic of Montenegro</option><br/>
   <option value="Republic of Serbia">Republic of Serbia</option><br/>
   <option value="Reunion">Reunion</option><br/>
   <option value="Romania">Romania</option><br/>
   <option value="Russia">Russia</option><br/>
   <option value="Rwanda">Rwanda</option><br/>
   <option value="St Barthelemy">St Barthelemy</option><br/>
   <option value="St Eustatius">St Eustatius</option><br/>
   <option value="St Helena">St Helena</option><br/>
   <option value="St Kitts-Nevis">St Kitts-Nevis</option><br/>
   <option value="St Lucia">St Lucia</option><br/>
   <option value="St Maarten">St Maarten</option><br/>
   <option value="St Pierre & Miquelon">St Pierre & Miquelon</option><br/>
   <option value="St Vincent & Grenadines">St Vincent & Grenadines</option><br/>
   <option value="Saipan">Saipan</option><br/>
   <option value="Samoa">Samoa</option><br/>
   <option value="Samoa American">Samoa American</option><br/>
   <option value="San Marino">San Marino</option><br/>
   <option value="Sao Tome & Principe">Sao Tome & Principe</option><br/>
   <option value="Saudi Arabia">Saudi Arabia</option><br/>
   <option value="Senegal">Senegal</option><br/>
   <option value="Seychelles">Seychelles</option><br/>
   <option value="Sierra Leone">Sierra Leone</option><br/>
   <option value="Singapore">Singapore</option><br/>
   <option value="Slovakia">Slovakia</option><br/>
   <option value="Slovenia">Slovenia</option><br/>
   <option value="Solomon Islands">Solomon Islands</option><br/>
   <option value="Somalia">Somalia</option><br/>
   <option value="South Africa">South Africa</option><br/>
   <option value="Spain">Spain</option><br/>
   <option value="Sri Lanka">Sri Lanka</option><br/>
   <option value="Sudan">Sudan</option><br/>
   <option value="Suriname">Suriname</option><br/>
   <option value="Swaziland">Swaziland</option><br/>
   <option value="Sweden">Sweden</option><br/>
   <option value="Switzerland">Switzerland</option><br/>
   <option value="Syria">Syria</option><br/>
   <option value="Tahiti">Tahiti</option><br/>
   <option value="Taiwan">Taiwan</option><br/>
   <option value="Tajikistan">Tajikistan</option><br/>
   <option value="Tanzania">Tanzania</option><br/>
   <option value="Thailand">Thailand</option><br/>
   <option value="Togo">Togo</option><br/>
   <option value="Tokelau">Tokelau</option><br/>
   <option value="Tonga">Tonga</option><br/>
   <option value="Trinidad & Tobago">Trinidad & Tobago</option><br/>
   <option value="Tunisia">Tunisia</option><br/>
   <option value="Turkey">Turkey</option><br/>
   <option value="Turkmenistan">Turkmenistan</option><br/>
   <option value="Turks & Caicos Is">Turks & Caicos Is</option><br/>
   <option value="Tuvalu">Tuvalu</option><br/>
   <option value="Uganda">Uganda</option><br/>
   <option value="United Kingdom">United Kingdom</option><br/>
   <option value="Ukraine">Ukraine</option><br/>
   <option value="United Arab Erimates">United Arab Emirates</option><br/>
   <option value="United States of America">United States of America</option><br/>
   <option value="Uraguay">Uruguay</option><br/>
   <option value="Uzbekistan">Uzbekistan</option><br/>
   <option value="Vanuatu">Vanuatu</option><br/>
   <option value="Vatican City State">Vatican City State</option><br/>
   <option value="Venezuela">Venezuela</option><br/>
   <option value="Vietnam">Vietnam</option><br/>
   <option value="Virgin Islands (Brit)">Virgin Islands Brit</option><br/>
   <option value="Virgin Islands (USA)">Virgin Islands USA</option><br/>
   <option value="Wake Island">Wake Island</option><br/>
   <option value="Wallis & Futana Is">Wallis & Futana Is</option><br/>
   <option value="Yemen">Yemen</option><br/>
   <option value="Zaire">Zaire</option><br/>
   <option value="Zambia">Zambia</option><br/>
   <option value="Zimbabwe">Zimbabwe</option><br/>
</select>

        	
        	</label>
    <br/>
			</div>
			<br/>
			
			<div class="inner-wrap">
			<label>
			Contact Person
			<select class="dropdown" name="contactperson1" required="required" value={this.state.contactperson1} onChange={this.handleChange}>
            <option value="Mr.">Mr</option><br/>
            <option value="Mrs.">Mrs</option><br/>
            <option value="Miss">Miss</option><br/>
        	</select>
        	
        	<input value="input" name="contactperson2" type="text" required="required" value={this.state.contactperson2} onChange={this.handleChange}/>
			
			</label>
			<br/>
			<label>
			Contact Email
			<input value="input" name="contactemail" type="email" required="required" value={this.state.contactemail} onChange={this.handleChange}/>
			</label>
			<br/>
			<label>
			Contact 
			<input value="input" name="contactnumber" type="text" required="required" value={this.state.contactnumber} onChange={this.handleChange}/>
			</label>
			<br/>
		
			
			</div>
			<br/>
			<div class="inner-wrap">
			<label>
			Tell us about your Organisation
			<textArea class="input1" name="info" rows="4" columns="40" required="required" value={this.state.info} onChange={this.handleChange} />
			</label>
			<br/>
        	<label>
			Initiatives/Projects taken earlier
			<textArea name="projects" class="input1" rows="4" columns="40" required="required" value={this.state.projects} onChange={this.handleChange} />
			</label>
			<br/>
			<label>
			Photo Attachment
			<input type="file" onChange={this.fileSelectedHandler}/>
			</label>
			<br/>
			<label>
			Views on gender equality
			<textArea name="gender" class="input1" rows="4" columns="40" required="required" value={this.state.gender} onChange={this.handleChange} />
			</label>
			<br/>
			</div>

			<input type="submit" value="Submit"/>
		
			<button type="button" onClick={this.onResetClick} >Reset</button>
			<br/>
			</form>
			);
	
}}