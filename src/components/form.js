import React from 'react';
import ReactDOM from 'react-dom';
import './formstyle.css';
import { storage } from '../../contexts/FirebaseContext';
import { FirebaseContext } from '../../contexts/FirebaseContext';


export default class OrganisationForm extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			fname:'',
         lname:'',
			website:'',
         gender:'',
         jbin'',
         date'',
         nationality'',
         rname'',
			info:'',
			address:'',
         education'',
         skills'',
         inter'',
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
			fname:'',
         lname:'',
			website:'',
         gender:'',
         nationality'',
         date'',
         inter'',
         jbin'',
			info:'',
         rname'',
			address:'',
         education'',
			contactperson1:'',
         skills'',
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
			<h1>Resumé</h1>
			<br/>
			<div class="inner-wrap">
			<label>
			First Name 
			<input  value="input" name="name" type="text" required="required" value={this.state.fname} onChange={this.handleChange}/>
			</label>
			<br/>
         <label>
         Last Name 
         <input  value="input" name="lname" type="text" required="required" value={this.state.lname} onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Date 
         <input  value="input" name="dob" type="date" required="required" value={this.state.date} onChange={this.handleChange}/>
         </label>
         <br/>
			<label>
			Gender
			M<input value="input" name="gender" type="radio" id="radios-0" value="1"  onChange={this.handleChange}/>
         F<input value="input" name="gender" type="radio" id="radios-1" value="2"   onChange={this.handleChange}/>
			Others<input value="input" name="gender" type="radio" id="radios-2" value="3"  onChange={this.handleChange}/>
         </label><br/>
			<label>
         Nationality 
         <input  value="input" name="nationality" type="text" required="required" value={this.state.nationality} onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Father's/Spouse's name 
         <input  value="input" name="rname" type="text" required="required" value={this.state.rname} onChange={this.handleChange}/>
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
			Education
			<select class="dropdown" name="education" required="required" value={this.state.education} onChange={this.handleChange}>
            <option value="1">Secondary School</option>
      <option value="2">Higher Secondary School</option>
      <option value="3">Associate Degree in Administration of Justice</option>
      <option value="4">Associate Degree in Advertising</option>
      <option value="5">Associate Degree in Agribusiness</option>
      <option value="6">Associate Degree in Animal Management</option>
      <option value="7">Associate Degree in Architectural Building Engineering Technology</option>
      <option value="8">Associate Degree in Architecture and Career Options</option>
      <option value="9">Associate Degree in Art</option>
      <option value="10">Associate Degree in Automotive Maintenance Technology</option>
      <option value="11">Associate Degree in Aviation Mechanics</option>
      <option value="12">Associate Degree in Behavioral Science</option>
      <option value="13">Associate Degree in Boat Mechanics</option>
      <option value="14">Associate Degree in Boat Repair and Maintenance</option>
      <option value="15">Associate Degree in Cabinet Design Technology</option>
      <option value="16">Associate Degree in Child Development: Program Summary</option>
      <option value="17">Associate Degree in Christian Ministry</option>
      <option value="18">Associate Degree in Cosmetology Business</option>
      <option value="19">Associate Degree in Digital Media</option>
      <option value="20">Associate Degree in Early Childhood Special Education</option>
      <option value="21">Associate Degree in Elementary Education</option>
      <option value="22">Associate Degree in English</option>
      <option value="23">Associate Degree in Environmental Science</option>
      <option value="24">Associate Degree in Environmental Studies</option>
      <option value="25">Associate Degree in General Psychology</option>
      <option value="26">Associate Degree in History and Information</option>
      <option value="27">Associate Degree in Interdisciplinary Studies</option>
      <option value="28">Associate Degree in International Relations</option>
      <option value="29">Associate Degree in Landscape Architecture</option>
      <option value="30">Associate Degree in Landscaping Design</option>
      <option value="31">Associate Degree in Library Science</option>
      <option value="32">Associate Degree in Music</option>
      <option value="33">Associate Degree in Wildlife Management</option>
      <option value="34">Associate Degree in Education</option>
      <option value="35">Associate of Applied Science (AAS) in Accelerated Culinary Arts</option>
      <option value="36">Associate of Applied Science (AAS) in Accounting Specialist</option>
      <option value="37">Associate of Applied Science (AAS) in Administrative Support</option>
      <option value="38">Associate of Applied Science (AAS) in Baking and Pastry</option>
      <option value="39">Associate of Applied Science (AAS) in Business Administration</option>
      <option value="40">Associate of Applied Science (AAS) in Business Administration - Finance</option>
      <option value="41">Associate of Applied Science (AAS) in Business Information Systems</option>
      <option value="42">Associate of Applied Science (AAS) in Civil Justice - Law Enforcement</option>
      <option value="43">Associate of Applied Science (AAS) in Clinical Medical Assisting</option>
      <option value="44">Associate of Applied Science (AAS) in Computer Applications</option>
      <option value="45">Associate of Applied Science (AAS) in Computer Electronics</option>
      <option value="46">Associate of Applied Science (AAS) in Computer Game Design</option>
      <option value="47">Associate of Applied Science (AAS) in Computer Information Systems</option>
      <option value="48">Associate of Applied Science (AAS) in Culinary Arts</option>
      <option value="49">Associate of Applied Science (AAS) in Digital Media Communications</option>
      <option value="50">Associate of Applied Science (AAS) in Digital Photography</option>
      <option value="51">Associate of Applied Science (AAS) in Electronic Engineering</option>
      <option value="52">Associate of Applied Science (AAS) in Emergency Medical Services</option>
      <option value="53">Associate of Applied Science (AAS) in Health Care Management</option>
      <option value="54">Associate of Applied Science (AAS) in Health Information Management</option>
      <option value="55">Associate of Applied Science (AAS) in Healthcare Administration</option>
      <option value="56">Associate of Applied Science (AAS) in Legal Office E-ministration</option>
      <option value="57">Associate of Applied Science (AAS) in Telecommunications Technology</option>
      <option value="58">Associate of Applied Science (AAS) in Television Production</option>
      <option value="59">Associate of Applied Science (AAS) in Visual Communications</option>
      <option value="60">Associate of Arts (AA) in Computer Information Systems</option>
      <option value="61">Associate of Arts (AA) in Internetworking Technology</option>
      <option value="62">Associate of Arts (AA) in Psychology</option>
      <option value="63">Associate of Arts (AA) in Interior Architecture and Design</option>
      <option value="64">Associate of Biotechnology</option>
      <option value="65">Associate of Business Science (ABS) in Individualized Studies</option>
      <option value="66">Associate of Early Childhood Education (AECE)</option>
      <option value="67">Associate of Occupational Studies (AOS) in Legal Office Administration</option>
      <option value="68">Associate of Science (AS) in Computer Information Science</option>
      <option value="69">Associate of Science (AS) in Computer Science</option>
      <option value="70">Associate of Science (AS) in Corrections, Probation, &amp; Parole</option>
      <option value="71">Associate of Science (AS) in Electronics Engineering Technology</option>
      <option value="72">Associate of Science (AS) in Interactive &amp; Graphic Art</option>
      <option value="73">Associate of Science (AS) in Industrial Maintenance Technology</option>
      <option value="74">Associate of Arts and science</option>
      <option value="75">Bachelor degrees</option>
      <option value="76">Bachelor of Science in Genetic Engineering and Biotechnology</option>
      <option value="77">Bachelor of Architecture</option>
      <option value="78">Bachelor of Biomedical Science</option>
      <option value="79">Bachelor of Business Administration</option>
      <option value="80">Bachelor of Clinical Science</option>
      <option value="81">Bachelor of Commerce</option>
      <option value="82">Bachelor of Computer Applications</option>
      <option value="83">Bachelor of Community Health</option>
      <option value="84">Bachelor of Computer Information Systems</option>
      <option value="85">Bachelor of Science in Construction Technology</option>
      <option value="86">Bachelor of Criminal Justice</option>
      <option value="87">Bachelor of Divinity</option>
      <option value="88">Bachelor of Economics</option>
      <option value="89">Bachelor of Education</option>
      <option value="90">Bachelor of Engineering</option>
      <option value="91">Bachelor of Fine Arts</option>
      <option value="92">Bachelor of Letters</option>
      <option value="93">Bachelor of Information Systems</option>
      <option value="94">Bachelor of Management</option>
      <option value="95">Bachelor of Music</option>
      <option value="96">Bachelor of Pharmacy</option>
      <option value="97">Bachelor of Philosophy</option>
      <option value="98">Bachelor of Social Work</option>
      <option value="99">Bachelor of Technology</option>
      <option value="100">Bachelor of Accountancy</option>
      <option value="101">Bachelor of Arts in American Studies</option>
      <option value="102">Bachelor of Arts in American Indian Studies</option>
      <option value="103">Bachelor of Arts in Applied Psychology</option>
      <option value="104">Bachelor of Arts in Biology</option>
      <option value="105">Bachelor of Arts in Anthropology</option>
      <option value="106">Bachelor of Arts in Child Advocacy</option>
      <option value="107">Bachelor of Arts in Clinical Psychology</option>
      <option value="108">Bachelor of Arts in Forensic Psychology</option>
      <option value="109">Bachelor of Arts in Organizational Psychology</option>
      <option value="110">Bachelor of Science in Aerospace Engineering</option>
      <option value="111">Bachelor of Science in Actuarial</option>
      <option value="112">Bachelor of Science in Agriculture</option>
      <option value="113">Bachelor of Science in Architecture</option>
      <option value="114">Bachelor of Science in Architectural Engineering</option>
      <option value="115">Bachelor of Science in Athletic Training</option>
      <option value="116">Bachelor of Science in Biology</option>
      <option value="117">Bachelor of Science in Biomedical Engineering</option>
      <option value="118">Bachelor of Science in Bible</option>
      <option value="119">Bachelor of Science in Business Administration</option>
      <option value="120">Bachelor of Science in Business and Technology</option>
      <option value="121">Bachelor of Science in Chemical Engineering</option>
      <option value="122">Bachelor of Science in Chemistry</option>
      <option value="123">Bachelor of Science in Civil Engineering</option>
      <option value="124">Bachelor of Science in Clinical Laboratory Science</option>
      <option value="125">Bachelor of Science in Cognitive Science</option>
      <option value="126">Bachelor of Science in Computer Engineering</option>
      <option value="127">Bachelor of Science in Computer Science</option>
      <option value="128">Bachelor of Science in Construction Engineering</option>
      <option value="129">Bachelor of Science in Construction Management</option>
      <option value="130">Bachelor of Science in Criminal Justice</option>
      <option value="131">Bachelor of Science in Criminology</option>
      <option value="132">Bachelor of Science in Diagnostic Radiography</option>
      <option value="133">Bachelor of Science in Education</option>
      <option value="134">Bachelor of Science in Electrical Engineering</option>
      <option value="135">Bachelor of Science in Engineering Physics</option>
      <option value="136">Bachelor of Science in Engineering Science</option>
      <option value="137">Bachelor of Science in Engineering Technology</option>
      <option value="138">Bachelor of Science in English Literature</option>
      <option value="139">Bachelor of Science in Environmental Engineering</option>
      <option value="140">Bachelor of Science in Environmental Science</option>
      <option value="141">Bachelor of Science in Environmental Studies</option>
      <option value="142">Bachelor of Science in Food Science</option>
      <option value="143">Bachelor of Science in Foreign Service</option>
      <option value="144">Bachelor of Science in Forensic Science</option>
      <option value="145">Bachelor of Science in Forestry</option>
      <option value="146">Bachelor of Science in History</option>
      <option value="147">Bachelor of Science in Hospitality Management</option>
      <option value="148">Bachelor of Science in Human Resources Management</option>
      <option value="149">Bachelor of Science in Industrial Engineering</option>
      <option value="150">Bachelor of Science in Information Technology</option>
      <option value="151">Bachelor of Science in Information Systems</option>
      <option value="152">Bachelor of Science in Integrated Science</option>
      <option value="153">Bachelor of Science in International Relations</option>
      <option value="154">Bachelor of Science in Journalism</option>
      <option value="155">Bachelor of Science in Legal Management</option>
      <option value="156">Bachelor of Science in Management</option>
      <option value="157">Bachelor of Science in Manufacturing Engineering</option>
      <option value="158">Bachelor of Science in Marketing</option>
      <option value="159">Bachelor of Science in Mathematics</option>
      <option value="160">Bachelor of Science in Mechanical Engineering</option>
      <option value="161">Bachelor of Science in Medical Technology</option>
      <option value="162">Bachelor of Science in Metallurgical Engineering</option>
      <option value="163">Bachelor of Science in Meteorology</option>
      <option value="164">Bachelor of Science in Microbiology</option>
      <option value="165">Bachelor of Science in Mining Engineering</option>
      <option value="166">Bachelor of Science in Molecular Biology</option>
      <option value="167">Bachelor of Science in Neuroscience</option>
      <option value="168">Bachelor of Science in Nursing</option>
      <option value="169">Bachelor of Science in Nutrition science</option>
      <option value="170">Bachelor of Science in Software Engineering</option>
      <option value="171">Bachelor of Science in Petroleum Engineering</option>
      <option value="172">Bachelor of Science in Podiatry</option>
      <option value="173">Bachelor of Science in Pharmacology</option>
      <option value="174">Bachelor of Science in Pharmacy</option>
      <option value="175">Bachelor of Science in Physical Therapy</option>
      <option value="176">Bachelor of Science in Physics</option>
      <option value="177">Bachelor of Science in Plant Science</option>
      <option value="178">Bachelor of Science in Politics</option>
      <option value="179">Bachelor of Science in Psychology</option>
      <option value="180">Bachelor of Science in Public Safety</option>
      <option value="181">Bachelor of Science in Physiology</option>
      <option value="182">Bachelor of Science in Quantity Surveying Engineering</option>
      <option value="183">Bachelor of Science in Radiologic Technology</option>
      <option value="184">Bachelor of Science in Real-Time Interactive Simulation</option>
      <option value="185">Bachelor of Science in Religion</option>
      <option value="186">Bachelor of Science in Respiratory Therapy</option>
      <option value="187">Bachelor of Science in Risk Management and Insurance</option>
      <option value="188">Bachelor of Science in Science Education</option>
      <option value="189">Bachelor of Science in Sports Management</option>
      <option value="190">Bachelor of Science in Systems Engineering</option>
      <option value="191">Bachelor of Music in Jazz Studies</option>
      <option value="192">Bachelor of Music in Composition</option>
      <option value="193">Bachelor of Music in Performance</option>
      <option value="194">Bachelor of Music in Theory</option>
      <option value="195">Bachelor of Music in Music Education</option>
      <option value="196">Bachelor of Science in Veterinary Technology</option>
      <option value="197">Master degrees</option>
      <option value="198">For a more comprehensive list, see List of master's degrees.</option>
      <option value="199">Master of Accountancy</option>
      <option value="200">Master of Accounting and Information Systems</option>
      <option value="201">Master of Advanced Study</option>
      <option value="202">Master of Applied Finance</option>
      <option value="203">Master of Applied Mathematical Sciences</option>
      <option value="204">Master of Applied Psychology</option>
      <option value="205">Master of Applied Science</option>
      <option value="206">Master of Architecture</option>
      <option value="207">Master of Arts</option>
      <option value="208">Master of Arts in Archives and Records Management</option>
      <option value="209">Master of Arts in Bioethics</option>
      <option value="210">Master of Arts in Liberal Studies</option>
      <option value="211">Master of Arts in Museum Studies</option>
      <option value="212">Master of Arts in Strategic Communication Management</option>
      <option value="213">Master of Arts in Teaching</option>
      <option value="214">Master of Athletic Training</option>
      <option value="215">Master of Bioethics</option>
      <option value="216">Master of Bioinformatics</option>
      <option value="217">Master of Biotechnology</option>
      <option value="218">Master of Business Administration</option>
      <option value="219">Master of Business Administration Management of Technology</option>
      <option value="220">Master of Business</option>
      <option value="221">Master of Business Economics</option>
      <option value="222">Master of Business Engineering</option>
      <option value="223">Master of Business Informatics</option>
      <option value="224">Master of Chemistry</option>
      <option value="225">Master of City Planning</option>
      <option value="226">Master of Commerce</option>
      <option value="227">Master of Community Health</option>
      <option value="228">Master of Computational Finance</option>
      <option value="229">Master of Computer Applications</option>
      <option value="230">Master of Computer Science</option>
      <option value="231">Master of Communication</option>
      <option value="232">Master of Counselling (or Counseling)</option>
      <option value="233">Master of Criminal Justice</option>
      <option value="234">Master in Creative Technologies</option>
      <option value="235">Master of Design</option>
      <option value="236">Master of Divinity</option>
      <option value="237">Master of Economics</option>
      <option value="238">Master of Education</option>
      <option value="239">Master of Educational Technology</option>
      <option value="240">Master of Engineering</option>
      <option value="241">Master of Engineering Management</option>
      <option value="242">Master of Enterprise</option>
      <option value="243">Master of European Law</option>
      <option value="244">Master of Finance</option>
      <option value="245">Master of Financial Economics</option>
      <option value="246">Master of Financial Engineering</option>
      <option value="247">Master of Financial Mathematics</option>
      <option value="248">Master of Fine Arts</option>
      <option value="249">Master of Geospatial Science &amp; Technology</option>
      <option value="250">Master of Health Administration</option>
      <option value="251">Master of Health Science</option>
      <option value="252">Master of Humanities</option>
      <option value="253">Master of Industrial and Labor Relations</option>
      <option value="254">Master of International Affairs</option>
      <option value="255">Master of International Business</option>
      <option value="256">Master of International Economics</option>
      <option value="257">Master of International Public Policy</option>
      <option value="258">Master of International Studies</option>
      <option value="259">Master of Information</option>
      <option value="260">Master of Information Management</option>
      <option value="261">Master of Information Systems</option>
      <option value="262">Master of Information System Management</option>
      <option value="263">Master of Islamic Studies</option>
      <option value="264">Master of IT</option>
      <option value="265">Master of Jurisprudence</option>
      <option value="266">Master of Laws</option>
      <option value="267">Master of Studies in Law</option>
      <option value="268">Master of Landscape Architecture</option>
      <option value="269">Master of Letters</option>
      <option value="270">Master of Liberal Arts</option>
      <option value="271">Master of Library and Information Science</option>
      <option value="272">Master of Management</option>
      <option value="273">Master of Mass Communication and Journalism</option>
      <option value="274">Master of Mathematical Finance</option>
      <option value="275">Master of Mathematics</option>
      <option value="276">Master of Mathematics and Computer Science</option>
      <option value="277">Master of Mathematics and Philosophy</option>
      <option value="278">Master of Medical Science</option>
      <option value="279">Master of Medicine</option>
      <option value="280">Master of Military Art and Science</option>
      <option value="281">Master of Music</option>
      <option value="282">Master of Network and Communications Management</option>
      <option value="283">Master of Occupational Therapy</option>
      <option value="284">Master of Pharmacy</option>
      <option value="285">Master of Philosophy</option>
      <option value="286">Master of Physician Assistant Studies</option>
      <option value="287">Master of Physics</option>
      <option value="288">Master of Political Science</option>
      <option value="289">Master of Professional Studies</option>
      <option value="290">Master of Psychology</option>
      <option value="291">Master of Public Administration</option>
      <option value="292">Master of Public Affairs</option>
      <option value="293">Master of Public Diplomacy</option>
      <option value="294">Master of Public Health</option>
      <option value="295">Master of Public Management</option>
      <option value="296">Master of Public Policy</option>
      <option value="297">Master of Public Relations</option>
      <option value="298">Master of Public Service</option>
      <option value="299">Master of Quantitative Finance</option>
      <option value="300">Master of Rabbinic Studies</option>
      <option value="301">Master of Real Estate Development</option>
      <option value="302">Master of Religious Education</option>
      <option value="303">Master of Research</option>
      <option value="304">Master of Sacred Music</option>
      <option value="305">Master of Sacred Theology</option>
      <option value="306">Master of Science</option>
      <option value="307">Master of Science in Applied Cognition and Neuroscience</option>
      <option value="308">Master of Science in Athletic Training</option>
      <option value="309">Master of Science in Bioinformatics</option>
      <option value="310">Master of Science in Business Analytics</option>
      <option value="311">Master of Science in Clinical Epidemiology</option>
      <option value="312">Master of Science in Computing Research</option>
      <option value="313">Master of Science in Cyber Security</option>
      <option value="314">Master of Science in Education</option>
      <option value="315">Master of Science in Engineering</option>
      <option value="316">Master of Science in Development Administration</option>
      <option value="317">Master of Science in Finance</option>
      <option value="318">Master of Science in Governance &amp; Organizational Sciences</option>
      <option value="319">Master of Science in Government Contracts</option>
      <option value="320">Master of Science in Health Informatics</option>
      <option value="321">Master of Science in Human Resource Development</option>
      <option value="322">Master of Science in Information Assurance</option>
      <option value="323">Master of Science in Information Systems</option>
      <option value="324">Master of Science in Information Technology</option>
      <option value="325">Master of Science in Leadership</option>
      <option value="326">Master of Science in Management</option>
      <option value="327">Master of Science in Nursing</option>
      <option value="328">Master of Science in Project Management</option>
      <option value="329">Master of Science in Quality Assurance</option>
      <option value="330">Master of Science in Risk Management</option>
      <option value="331">Master of Science in Supply Chain Management</option>
      <option value="332">Master of Science in Teaching</option>
      <option value="333">Master of Science in Taxation</option>
      <option value="334">Master of Social Science</option>
      <option value="335">Master of Social Work</option>
      <option value="336">Master of Statistics</option>
      <option value="337">Master of Strategic Studies</option>
      <option value="338">Master of Studies</option>
      <option value="339">Master of Surgery</option>
      <option value="340">Master of Theological Studies</option>
      <option value="341">Master of Technology</option>
      <option value="342">Master of Theology</option>
      <option value="343">Master of Urban Planning</option>
      <option value="344">Master of Veterinary Science</option>
      <option value="345">Doctoral degrees</option>
      <option value="346">Doctor of Arts</option>
      <option value="347">Doctor of Audiology</option>
      <option value="348">Doctor of Aviation (Av.D.)</option>
      <option value="349">Doctor of Business Administration</option>
      <option value="350">Doctor of Canon Law</option>
      <option value="351">Doctor of Chiropractic</option>
      <option value="352">Doctor of Commerce</option>
      <option value="353">Doctor of Community Health</option>
      <option value="354">Doctor of Dental Surgery</option>
      <option value="355">Doctor of Divinity</option>
      <option value="356">Doctor of Education</option>
      <option value="357">Doctor of Engineering</option>
      <option value="358">Doctor of Fine Arts</option>
      <option value="359">Doctor of Health Administration</option>
      <option value="360">Doctor of Health Science</option>
      <option value="361">Doctor of Juridical Science; Juris Doctor</option>
      <option value="362">Doctor of Law; Legum Doctor</option>
      <option value="363">Doctor of Liberal Studies</option>
      <option value="364">Doctor of Management</option>
      <option value="365">Doctor of Medicine (M.D.)</option>
      <option value="366">Doctor of Ministry</option>
      <option value="367">Doctor of Modern Languages</option>
      <option value="368">Doctor of Musical Arts</option>
      <option value="369">Doctor of Naturopathic Medicine</option>
      <option value="370">Doctor of Optometry</option>
      <option value="371">Doctor of Osteopathic Medicine</option>
      <option value="372">Doctor of Pharmacy</option>
      <option value="373">Doctor of Philosophy</option>
      <option value="374">Doctor of Public Administration</option>
      <option value="375">Doctor of Science</option>
      <option value="376">Doctor of Theology</option>
      <option value="377">Doctor of Veterinary Medicine</option>
      <option value="378">Doctor of Radio oncology</option>
</select>

        	
        	</label>
    <br/>
    <label>
         Skills
         <select class="dropdown" name="skills" required="required" value={this.state.skills} onChange={this.handleChange}>
            
      <option value="1">Effective communication</option>
      <option value="2">Teamwork</option>
      <option value="3">Responsibility</option>
      <option value="4">Creativity</option>
      <option value="5">Problem-solving</option>
      <option value="6">Leadership</option>
      <option value="7">Extroversion</option>
      <option value="8">People skills</option>
      <option value="9">Openness</option>
      <option value="10">Adaptability</option>
      <option value="11">Time management</option>
      <option value="12">Effective communication</option>
      <option value="13">Emotional intelligence</option>
      <option value="14">Conflict management</option>
      <option value="15">Teamwork skills</option>
      <option value="16">Stress management</option>
      <option value="17">Problem-solving</option>
      <option value="18">Productivity &amp; organization</option>
      <option value="19">Critical thinking</option>
      <option value="20">Attention to detail</option>
      <option value="21">Adaptability</option>
      <option value="22">Data analysis</option>
      <option value="23">Web analytics</option>
      <option value="24">SEO/SEM</option>
      <option value="25">HTML &amp; CSS</option>
      <option value="26">Wordpress</option>
      <option value="27">Email marketing</option>
      <option value="28">Web scraping</option>
      <option value="29">CRO and A/B Testing</option>
      <option value="30">Data visualization &amp; pattern-finding through critical thinking</option>
      <option value="31">Search Engine and Keyword Optimization</option>
      <option value="32">Project/campaign management</option>
      <option value="33">Social media and mobile marketing</option>
      <option value="34">Paid social media advertisements</option>
      <option value="35">B2B Marketing</option>
      <option value="36">The 4 P-s of Marketing</option>
      <option value="37">Consumer Behavior Drivers</option>
      <option value="38">Brand management</option>
      <option value="39">Creativity</option>
      <option value="40">Copywriting</option>
      <option value="41">Storytelling</option>
      <option value="42">Sales</option>
      <option value="43">CMS Tools</option>
      <option value="44">Six Sigma techniques</option>
      <option value="45">The McKinsey 7s Framework</option>
      <option value="46">Porter’s Five Forces</option>
      <option value="47">PESTEL</option>
      <option value="48">Emotional Intelligence</option>
      <option value="49">Dealing with work-related stress</option>
      <option value="50">Motivation</option>
      <option value="51">Task delegation</option>
      <option value="52">Technological savviness</option>
      <option value="53">People management</option>
      <option value="54">Business Development</option>
      <option value="55">Strategic Management</option>
      <option value="56">Negotiation</option>
      <option value="57">Planning</option>
      <option value="58">Proposal writing</option>
      <option value="59">Problem-solving</option>
      <option value="60">Innovation</option>
      <option value="61">Charisma</option>
      <option value="62">Customer Relationship Management (CRM)</option>
      <option value="63">Cold-calling</option>
      <option value="64">Negotiation</option>
      <option value="65">Public speaking</option>
      <option value="66">Closing</option>
      <option value="67">Lead generation</option>
      <option value="68">Buyer-Responsive selling</option>
      <option value="69">Buyer engagement</option>
      <option value="70">Product knowledge</option>
      <option value="71">Persuasion</option>
      <option value="72">Effective communication and sociability</option>
      <option value="73">Empathy</option>
      <option value="74">Social media/digital communication</option>
      <option value="75">Teamwork</option>
      <option value="76">Time management</option>
      <option value="77">Adobe Creative Suite: Illustrator, InDesign, Photoshop</option>
      <option value="78">Dreamweaver</option>
      <option value="79">Infographics</option>
      <option value="80">HTML &amp; CSS</option>
      <option value="81">Photo editing</option>
      <option value="82">Typography: spacing, line height, layout, choosing fonts</option>
      <option value="83">Storyboarding</option>
      <option value="84">Targeting and marketing through visual communications</option>
      <option value="85">Logo creation</option>
      <option value="86">Digital printing</option>
      <option value="87">Integration of visual communication in social media platforms</option>
      <option value="88">Creativity</option>
      <option value="89">Attention to detail &amp; aesthetics</option>
      <option value="90">Interactive media design</option>
      <option value="91">Color sense &amp; theory</option>
      <option value="92">Ad design</option>
      <option value="93">Active listening</option>
      <option value="94">Microsoft Office Pack: Word, Excel, Access, Publisher, Outlook, Powerpoint</option>
      <option value="95">Filing and paper management</option>
      <option value="96">Data entry</option>
      <option value="97">Bookkeeping through Excel or TurboTax</option>
      <option value="98">Research and data analysis</option>
      <option value="99">Basic knowledge of user interface communication</option>
      <option value="100">Technical writing</option>
      <option value="101">Cloud networking and file sharing</option>
      <option value="102">Microsoft Excel (Advanced)</option>
      <option value="103">Enterprise Resource Planning</option>
      <option value="104">Big Data Analysis &amp; SQL</option>
      <option value="105">Know Your Customers (KYC)</option>
      <option value="106">Cognos Analytics (IBM)</option>
      <option value="107">Visual Basic</option>
      <option value="108">Accounting Software</option>
      <option value="109">Revenue recognition</option>
      <option value="110">Anti Money Laundering</option>
      <option value="111">Clear communication</option>
      <option value="112">General business knowledge</option>
      <option value="113">Numerical competence</option>
      <option value="114">Accuracy</option>
      <option value="115">Attention to detailMicrosoft Excel (Advanced)</option>
      <option value="116">Enterprise Resource Planning</option>
      <option value="117">Big Data Analysis &amp; SQL</option>
      <option value="118">Know Your Customers (KYC)</option>
      <option value="119">Cognos Analytics (IBM)</option>
      <option value="120">Visual Basic</option>
      <option value="121">Accounting Software</option>
      <option value="122">Revenue recognition</option>
      <option value="123">Anti Money Laundering</option>
      <option value="124">Clear communication</option>
      <option value="125">General business knowledge</option>
      <option value="126">Numerical competence</option>
      <option value="127">Accuracy</option>
      <option value="128">Attention to detail</option>
      <option value="129">Updated curriculum knowledge</option>
      <option value="130">Research &amp; Data analysis</option>
      <option value="131">Communication</option>
      <option value="132">Educational platforms (software like Elearn)</option>
      <option value="133">Stress management</option>
      <option value="134">Technological &amp; digital literacy</option>
      <option value="135">Patience</option>
      <option value="136">Critical thinking</option>
      <option value="137">Enthusiasm</option>
      <option value="138">Motivation</option>
      <option value="139">HTML/CSS</option>
      <option value="140">CSS preprocessors</option>
      <option value="141">Javascript</option>
      <option value="142">Wordpress</option>
      <option value="143">Graphic User Interfaces (GUI)</option>
      <option value="144">Git/Version control (Github, gitlab)</option>
      <option value="145">Search Engine Optimization (SEO)</option>
      <option value="146">Application Programming Interface (API)</option>
      <option value="147">Adobe Photoshop, InDesign</option>
      <option value="148">Content Management Systems (CMS)</option>
      <option value="149">Testing/Debugging</option>
      <option value="150">Responsive design principles</option>
      <option value="151">SQL (a must) and Hive (optional)</option>
      <option value="152">Programming language (R, Python, Scala, Matlab)</option>
      <option value="153">STATA, SPSS, SAS</option>
      <option value="154">Data Mapping</option>
      <option value="155">Entity Relationship Diagrams</option>
      <option value="156">Wireframes</option>
      <option value="157">Big Data tools</option>
      <option value="158">Microsoft Visio</option>
      <option value="159">Agile Business Analysis</option>
      <option value="160">Machine learning</option>
      <option value="161">System Context Diagrams</option>
      <option value="162">Business Process Modeling</option>
      <option value="163">Technical and non-technical communication</option>
      <option value="164">Mathematics</option>
      <option value="165">CPR</option>
      <option value="166">Patient care and assistance</option>
      <option value="167">Paperwork/record-keeping abilities</option>
      <option value="168">Compassion</option>
      <option value="169">Advanced Cardiac Life Support (ACLS)</option>
      <option value="170">Telemetry</option>
      <option value="171">Attention to detail</option>
      <option value="172">Physical endurance</option>
      <option value="173">Acute care</option>
      <option value="174">Infection control</option>
      <option value="175">Surgery preparation</option>
</select>

         
         </label>
    <br/>
    <label>
         Internships/Past Experience
         <textArea class="input1" name="inter" rows="4" columns="40"  value={this.state.inter} onChange={this.handleChange} />
         </label>
         <br/>
			</div>
			<br/>
			
			<div class="inner-wrap">
			<label>
         Jobs Interested in 
         <select class="dropdown" name="jbin" required="required" value={this.state.jbin} onChange={this.handleChange}>
            
      <option value="1">Account Collectors</option>
      <option value="2">Accountants</option>
      <option value="3">Accounting Clerks</option>
      <option value="4">Actors</option>
      <option value="5">Actuaries</option>
      <option value="6">Administrative Assistants</option>
      <option value="7">Administrative Services Managers</option>
      <option value="8">Adult Literacy Teachers</option>
      <option value="9">Advertising Managers</option>
      <option value="10">Advertising Sales Agents</option>
      <option value="11">Aerospace Engineering and Operations Technicians</option>
      <option value="12">Aerospace Engineers</option>
      <option value="13">Agents and Business Managers of Artists, Performers, and Athletes</option>
      <option value="14">Agricultural Engineers</option>
      <option value="15">Agricultural Inspectors</option>
      <option value="16">Agricultural Managers</option>
      <option value="17">Agricultural Scientists</option>
      <option value="18">Agricultural Technicians</option>
      <option value="19">Agricultural Workers</option>
      <option value="20">Air Conditioning and Heating Mechanics and Installers</option>
      <option value="21">Air Traffic Controllers</option>
      <option value="22">Aircraft Cargo Handling Supervisors</option>
      <option value="23">Aircraft Equipment Mechanics and Technicians</option>
      <option value="24">Airfield Operations Specialists</option>
      <option value="25">Airline and Commercial Pilots</option>
      <option value="26">Ambulance Dispatchers</option>
      <option value="27">Ambulance Drivers and Attendants (Except Emergency Medical Technicians)</option>
      <option value="28">Amusement and Recreation Attendants</option>
      <option value="29">Animal Care and Service Workers</option>
      <option value="30">Animal Control Workers</option>
      <option value="31">Announcers</option>
      <option value="32">Anthropologists</option>
      <option value="33">Appraisers and Assessors of Real Estate</option>
      <option value="34">Arbitrators</option>
      <option value="35">Archeologists</option>
      <option value="36">Architects</option>
      <option value="37">Architectural Managers</option>
      <option value="38">Archivists</option>
      <option value="39">Art Directors</option>
      <option value="40">Assemblers</option>
      <option value="41">Astronomers</option>
      <option value="42">Athletes and Sports Competitors</option>
      <option value="43">Athletic Trainers</option>
      <option value="44">Atmospheric Scientists</option>
      <option value="45">Attorneys</option>
      <option value="46">Avionics Equipment Mechanics and Technicians</option>
      <option value="47">Audio and Video Technicians</option>
      <option value="48">Audiologists</option>
      <option value="49">Auditing Clerks</option>
      <option value="50">Auditors</option>
      <option value="51">Authors</option>
      <option value="52">Automated Teller Machine (ATM) Repairers</option>
      <option value="53">Automotive and Watercraft Service Attendants</option>
      <option value="54">Automotive Body and Glass Repairers</option>
      <option value="55">Automotive Service Technicians and Mechanics</option>
      <option value="56">All "B" Careers</option>
      <option value="57">Baggage Porters and Bellhops</option>
      <option value="58">Bailiffs</option>
      <option value="59">Bakers</option>
      <option value="60">Barbers</option>
      <option value="61">Bartenders</option>
      <option value="62">Behavioral Disorder Counselors</option>
      <option value="63">Benefits Managers</option>
      <option value="64">Bicycle Repairers</option>
      <option value="65">Bill Collectors</option>
      <option value="66">Biochemists and Biophysicists</option>
      <option value="67">Biological Scientists (all other)</option>
      <option value="68">Biological Technicians</option>
      <option value="69">Biomedical Engineers</option>
      <option value="70">Blockmasons</option>
      <option value="71">Boiler Operators</option>
      <option value="72">Boilermakers</option>
      <option value="73">Bookkeeping Clerks</option>
      <option value="74">Brazers</option>
      <option value="75">Brickmasons</option>
      <option value="76">Bridge and Lock Tenders</option>
      <option value="77">Broadcast Engineering Technicians</option>
      <option value="78">Budget Analysts</option>
      <option value="79">Building Cleaners</option>
      <option value="80">Building Cleaning Workers (all other)</option>
      <option value="81">Building Inspectors</option>
      <option value="82">Bus Drivers</option>
      <option value="83">Business Operations Specialists (all other)</option>
      <option value="84">Butchers</option>
      <option value="85">Buyers</option>
      <option value="86">All "C" Careers</option>
      <option value="87">Camera and Photographic Equipment Repairers</option>
      <option value="88">Camera Operators</option>
      <option value="89">Cardiovascular Technologists and Technicians</option>
      <option value="90">Career Counselors</option>
      <option value="91">Career and Technical Education Teachers</option>
      <option value="92">Cargo and Freight Agents</option>
      <option value="93">Carpenters</option>
      <option value="94">Carpet Installers</option>
      <option value="95">Cartographers</option>
      <option value="96">Cashiers</option>
      <option value="97">Ceiling Tile Installers</option>
      <option value="98">Cement Masons</option>
      <option value="99">Chauffeurs</option>
      <option value="100">Chefs</option>
      <option value="101">Chemical Engineers</option>
      <option value="102">Chemical Plant and System Operators</option>
      <option value="103">Chemical Technicians</option>
      <option value="104">Chemists</option>
      <option value="105">Childcare Center Directors</option>
      <option value="106">Childcare Workers</option>
      <option value="107">Chiropractors</option>
      <option value="108">Choreographers</option>
      <option value="109">Civil Engineering Technicians</option>
      <option value="110">Civil Engineers</option>
      <option value="111">Claims Adjusters, Appraisers, Examiners, and Investigators</option>
      <option value="112">Clergy</option>
      <option value="113">Clerks</option>
      <option value="114">Bookkeeping, Accounting, and Auditing Clerks</option>
      <option value="115">Counter and Rental Clerks</option>
      <option value="116">Financial Clerks</option>
      <option value="117">General Office Clerks</option>
      <option value="118">Information Clerks</option>
      <option value="119">Mail Clerks and Mail Machine Operators (Except Postal Service)</option>
      <option value="120">Material Recording Clerks</option>
      <option value="121">Clinical Laboratory Technologists and Technicians</option>
      <option value="122">Coaches and Scouts</option>
      <option value="123">Coating Workers</option>
      <option value="124">Commercial Designers</option>
      <option value="125">Commercial Divers</option>
      <option value="126">Commodities Sales Agents</option>
      <option value="127">Communications Equipment Operators (all other)</option>
      <option value="128">Community and Social Service Specialists (all other)</option>
      <option value="129">Community Association Managers</option>
      <option value="130">Community Health Workers</option>
      <option value="131">Community Service Managers</option>
      <option value="132">Compensation, Benefits, and Job Analysis Specialists</option>
      <option value="133">Compensation and Benefits Managers</option>
      <option value="134">Compliance Officers</option>
      <option value="135">Composers - Music</option>
      <option value="136">Computer Control Programmers and Operators</option>
      <option value="137">Computer Hardware Engineers</option>
      <option value="138">Computer Managers</option>
      <option value="139">Computer Network Architects</option>
      <option value="140">Computer Occupations (all other)</option>
      <option value="141">Computer Operators</option>
      <option value="142">Computer Programmers</option>
      <option value="143">Computer Repairers</option>
      <option value="144">Computer Scientists</option>
      <option value="145">Computer Software Engineers</option>
      <option value="146">Computer Support Specialists</option>
      <option value="147">Computer Systems Analysts</option>
      <option value="148">Computer Systems Administrators</option>
      <option value="149">Concierges</option>
      <option value="150">Conciliators</option>
      <option value="151">Conservation Scientists</option>
      <option value="152">Conservation Technicians</option>
      <option value="153">Construction and Related Workers (all other)</option>
      <option value="154">Construction Equipment Operators</option>
      <option value="155">Construction Inspectors</option>
      <option value="156">Construction Laborers and Helpers</option>
      <option value="157">Construction Managers</option>
      <option value="158">Continuous Mining Machine Operators</option>
      <option value="159">Control and Valve Installers and Repairers (Except Mechanical Door)</option>
      <option value="160">Cooks</option>
      <option value="161">Correctional Officers</option>
      <option value="162">Correctional Treatment Specialists</option>
      <option value="163">Correspondents</option>
      <option value="164">Cosmetologists</option>
      <option value="165">Cost Estimators</option>
      <option value="166">Costume Attendants</option>
      <option value="167">Counselors (all other)</option>
      <option value="168">Counter and Rental Clerks</option>
      <option value="169">Couriers and Messengers</option>
      <option value="170">Court Reporters</option>
      <option value="171">Craft Artists</option>
      <option value="172">Credit Analysts</option>
      <option value="173">Credit Counselors</option>
      <option value="174">Crossing Guards</option>
      <option value="175">Curators</option>
      <option value="176">Customer Service Representatives</option>
      <option value="177">Cutters and Trimmers (Hand)</option>
      <option value="178">All "D" Careers</option>
      <option value="179">Dancers</option>
      <option value="180">Data Entry Keyers</option>
      <option value="181">Database Administrators</option>
      <option value="182">Delivery Truck Drivers and Driver/Sales Workers</option>
      <option value="183">Demonstrators and Product Promoters</option>
      <option value="184">Dental Assistants</option>
      <option value="185">Dental Hygienists</option>
      <option value="186">Dental Laboratory Technicians</option>
      <option value="187">Dentists</option>
      <option value="188">Derrick Operators (Oil and Gas)</option>
      <option value="189">Designers (all other)</option>
      <option value="190">Desktop Publishers</option>
      <option value="191">Development Managers</option>
      <option value="192">Diagnostic Medical Sonographers</option>
      <option value="193">Diesel Service Technicians and Mechanics</option>
      <option value="194">Dietitians</option>
      <option value="195">Directors - Music</option>
      <option value="196">Directors - Film, Theater</option>
      <option value="197">Dishwashers</option>
      <option value="198">Dispatchers (Police, Fire, and Ambulance)</option>
      <option value="199">Dispatchers (Except Police, Fire, and Ambulance)</option>
      <option value="200">Doctors</option>
      <option value="201">Door-to-Door Sales Workers, News and Street Vendors, and Related Workers</option>
      <option value="202">Drafters</option>
      <option value="203">Drywall Installers</option>
      <option value="204">All "E" Careers</option>
      <option value="205">Earth Drillers (Except Oil and Gas)</option>
      <option value="206">Economists</option>
      <option value="207">Editors</option>
      <option value="208">Education Administrators - Postsecondary</option>
      <option value="209">Education Administrators - Elementary, Middle, and High School</option>
      <option value="210">Education Administrators (all other)</option>
      <option value="211">Education, Training, and Library Workers (all other)</option>
      <option value="212">Electrical and Electronics Engineering Technicians</option>
      <option value="213">Electrical and Electronics Engineers</option>
      <option value="214">Electrical and Electronics Installers and Repairers</option>
      <option value="215">Electricians</option>
      <option value="216">Electro-mechanical Technicians</option>
      <option value="217">Electronic Home Entertainment Equipment Installers and Repairers</option>
      <option value="218">Elementary School Principals</option>
      <option value="219">Elementary School Teachers</option>
      <option value="220">Elevator Installers and Repairers</option>
      <option value="221">Embalmers</option>
      <option value="222">Emergency Management Directors</option>
      <option value="223">Emergency Medical Technicians (EMTs)</option>
      <option value="224">Emergency Response Dispatchers</option>
      <option value="225">Engineering Managers</option>
      <option value="226">Engineering Technicians, except Drafters (all other)</option>
      <option value="227">Engineers:</option>
      <option value="228">Aerospace Engineers</option>
      <option value="229">Agricultural Engineers</option>
      <option value="230">Biomedical Engineers</option>
      <option value="231">Chemical Engineers</option>
      <option value="232">Civil Engineers</option>
      <option value="233">Computer Hardware Engineers</option>
      <option value="234">Computer Software Engineers</option>
      <option value="235">Electrical and Electronics Engineers</option>
      <option value="236">Environmental Engineers</option>
      <option value="237">Flight Engineers</option>
      <option value="238">Geological Engineers</option>
      <option value="239">Health and Safety Engineers</option>
      <option value="240">Industrial Engineers</option>
      <option value="241">Manufacturing Engineers</option>
      <option value="242">Marine Engineers</option>
      <option value="243">Materials Engineers</option>
      <option value="244">Mechanical Engineers</option>
      <option value="245">Mining Engineers</option>
      <option value="246">Mining Safety Engineers</option>
      <option value="247">Nuclear Engineers</option>
      <option value="248">Petroleum Engineers</option>
      <option value="249">Sales Engineers</option>
      <option value="250">Stationary Engineers</option>
      <option value="251">All other Engineers</option>
      <option value="252">Entertainers and Performers, Sports and Related Workers (all other)</option>
      <option value="253">Entertainment Attendants and Related Workers (all other)</option>
      <option value="254">Environmental Engineering Technicians</option>
      <option value="255">Environmental Engineers</option>
      <option value="256">Environmental Science and Protection Technicians</option>
      <option value="257">Environmental Scientists and Specialists</option>
      <option value="258">Epidemiologists</option>
      <option value="259">Etchers and Engravers</option>
      <option value="260">Exercise Physiologists</option>
      <option value="261">Explosives Workers, Ordnance Handling Experts, and Blasters</option>
      <option value="262">Extraction Worker Helpers</option>
      <option value="263">Extraction Workers (all other)</option>
      <option value="264">All "F" Careers</option>
      <option value="265">Fabric and Apparel Patternmakers</option>
      <option value="266">Fabric Menders (Except Garment)</option>
      <option value="267">Fabricators</option>
      <option value="268">Family Therapists</option>
      <option value="269">Farm Labor Contractors</option>
      <option value="270">Farmers</option>
      <option value="271">Fashion Designers</option>
      <option value="272">Fence Erectors</option>
      <option value="273">Film Editors</option>
      <option value="274">Financial Analysts</option>
      <option value="275">Financial Clerks</option>
      <option value="276">Financial Clerks (all other)</option>
      <option value="277">Financial Examiners</option>
      <option value="278">Financial Managers</option>
      <option value="279">Financial Services Sales Agents</option>
      <option value="280">Financial Specialists (all other)</option>
      <option value="281">Fine Artists</option>
      <option value="282">Fire Inspectors and Investigators</option>
      <option value="283">Firefighters</option>
      <option value="284">First-Line Supervisors of…</option>
      <option value="285">Construction Trades and Extraction Workers</option>
      <option value="286">Correctional Officers</option>
      <option value="287">Farming, Fishing, and Forestry Workers</option>
      <option value="288">Fire Fighting and Prevention Workers</option>
      <option value="289">Food Preparation and Serving Workers</option>
      <option value="290">Helpers, Laborers, and Material Movers (Hand)</option>
      <option value="291">Housekeeping and Janitorial Workers</option>
      <option value="292">Landscaping, Lawn Service, and Groundskeeping Workers</option>
      <option value="293">Mechanics, Installers, and Repairers</option>
      <option value="294">Nonretail Sales Workers</option>
      <option value="295">Office and Administrative Support Workers</option>
      <option value="296">Personal Service Workers</option>
      <option value="297">Police and Detectives</option>
      <option value="298">Production and Operating Workers</option>
      <option value="299">First-line Supervisors of Protective Service Workers (all other)</option>
      <option value="300">Retail Sales Workers</option>
      <option value="301">Transportation and Material-Moving Machine and Vehicle Operators</option>
      <option value="302">Fishing Workers</option>
      <option value="303">Fitness Trainers and Instructors</option>
      <option value="304">Flight Attendants</option>
      <option value="305">Flight Engineers</option>
      <option value="306">Floor Layers</option>
      <option value="307">Floor Sanders and Finishers</option>
      <option value="308">Floral Designers</option>
      <option value="309">Food and Beverage Serving and Related Workers</option>
      <option value="310">Food Preparation Workers</option>
      <option value="311">Food Processing Workers</option>
      <option value="312">Food Science Technicians</option>
      <option value="313">Food Scientists</option>
      <option value="314">Food Service Managers</option>
      <option value="315">Forensic Science Technicians</option>
      <option value="316">Forest and Conservation Technicians</option>
      <option value="317">Forest and Conservation Workers</option>
      <option value="318">Forest Fire Inspectors and Prevention Specialists</option>
      <option value="319">Foresters</option>
      <option value="320">Fundraisers</option>
      <option value="321">Fundraising Managers</option>
      <option value="322">Funeral Attendants</option>
      <option value="323">Funeral Service Workers</option>
      <option value="324">All "G" Careers</option>
      <option value="325">G.E.D. Teachers</option>
      <option value="326">Gaming Change Persons and Booth Cashiers</option>
      <option value="327">Gaming Services Workers</option>
      <option value="328">Gaming Surveillance Officers</option>
      <option value="329">Gas Compressor and Gas Pumping Station Operators</option>
      <option value="330">Gas Plant Operators</option>
      <option value="331">General Maintenance and Repair Workers</option>
      <option value="332">General Office Clerks</option>
      <option value="333">Genetic Counselors</option>
      <option value="334">Geographers</option>
      <option value="335">Geological Engineers</option>
      <option value="336">Geological Technicians</option>
      <option value="337">Geoscientists</option>
      <option value="338">Glaziers</option>
      <option value="339">Graders and Sorters (Agricultural Products)</option>
      <option value="340">Graduate Teaching Assistants</option>
      <option value="341">Graphic Designers</option>
      <option value="342">Grinding and Polishing Workers (Hand)</option>
      <option value="343">Grounds Maintenance Workers</option>
      <option value="344">All "H" Careers</option>
      <option value="345">Hairstylists</option>
      <option value="346">Hand Laborers</option>
      <option value="347">Hazardous Materials Removal Workers</option>
      <option value="348">Head Cooks</option>
      <option value="349">Health and Safety Engineers</option>
      <option value="350">Health Diagnosing and Treating Practitioners (all other)</option>
      <option value="351">Health Educators and Community Health Workers</option>
      <option value="352">Health Information Technicians</option>
      <option value="353">Health Services Managers</option>
      <option value="354">Health Technologists and Technicians (all other)</option>
      <option value="355">Healthcare Practitioners and Technical Workers (all other)</option>
      <option value="356">Healthcare Support Workers (all other)</option>
      <option value="357">Hearing Officers</option>
      <option value="358">Heating and Air Conditioning Mechanics and Installers</option>
      <option value="359">Heavy and Tractor-trailer Truck Drivers</option>
      <option value="360">Heavy Vehicle Service Technicians</option>
      <option value="361">High School Equivalency Diploma Teachers</option>
      <option value="362">High School Principals</option>
      <option value="363">High School Teachers</option>
      <option value="364">Highway Maintenance Workers</option>
      <option value="365">Historians</option>
      <option value="366">Home Appliance Repairers</option>
      <option value="367">Home Health Aides</option>
      <option value="368">Hotel Managers</option>
      <option value="369">Housekeeping Cleaners</option>
      <option value="370">Human Resources Managers</option>
      <option value="371">Human Resources Specialists</option>
      <option value="372">Human Service Assistants</option>
      <option value="373">Hunting Workers</option>
      <option value="374">Hydrologists</option>
      <option value="375">All "I" Careers</option>
      <option value="376">Industrial Designers</option>
      <option value="377">Industrial Engineering Technicians</option>
      <option value="378">Industrial Engineers</option>
      <option value="379">Industrial Machinery Mechanics and Maintenance Workers</option>
      <option value="380">Industrial Production Managers</option>
      <option value="381">Information Clerks</option>
      <option value="382">Information Research Scientists</option>
      <option value="383">Information Security Analysts</option>
      <option value="384">Information Systems Managers</option>
      <option value="385">Inspectors, Testers, Sorters, Samplers, and Weighers</option>
      <option value="386">Installation, Maintenance, and Repair Worker Helpers</option>
      <option value="387">Installation, Maintenance, and Repair Workers (all other)</option>
      <option value="388">Instructional Coordinators</option>
      <option value="389">Insulation Workers</option>
      <option value="390">Insurance Sales Agents</option>
      <option value="391">Insurance Underwriters</option>
      <option value="392">Interior Designers</option>
      <option value="393">Interpreters</option>
      <option value="394">Iron Workers</option>
      <option value="395">All "J" Careers</option>
      <option value="396">Janitors</option>
      <option value="397">Jewelers</option>
      <option value="398">Job Analysis Specialists</option>
      <option value="399">Journalists</option>
      <option value="400">Judges</option>
      <option value="401">All "K" Careers</option>
      <option value="402">Kindergarten Teachers</option>
      <option value="403">All "L" Careers</option>
      <option value="404">Labor Relations Specialists</option>
      <option value="405">Laboratory Animal Caretakers</option>
      <option value="406">Landscape Architects</option>
      <option value="407">Lawyers</option>
      <option value="408">Layout Workers (Metal and Plastic)</option>
      <option value="409">Legal Assistants</option>
      <option value="410">Legal Support Workers (all other)</option>
      <option value="411">Legislators</option>
      <option value="412">Librarians</option>
      <option value="413">Library Technicians and Assistants</option>
      <option value="414">Licensed Practical and Licensed Vocational Nurses</option>
      <option value="415">Life Scientists (all other)</option>
      <option value="416">Life, Physical, and Social Science Technicians (all other)</option>
      <option value="417">Lifeguards and Other Recreational Protective Service Workers</option>
      <option value="418">Line Installers and Repairers</option>
      <option value="419">Loan Officers</option>
      <option value="420">Locker Room, Coatroom, and Dressing Room Attendants</option>
      <option value="421">Locksmiths and Safe Repairers</option>
      <option value="422">Lodging Managers</option>
      <option value="423">Logging Workers</option>
      <option value="424">Logisticians</option>
      <option value="425">All "M" Careers</option>
      <option value="426">Machine and Equipment Setters, Operators and Tenders:</option>
      <option value="427">Adhesive Bonding Machine Operators and Tenders</option>
      <option value="428">Chemical Equipment Operators and Tenders</option>
      <option value="429">Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders</option>
      <option value="430">Cooling and Freezing Equipment Operators and Tenders</option>
      <option value="431">Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders</option>
      <option value="432">Cutting and Slicing Machine Setters, Operators, and Tenders</option>
      <option value="433">Extruding and Forming Machine Setters, Operators, and Tenders (Synthetic and Glass Fibers)</option>
      <option value="434">Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders</option>
      <option value="435">Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders</option>
      <option value="436">Mixing and Blending Machine Setters, Operators, and Tenders</option>
      <option value="437">Packaging and Filling Machine Operators and Tenders</option>
      <option value="438">Paper Goods Machine Setters, Operators, and Tenders</option>
      <option value="439">Photographic Process Workers and Processing Machine Operators</option>
      <option value="440">Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tenders</option>
      <option value="441">Sewing Machine Operators</option>
      <option value="442">Shoe Machine Operators and Tenders</option>
      <option value="443">Textile Bleaching and Dyeing Machine Operators and Tenders</option>
      <option value="444">Textile Cutting Machine Setters, Operators, and Tenders</option>
      <option value="445">Textile Knitting and Weaving Machine Setters, Operators, and Tenders</option>
      <option value="446">Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tenders</option>
      <option value="447">Machinists</option>
      <option value="448">Maids</option>
      <option value="449">Mail Clerks and Mail Machine Operators (Except Postal Service)</option>
      <option value="450">Maintenance and Repair Workers, General</option>
      <option value="451">Makeup Artists (Theatrical and Performance)</option>
      <option value="452">Management Analysts</option>
      <option value="453">Managers (all other)</option>
      <option value="454">Manicurists</option>
      <option value="455">Manufactured Building and Mobile Home Installers</option>
      <option value="456">Manufacturing Engineers</option>
      <option value="457">Manufacturing Sales Representatives</option>
      <option value="458">Mapping Technicians</option>
      <option value="459">Marble Setters</option>
      <option value="460">Marine Mechanics</option>
      <option value="461">Marine Engineers</option>
      <option value="462">Market Research Analysts</option>
      <option value="463">Marketing Managers</option>
      <option value="464">Marriage and Family Therapists</option>
      <option value="465">Masons: Brick, Block, Stone, and Cement</option>
      <option value="466">Massage Therapists</option>
      <option value="467">Material Movers</option>
      <option value="468">Material Moving Workers (all other)</option>
      <option value="469">Material Moving Machine Operators</option>
      <option value="470">Materials Engineers</option>
      <option value="471">Mathematical Science Occupations (all other)</option>
      <option value="472">Materials Scientists</option>
      <option value="473">Mathematical Technicians</option>
      <option value="474">Mathematicians</option>
      <option value="475">Meat, Poultry, and Fish Cutters and Trimmers</option>
      <option value="476">Meat Packers</option>
      <option value="477">Mechanical Door Repairers</option>
      <option value="478">Mechanical Engineering Technicians</option>
      <option value="479">Mechanical Engineers</option>
      <option value="480">Mechanics - Automotive</option>
      <option value="481">Mechanics - Diesel</option>
      <option value="482">Mechanics - Heating, Air Conditioning, and Refrigeration</option>
      <option value="483">Mechanics - Industrial Machinery</option>
      <option value="484">Mechanics - Small Engine</option>
      <option value="485">Media and Communication Equipment Workers (all other)</option>
      <option value="486">Media and Communication Workers (all other)</option>
      <option value="487">Mediators</option>
      <option value="488">Medical Appliance Technicians</option>
      <option value="489">Medical Assistants</option>
      <option value="490">Medical Billing and Coding</option>
      <option value="491">Medical Doctors</option>
      <option value="492">Medical Equipment Repairers</option>
      <option value="493">Medical Laboratory Technologists and Technicians</option>
      <option value="494">Medical Records Technicians</option>
      <option value="495">Medical Scientists</option>
      <option value="496">Medical Services Managers</option>
      <option value="497">Medical Transcriptionists</option>
      <option value="498">Meeting, Convention, and Event Planners</option>
      <option value="499">Mental Health Counselors</option>
      <option value="500">Merchandise Displayers and Window Trimmers</option>
      <option value="501">Metal Machine Workers</option>
      <option value="502">Metal Workers</option>
      <option value="503">Metal Workers and Plastic Workers (all other)</option>
      <option value="504">Meteorologists</option>
      <option value="505">Meter Readers (Utilities)</option>
      <option value="506">Microbiologists</option>
      <option value="507">Middle School Principals</option>
      <option value="508">Middle School Teachers</option>
      <option value="509">Millwrights</option>
      <option value="510">Mine Cutting and Channeling Machine Operators</option>
      <option value="511">Mine Shuttle Car Operators</option>
      <option value="512">Mining Engineers</option>
      <option value="513">Mining Machine Operators (all other)</option>
      <option value="514">Mining Safety Engineers</option>
      <option value="515">Mobile Equipment Service Technicians</option>
      <option value="516">Models</option>
      <option value="517">Model Makers (Wood)</option>
      <option value="518">Molders, Shapers, and Casters (Except Metal and Plastic)</option>
      <option value="519">Morticians</option>
      <option value="520">Motel Managers</option>
      <option value="521">Motion Picture Projectionists</option>
      <option value="522">Motor Vehicle Operators (all other)</option>
      <option value="523">Motorcycle Mechanics</option>
      <option value="524">MRI Technologists</option>
      <option value="525">Multimedia Artists and Animators</option>
      <option value="526">Museum Technicians</option>
      <option value="527">Music Directors and Composers</option>
      <option value="528">Musical Instrument Repairers and Tuners</option>
      <option value="529">Musicians</option>
      <option value="530">All "N" Careers</option>
      <option value="531">Nail Technicians</option>
      <option value="532">Natural Sciences Managers</option>
      <option value="533">Naval Architects</option>
      <option value="534">Network Architects</option>
      <option value="535">Network Systems Administrators</option>
      <option value="536">News Analysts</option>
      <option value="537">Nuclear Engineers</option>
      <option value="538">Nuclear Medicine Technologists</option>
      <option value="539">Nuclear Technicians</option>
      <option value="540">Nurses</option>
      <option value="541">Nurse Anesthetists, Nurse Midwives, and Nurse Practitioners</option>
      <option value="542">Nursing Assistants</option>
      <option value="543">Nutritionists</option>
      <option value="544">All "O" Careers</option>
      <option value="545">Office and Administrative Support Workers (all other)</option>
      <option value="546">Office Clerks</option>
      <option value="547">Office Machine Operators (Except Computer)</option>
      <option value="548">Occupational Health and Safety Specialists</option>
      <option value="549">Occupational Health and Safety Technicians</option>
      <option value="550">Occupational Therapists</option>
      <option value="551">Occupational Therapy Assistants and Aides</option>
      <option value="552">Operations Research Analysts</option>
      <option value="553">Ophthalmic Medical Technicians</option>
      <option value="554">Opticians, Dispensing</option>
      <option value="555">Optometrists</option>
      <option value="556">Orderlies</option>
      <option value="557">Orthotists</option>
      <option value="558">All "P" Careers</option>
      <option value="559">Painters (Construction and Maintenance)</option>
      <option value="560">Painting Workers</option>
      <option value="561">Paperhangers</option>
      <option value="562">Paralegals</option>
      <option value="563">Paramedics</option>
      <option value="564">Parking Enforcement Workers</option>
      <option value="565">Parking Lot Attendants</option>
      <option value="566">Patternmakers (Wood)</option>
      <option value="567">Payroll Clerks</option>
      <option value="568">Pedicurists</option>
      <option value="569">Personal Care Aides</option>
      <option value="570">Personal Care and Service Workers (all other)</option>
      <option value="571">Personal Financial Advisors</option>
      <option value="572">Pest Control Workers</option>
      <option value="573">Petroleum Engineers</option>
      <option value="574">Petroleum Pump System Operators, Refinery Operators, and Gaugers</option>
      <option value="575">Petroleum Technicians</option>
      <option value="576">Pharmacists</option>
      <option value="577">Pharmacy Technicians</option>
      <option value="578">Phlebotomists</option>
      <option value="579">Photogrammetrists</option>
      <option value="580">Photographers</option>
      <option value="581">Physical Scientists (all other)</option>
      <option value="582">Physical Therapist Assistants and Aides</option>
      <option value="583">Physical Therapists</option>
      <option value="584">Physician Assistants</option>
      <option value="585">Physicians</option>
      <option value="586">Physicists</option>
      <option value="587">Pipefitters</option>
      <option value="588">Pipelayers</option>
      <option value="589">Plant and System Operators (all other)</option>
      <option value="590">Plasterers and Stucco Masons</option>
      <option value="591">Plastic Machine Workers</option>
      <option value="592">Plumbers</option>
      <option value="593">Podiatrists</option>
      <option value="594">Police and Detectives</option>
      <option value="595">Police Dispatchers</option>
      <option value="596">Political Scientists</option>
      <option value="597">Postal Service Workers</option>
      <option value="598">Postmasters and Mail Superintendents</option>
      <option value="599">Postsecondary Education Administrators</option>
      <option value="600">Postsecondary Teachers</option>
      <option value="601">Postsecondary Teachers (all other)</option>
      <option value="602">Power Plant Operators, Distributors, and Dispatchers</option>
      <option value="603">Practical Nurses, Licensed</option>
      <option value="604">Precious Stone and Metal Workers</option>
      <option value="605">Precision Instrument and Equipment Repairers (all other)</option>
      <option value="606">Prepress Technicians and Workers</option>
      <option value="607">Preschool Directors</option>
      <option value="608">Preschool Teachers</option>
      <option value="609">Pressers (Textile, Garment, and Related Materials)</option>
      <option value="610">Print Binding and Finishing Workers</option>
      <option value="611">Printing Press Operators</option>
      <option value="612">Private Detectives and Investigators</option>
      <option value="613">Probation Officers</option>
      <option value="614">Producers - Film, Theater</option>
      <option value="615">Production Managers</option>
      <option value="616">Production Worker Helpers</option>
      <option value="617">Production Workers (all other)</option>
      <option value="618">Promotions Managers</option>
      <option value="619">Proofreaders and Copy Markers</option>
      <option value="620">Property Managers</option>
      <option value="621">Prosthetists</option>
      <option value="622">Protective Service Workers (all other)</option>
      <option value="623">Psychiatric Technicians and Aides</option>
      <option value="624">Psychologists</option>
      <option value="625">Public Relations Managers</option>
      <option value="626">Public Relations Specialists</option>
      <option value="627">Pump Operators</option>
      <option value="628">Purchasing Agents</option>
      <option value="629">Purchasing Managers</option>
      <option value="630">All "Q" Careers</option>
      <option value="631">Quality Control Inspectors</option>
      <option value="632">Quarry Rock Splitters</option>
      <option value="633">All "R" Careers</option>
      <option value="634">Radiation Therapists</option>
      <option value="635">Radio Operators</option>
      <option value="636">Radio, Cellular, and Tower Equipment Installers and Repairers</option>
      <option value="637">Radiologic Technologists</option>
      <option value="638">Rail Transportation Workers (all other)</option>
      <option value="639">Rail-Track Laying and Maintenance Equipment Operators</option>
      <option value="640">Railroad Occupations</option>
      <option value="641">Ranchers</option>
      <option value="642">Real Estate Brokers and Sales Agents</option>
      <option value="643">Real Estate Managers</option>
      <option value="644">Receptionists</option>
      <option value="645">Recreation Workers</option>
      <option value="646">Recreational Therapists</option>
      <option value="647">Recreational Vehicle Service Technicians</option>
      <option value="648">Referees, Umpires, and Other Sports Officials</option>
      <option value="649">Refractory Materials Repairers (Except Brickmasons)</option>
      <option value="650">Refrigeration Mechanics and Installers</option>
      <option value="651">Registered Nurses</option>
      <option value="652">Rehabilitation Counselors</option>
      <option value="653">Reinforcing Iron and Rebar Workers</option>
      <option value="654">Religious Activities and Education Directors</option>
      <option value="655">Religious Workers (all other)</option>
      <option value="656">Repair and Maintenance Workers, General</option>
      <option value="657">Reporters</option>
      <option value="658">Residential Advisors</option>
      <option value="659">Respiratory Therapists</option>
      <option value="660">Retail Sales Workers</option>
      <option value="661">Riggers</option>
      <option value="662">Roof Bolters (Mining)</option>
      <option value="663">Roofers</option>
      <option value="664">Rotary Drill Operators (Oil and Gas)</option>
      <option value="665">Roustabouts (Oil and Gas)</option>
      <option value="666">All "S" Careers</option>
      <option value="667">Sales and Related Workers (all other)</option>
      <option value="668">Sales Engineers</option>
      <option value="669">Sales Managers</option>
      <option value="670">Sales Representatives, Services (all other)</option>
      <option value="671">School Counselors</option>
      <option value="672">School Principals - Elementary, Middle, and High</option>
      <option value="673">Science Technicians</option>
      <option value="674">Secretaries</option>
      <option value="675">Securities Sales Agents</option>
      <option value="676">Security and Fire Alarm Systems Installers</option>
      <option value="677">Security Guards</option>
      <option value="678">Segmental Pavers</option>
      <option value="679">Semi Truck Drivers</option>
      <option value="680">Septic Tank Servicers and Sewer Pipe Cleaners</option>
      <option value="681">Service Unit Operators (Oil, Gas, and Mining)</option>
      <option value="682">Set and Exhibit Designers</option>
      <option value="683">Sewers (Hand)</option>
      <option value="684">Shampooers</option>
      <option value="685">Sheet Metal Workers</option>
      <option value="686">Shipping, Receiving, and Traffic Clerks</option>
      <option value="687">Shoe and Leather Workers and Repairers</option>
      <option value="688">Signal and Track Switch Repairers</option>
      <option value="689">Singers</option>
      <option value="690">Ski Patrol and Other Recreational Protective Service Workers</option>
      <option value="691">Skincare Specialists</option>
      <option value="692">Slaughterers</option>
      <option value="693">Small Engine Mechanics</option>
      <option value="694">Social Science Research Assistants</option>
      <option value="695">Social Scientists and Related Workers (all other)</option>
      <option value="696">Social Service Assistants</option>
      <option value="697">Social Service Managers</option>
      <option value="698">Social Workers</option>
      <option value="699">Sociologists</option>
      <option value="700">Software Developers</option>
      <option value="701">Solar Photovoltaic Installers</option>
      <option value="702">Solderers</option>
      <option value="703">Sound Engineering Technicians</option>
      <option value="704">Special Education Teachers</option>
      <option value="705">Special Education Teachers (all other)</option>
      <option value="706">Speech-Language Pathologists</option>
      <option value="707">Stationary Engineers</option>
      <option value="708">Statistical Assistants</option>
      <option value="709">Statisticians</option>
      <option value="710">Steamfitters</option>
      <option value="711">Steel Workers</option>
      <option value="712">Stonemasons</option>
      <option value="713">Substance Abuse Counselors</option>
      <option value="714">Subway and Streetcar Operators</option>
      <option value="715">Surgeons</option>
      <option value="716">Surgical Technologists</option>
      <option value="717">Survey Researchers</option>
      <option value="718">Surveying Technicians</option>
      <option value="719">Surveyors</option>
      <option value="720">Switchboard Operators (Including Answering Service)</option>
      <option value="721">Systems Analysts</option>
      <option value="722">All "T" Careers</option>
      <option value="723">Tailors, Dressmakers, and Custom Sewers</option>
      <option value="724">Tank Car, Truck, and Ship Loaders</option>
      <option value="725">Tapers</option>
      <option value="726">Tax Examiners and Collectors, and Revenue Agents</option>
      <option value="727">Tax Preparers</option>
      <option value="728">Taxi Drivers</option>
      <option value="729">Teacher Assistants</option>
      <option value="730">Teachers - Adult Literacy and High School Equivalency Diploma</option>
      <option value="731">Teachers - Career and Technical Education Teachers</option>
      <option value="732">Teachers - High School</option>
      <option value="733">Teachers - Kindergarten and Elementary School</option>
      <option value="734">Teachers - Middle School</option>
      <option value="735">Teachers - Postsecondary</option>
      <option value="736">Teachers - Preschool</option>
      <option value="737">Teachers - Special Education</option>
      <option value="738">Teachers and Instructors (all other)</option>
      <option value="739">Technical Writers</option>
      <option value="740">Telecommunications Equipment Installers and Repairers (Except Line Installers)</option>
      <option value="741">Telemarketers</option>
      <option value="742">Telephone Operators</option>
      <option value="743">Television, Video, and Motion Picture Camera Operators and Editors</option>
      <option value="744">Tellers</option>
      <option value="745">Terrazzo Workers</option>
      <option value="746">Textile Careers</option>
      <option value="747">Textile, Apparel, and Furnishings Workers (all other)</option>
      <option value="748">Therapists (all other)</option>
      <option value="749">Tile Setters</option>
      <option value="750">Timekeeping Clerks</option>
      <option value="751">Tire Builders</option>
      <option value="752">Tire Repairers and Changers</option>
      <option value="753">Tobacco Processing Workers</option>
      <option value="754">Tool and Die Makers</option>
      <option value="755">Tool Grinders, Filers, and Sharpeners</option>
      <option value="756">Top Executives</option>
      <option value="757">Tour Guides and Escorts</option>
      <option value="758">Traffic Technicians</option>
      <option value="759">Training Managers</option>
      <option value="760">Training and Development Specialists</option>
      <option value="761">Translators</option>
      <option value="762">Transportation Attendants</option>
      <option value="763">Transportation Inspectors</option>
      <option value="764">Transportation Security Screeners</option>
      <option value="765">Transportation Workers (all other)</option>
      <option value="766">Transportation, Storage, and Distribution Managers</option>
      <option value="767">Travel Agents</option>
      <option value="768">Travel Clerks</option>
      <option value="769">Travel Guides</option>
      <option value="770">Truck Drivers - Delivery and Sales Workers</option>
      <option value="771">Truck Drivers - Heavy and Tractor-trailer</option>
      <option value="772">All "U" Careers</option>
      <option value="773">Ultrasound Technician</option>
      <option value="774">Umpires, Referees, and Other Sports Officials</option>
      <option value="775">Upholsterers</option>
      <option value="776">Urban and Regional Planners</option>
      <option value="777">Ushers, Lobby Attendants, and Ticket Takers</option>
      <option value="778">All "V" Careers</option>
      <option value="779">Vascular Technologists</option>
      <option value="780">Vending, Coin, and Amusement Machine Servicers and Repairers</option>
      <option value="781">Veterinarians</option>
      <option value="782">Veterinary Assistants</option>
      <option value="783">Veterinary Technologists and Technicians</option>
      <option value="784">Video Editors</option>
      <option value="785">Vocational Nurses, Licensed</option>
      <option value="786">All "W" Careers</option>
      <option value="787">Waiters and Waitresses</option>
      <option value="788">Watch Repairers</option>
      <option value="789">Water and Wastewater Treatment Plant and System Operators</option>
      <option value="790">Water Transportation Occupations</option>
      <option value="791">Web Developers</option>
      <option value="792">Weighers, Measurers, Checkers, and Samplers, Recordkeeping</option>
      <option value="793">Welders and Cutters</option>
      <option value="794">Wellhead Pumpers</option>
      <option value="795">Wholesale Sales Representatives</option>
      <option value="796">Wildlife Biologists</option>
      <option value="797">Wind Turbine Technicians</option>
      <option value="798">Word Processors and Typists</option>
      <option value="799">Woodworkers</option>
      <option value="800">Woodworkers (all other)</option>
      <option value="801">Writers</option>
      <option value="802">All "X" Careers</option>
      <option value="803">X-Ray Technologists</option>
      <option value="804">All "Z" Careers</option>
      <option value="805">Zoologists</option>
</select>

         
         </label>
    <br/>
    <label>
         Upload Your Passport size Picture
         <input type="file" onChange={this.fileSelectedHandler}/>
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
			<input value="input" name="contactemail" type="email" value={this.state.contactemail} onChange={this.handleChange}/>
			</label>
			<br/>
			<label>
			Contact 
			<input value="input" name="contactnumber" type="text" required="required" value={this.state.contactnumber} onChange={this.handleChange}/>
			</label>
			<br/>
		
			
			</div>
			

			<input type="submit" value="Submit"/>
		
			<button class="button" type="button" onClick={this.onResetClick} >Reset</button>
			<br/>
			</form>
			);
	
}}