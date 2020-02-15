import React from 'react';
import ReactDOM from 'react-dom';
import './formstyle.css';
import {FirebaseContext} from '../../contexts/FirebaseContext';

import { storage } from '../../contexts/FirebaseContext';

export default class Resume extends React.Component
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
      firestore.collection("Resume").add(
         this.state.form
      )
      
         //window.location.href("www.google.com");
      
      event.preventDefault();
   };
   render()
   {//const {firestore} = this.context;
      //firestore.collection("users").doc(DOCID).
      return(
         <form class="form-style" onSubmit={this.handleSubmit}>
         <h1>Resumé</h1>
         <br/>
         <div class="inner-wrap">
         <label>
         First Name 
         <input   name="fname" type="text" required="required"  onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Last Name 
         <input  name="lname" type="text" required="required"  onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Date 
         <input   name="date" type="date" required="required" onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Gender
         M<input  name="gender" type="radio" id="radios-0" value="Male"   onChange={this.handleChange}/>
         F<input  name="gender" type="radio" id="radios-1" value="Female"   onChange={this.handleChange}/>
         Others<input  name="gender" type="radio" id="radios-2"   value="Others" onChange={this.handleChange}/>
         </label><br/>
         <label>
         Nationality 
         <input   name="nationality" type="text" required="required"  onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Father's/Spouse's name 
         <input  name="fsname" type="text" required="required" onChange={this.handleChange}/>
         </label><br/>
         <label>
         Address
         <textArea name="address" class="input1" rows="4" columns="40" required="required"  onChange={this.handleChange} />
         </label>

         </div>
         
         <br/>
         <div class="inner-wrap">
         
         <br/>
         <label>
         Education
         <select class="dropdown" name="education" required="required"  onChange={this.handleChange}>
            <option >Select</option>
            <option >Secondary School</option>
      <option >Higher Secondary School</option>
      <option>Associate Degree in Administration of Justice</option>
      <option>Associate Degree in Advertising</option>
      <option>Associate Degree in Agribusiness</option>
      <option>Associate Degree in Animal Management</option>
      <option>Associate Degree in Architectural Building Engineering Technology</option>
      <option>Associate Degree in Architecture and Career Options</option>
      <option>Associate Degree in Art</option>
      <option>Associate Degree in Automotive Maintenance Technology</option>
      <option>Associate Degree in Aviation Mechanics</option>
      <option>Associate Degree in Behavioral Science</option>
      <option>Associate Degree in Boat Mechanics</option>
      <option>Associate Degree in Boat Repair and Maintenance</option>
      <option>Associate Degree in Cabinet Design Technology</option>
      <option>Associate Degree in Child Development: Program Summary</option>
      <option>Associate Degree in Christian Ministry</option>
      <option>Associate Degree in Cosmetology Business</option>
      <option>Associate Degree in Digital Media</option>
      <option>Associate Degree in Early Childhood Special Education</option>
      <option>Associate Degree in Elementary Education</option>
      <option>Associate Degree in English</option>
      <option>Associate Degree in Environmental Science</option>
      <option>Associate Degree in Environmental Studies</option>
      <option>Associate Degree in General Psychology</option>
      <option>Associate Degree in History and Information</option>
      <option>Associate Degree in Interdisciplinary Studies</option>
      <option>Associate Degree in International Relations</option>
      <option>Associate Degree in Landscape Architecture</option>
      <option>Associate Degree in Landscaping Design</option>
      <option>Associate Degree in Library Science</option>
      <option>Associate Degree in Music</option>
      <option>Associate Degree in Wildlife Management</option>
      <option>Associate Degree in Education</option>
      <option>Associate of Applied Science (AAS) in Accelerated Culinary Arts</option>
      <option>Associate of Applied Science (AAS) in Accounting Specialist</option>
      <option>Associate of Applied Science (AAS) in Administrative Support</option>
      <option>Associate of Applied Science (AAS) in Baking and Pastry</option>
      <option>Associate of Applied Science (AAS) in Business Administration</option>
      <option>Associate of Applied Science (AAS) in Business Administration - Finance</option>
      <option>Associate of Applied Science (AAS) in Business Information Systems</option>
      <option>Associate of Applied Science (AAS) in Civil Justice - Law Enforcement</option>
      <option>Associate of Applied Science (AAS) in Clinical Medical Assisting</option>
      <option>Associate of Applied Science (AAS) in Computer Applications</option>
      <option>Associate of Applied Science (AAS) in Computer Electronics</option>
      <option>Associate of Applied Science (AAS) in Computer Game Design</option>
      <option>Associate of Applied Science (AAS) in Computer Information Systems</option>
      <option>Associate of Applied Science (AAS) in Culinary Arts</option>
      <option>Associate of Applied Science (AAS) in Digital Media Communications</option>
      <option>Associate of Applied Science (AAS) in Digital Photography</option>
      <option>Associate of Applied Science (AAS) in Electronic Engineering</option>
      <option>Associate of Applied Science (AAS) in Emergency Medical Services</option>
      <option>Associate of Applied Science (AAS) in Health Care Management</option>
      <option>Associate of Applied Science (AAS) in Health Information Management</option>
      <option>Associate of Applied Science (AAS) in Healthcare Administration</option>
      <option>Associate of Applied Science (AAS) in Legal Office E-ministration</option>
      <option>Associate of Applied Science (AAS) in Telecommunications Technology</option>
      <option>Associate of Applied Science (AAS) in Television Production</option>
      <option>Associate of Applied Science (AAS) in Visual Communications</option>
      <option>Associate of Arts (AA) in Computer Information Systems</option>
      <option>Associate of Arts (AA) in Internetworking Technology</option>
      <option>Associate of Arts (AA) in Psychology</option>
      <option>Associate of Arts (AA) in Interior Architecture and Design</option>
      <option>Associate of Biotechnology</option>
      <option>Associate of Business Science (ABS) in Individualized Studies</option>
      <option>Associate of Early Childhood Education (AECE)</option>
      <option>Associate of Occupational Studies (AOS) in Legal Office Administration</option>
      <option>Associate of Science (AS) in Computer Information Science</option>
      <option>Associate of Science (AS) in Computer Science</option>
      <option>Associate of Science (AS) in Corrections, Probation, &amp; Parole</option>
      <option>Associate of Science (AS) in Electronics Engineering Technology</option>
      <option>Associate of Science (AS) in Interactive &amp; Graphic Art</option>
      <option>Associate of Science (AS) in Industrial Maintenance Technology</option>
      <option>Associate of Arts and science</option>
      <option>Bachelor degrees</option>
      <option>Bachelor of Science in Genetic Engineering and Biotechnology</option>
      <option>Bachelor of Architecture</option>
      <option>Bachelor of Biomedical Science</option>
      <option>Bachelor of Business Administration</option>
      <option>Bachelor of Clinical Science</option>
      <option>Bachelor of Commerce</option>
      <option>Bachelor of Computer Applications</option>
      <option>Bachelor of Community Health</option>
      <option>Bachelor of Computer Information Systems</option>
      <option>Bachelor of Science in Construction Technology</option>
      <option>Bachelor of Criminal Justice</option>
      <option>Bachelor of Divinity</option>
      <option>Bachelor of Economics</option>
      <option>Bachelor of Education</option>
      <option>Bachelor of Engineering</option>
      <option>Bachelor of Fine Arts</option>
      <option>Bachelor of Letters</option>
      <option>Bachelor of Information Systems</option>
      <option>Bachelor of Management</option>
      <option>Bachelor of Music</option>
      <option>Bachelor of Pharmacy</option>
      <option>Bachelor of Philosophy</option>
      <option>Bachelor of Social Work</option>
      <option>Bachelor of Technology</option>
      <option>Bachelor of Accountancy</option>
      <option>Bachelor of Arts in American Studies</option>
      <option>Bachelor of Arts in American Indian Studies</option>
      <option>Bachelor of Arts in Applied Psychology</option>
      <option>Bachelor of Arts in Biology</option>
      <option>Bachelor of Arts in Anthropology</option>
      <option>Bachelor of Arts in Child Advocacy</option>
      <option>Bachelor of Arts in Clinical Psychology</option>
      <option>Bachelor of Arts in Forensic Psychology</option>
      <option>Bachelor of Arts in Organizational Psychology</option>
      <option>Bachelor of Science in Aerospace Engineering</option>
      <option>Bachelor of Science in Actuarial</option>
      <option>Bachelor of Science in Agriculture</option>
      <option>Bachelor of Science in Architecture</option>
      <option>Bachelor of Science in Architectural Engineering</option>
      <option>Bachelor of Science in Athletic Training</option>
      <option>Bachelor of Science in Biology</option>
      <option>Bachelor of Science in Biomedical Engineering</option>
      <option>Bachelor of Science in Bible</option>
      <option>Bachelor of Science in Business Administration</option>
      <option>Bachelor of Science in Business and Technology</option>
      <option>Bachelor of Science in Chemical Engineering</option>
      <option>Bachelor of Science in Chemistry</option>
      <option>Bachelor of Science in Civil Engineering</option>
      <option>Bachelor of Science in Clinical Laboratory Science</option>
      <option>Bachelor of Science in Cognitive Science</option>
      <option>Bachelor of Science in Computer Engineering</option>
      <option>Bachelor of Science in Computer Science</option>
      <option>Bachelor of Science in Construction Engineering</option>
      <option>Bachelor of Science in Construction Management</option>
      <option>Bachelor of Science in Criminal Justice</option>
      <option>Bachelor of Science in Criminology</option>
      <option>Bachelor of Science in Diagnostic Radiography</option>
      <option>Bachelor of Science in Education</option>
      <option>Bachelor of Science in Electrical Engineering</option>
      <option>Bachelor of Science in Engineering Physics</option>
      <option>Bachelor of Science in Engineering Science</option>
      <option>Bachelor of Science in Engineering Technology</option>
      <option>Bachelor of Science in English Literature</option>
      <option>Bachelor of Science in Environmental Engineering</option>
      <option>Bachelor of Science in Environmental Science</option>
      <option>Bachelor of Science in Environmental Studies</option>
      <option>Bachelor of Science in Food Science</option>
      <option>Bachelor of Science in Foreign Service</option>
      <option>Bachelor of Science in Forensic Science</option>
      <option>Bachelor of Science in Forestry</option>
      <option>Bachelor of Science in History</option>
      <option>Bachelor of Science in Hospitality Management</option>
      <option>Bachelor of Science in Human Resources Management</option>
      <option>Bachelor of Science in Industrial Engineering</option>
      <option>Bachelor of Science in Information Technology</option>
      <option>Bachelor of Science in Information Systems</option>
      <option>Bachelor of Science in Integrated Science</option>
      <option>Bachelor of Science in International Relations</option>
      <option>Bachelor of Science in Journalism</option>
      <option>Bachelor of Science in Legal Management</option>
      <option>Bachelor of Science in Management</option>
      <option>Bachelor of Science in Manufacturing Engineering</option>
      <option>Bachelor of Science in Marketing</option>
      <option>Bachelor of Science in Mathematics</option>
      <option>Bachelor of Science in Mechanical Engineering</option>
      <option>Bachelor of Science in Medical Technology</option>
      <option>Bachelor of Science in Metallurgical Engineering</option>
      <option>Bachelor of Science in Meteorology</option>
      <option>Bachelor of Science in Microbiology</option>
      <option>Bachelor of Science in Mining Engineering</option>
      <option>Bachelor of Science in Molecular Biology</option>
      <option>Bachelor of Science in Neuroscience</option>
      <option>Bachelor of Science in Nursing</option>
      <option>Bachelor of Science in Nutrition science</option>
      <option>Bachelor of Science in Software Engineering</option>
      <option>Bachelor of Science in Petroleum Engineering</option>
      <option>Bachelor of Science in Podiatry</option>
      <option>Bachelor of Science in Pharmacology</option>
      <option>Bachelor of Science in Pharmacy</option>
      <option>Bachelor of Science in Physical Therapy</option>
      <option>Bachelor of Science in Physics</option>
      <option>Bachelor of Science in Plant Science</option>
      <option>Bachelor of Science in Politics</option>
      <option>Bachelor of Science in Psychology</option>
      <option>Bachelor of Science in Public Safety</option>
      <option>Bachelor of Science in Physiology</option>
      <option>Bachelor of Science in Quantity Surveying Engineering</option>
      <option>Bachelor of Science in Radiologic Technology</option>
      <option>Bachelor of Science in Real-Time Interactive Simulation</option>
      <option>Bachelor of Science in Religion</option>
      <option>Bachelor of Science in Respiratory Therapy</option>
      <option>Bachelor of Science in Risk Management and Insurance</option>
      <option>Bachelor of Science in Science Education</option>
      <option>Bachelor of Science in Sports Management</option>
      <option>Bachelor of Science in Systems Engineering</option>
      <option>Bachelor of Music in Jazz Studies</option>
      <option>Bachelor of Music in Composition</option>
      <option>Bachelor of Music in Performance</option>
      <option>Bachelor of Music in Theory</option>
      <option>Bachelor of Music in Music Education</option>
      <option>Bachelor of Science in Veterinary Technology</option>
      <option>Master degrees</option>
      <option>For a more comprehensive list, see List of master's degrees.</option>
      <option>Master of Accountancy</option>
      <option>Master of Accounting and Information Systems</option>
      <option>Master of Advanced Study</option>
      <option>Master of Applied Finance</option>
      <option>Master of Applied Mathematical Sciences</option>
      <option>Master of Applied Psychology</option>
      <option>Master of Applied Science</option>
      <option>Master of Architecture</option>
      <option>Master of Arts</option>
      <option>Master of Arts in Archives and Records Management</option>
      <option>Master of Arts in Bioethics</option>
      <option>Master of Arts in Liberal Studies</option>
      <option>Master of Arts in Museum Studies</option>
      <option>Master of Arts in Strategic Communication Management</option>
      <option>Master of Arts in Teaching</option>
      <option>Master of Athletic Training</option>
      <option>Master of Bioethics</option>
      <option>Master of Bioinformatics</option>
      <option>Master of Biotechnology</option>
      <option>Master of Business Administration</option>
      <option>Master of Business Administration Management of Technology</option>
      <option>Master of Business</option>
      <option>Master of Business Economics</option>
      <option>Master of Business Engineering</option>
      <option>Master of Business Informatics</option>
      <option>Master of Chemistry</option>
      <option>Master of City Planning</option>
      <option>Master of Commerce</option>
      <option>Master of Community Health</option>
      <option>Master of Computational Finance</option>
      <option>Master of Computer Applications</option>
      <option>Master of Computer Science</option>
      <option>Master of Communication</option>
      <option>Master of Counselling (or Counseling)</option>
      <option>Master of Criminal Justice</option>
      <option>Master in Creative Technologies</option>
      <option>Master of Design</option>
      <option>Master of Divinity</option>
      <option>Master of Economics</option>
      <option>Master of Education</option>
      <option>Master of Educational Technology</option>
      <option>Master of Engineering</option>
      <option>Master of Engineering Management</option>
      <option>Master of Enterprise</option>
      <option>Master of European Law</option>
      <option>Master of Finance</option>
      <option>Master of Financial Economics</option>
      <option>Master of Financial Engineering</option>
      <option>Master of Financial Mathematics</option>
      <option>Master of Fine Arts</option>
      <option>Master of Geospatial Science &amp; Technology</option>
      <option>Master of Health Administration</option>
      <option>Master of Health Science</option>
      <option>Master of Humanities</option>
      <option>Master of Industrial and Labor Relations</option>
      <option>Master of International Affairs</option>
      <option>Master of International Business</option>
      <option>Master of International Economics</option>
      <option>Master of International Public Policy</option>
      <option>Master of International Studies</option>
      <option>Master of Information</option>
      <option>Master of Information Management</option>
      <option>Master of Information Systems</option>
      <option>Master of Information System Management</option>
      <option>Master of Islamic Studies</option>
      <option>Master of IT</option>
      <option>Master of Jurisprudence</option>
      <option>Master of Laws</option>
      <option>Master of Studies in Law</option>
      <option>Master of Landscape Architecture</option>
      <option>Master of Letters</option>
      <option>Master of Liberal Arts</option>
      <option>Master of Library and Information Science</option>
      <option>Master of Management</option>
      <option>Master of Mass Communication and Journalism</option>
      <option>Master of Mathematical Finance</option>
      <option>Master of Mathematics</option>
      <option>Master of Mathematics and Computer Science</option>
      <option>Master of Mathematics and Philosophy</option>
      <option>Master of Medical Science</option>
      <option>Master of Medicine</option>
      <option>Master of Military Art and Science</option>
      <option>Master of Music</option>
      <option>Master of Network and Communications Management</option>
      <option>Master of Occupational Therapy</option>
      <option>Master of Pharmacy</option>
      <option>Master of Philosophy</option>
      <option>Master of Physician Assistant Studies</option>
      <option>Master of Physics</option>
      <option>Master of Political Science</option>
      <option>Master of Professional Studies</option>
      <option>Master of Psychology</option>
      <option>Master of Public Administration</option>
      <option>Master of Public Affairs</option>
      <option>Master of Public Diplomacy</option>
      <option>Master of Public Health</option>
      <option>Master of Public Management</option>
      <option>Master of Public Policy</option>
      <option>Master of Public Relations</option>
      <option>Master of Public Service</option>
      <option>Master of Quantitative Finance</option>
      <option>Master of Rabbinic Studies</option>
      <option>Master of Real Estate Development</option>
      <option>Master of Religious Education</option>
      <option>Master of Research</option>
      <option>Master of Sacred Music</option>
      <option>Master of Sacred Theology</option>
      <option>Master of Science</option>
      <option>Master of Science in Applied Cognition and Neuroscience</option>
      <option>Master of Science in Athletic Training</option>
      <option>Master of Science in Bioinformatics</option>
      <option>Master of Science in Business Analytics</option>
      <option>Master of Science in Clinical Epidemiology</option>
      <option>Master of Science in Computing Research</option>
      <option>Master of Science in Cyber Security</option>
      <option>Master of Science in Education</option>
      <option>Master of Science in Engineering</option>
      <option>Master of Science in Development Administration</option>
      <option>Master of Science in Finance</option>
      <option>Master of Science in Governance &amp; Organizational Sciences</option>
      <option>Master of Science in Government Contracts</option>
      <option>Master of Science in Health Informatics</option>
      <option>Master of Science in Human Resource Development</option>
      <option>Master of Science in Information Assurance</option>
      <option>Master of Science in Information Systems</option>
      <option>Master of Science in Information Technology</option>
      <option>Master of Science in Leadership</option>
      <option>Master of Science in Management</option>
      <option>Master of Science in Nursing</option>
      <option>Master of Science in Project Management</option>
      <option>Master of Science in Quality Assurance</option>
      <option>Master of Science in Risk Management</option>
      <option>Master of Science in Supply Chain Management</option>
      <option>Master of Science in Teaching</option>
      <option>Master of Science in Taxation</option>
      <option>Master of Social Science</option>
      <option>Master of Social Work</option>
      <option>Master of Statistics</option>
      <option>Master of Strategic Studies</option>
      <option>Master of Studies</option>
      <option>Master of Surgery</option>
      <option>Master of Theological Studies</option>
      <option>Master of Technology</option>
      <option>Master of Theology</option>
      <option>Master of Urban Planning</option>
      <option>Master of Veterinary Science</option>
      <option>Doctoral degrees</option>
      <option>Doctor of Arts</option>
      <option>Doctor of Audiology</option>
      <option>Doctor of Aviation (Av.D.)</option>
      <option>Doctor of Business Administration</option>
      <option>Doctor of Canon Law</option>
      <option>Doctor of Chiropractic</option>
      <option>Doctor of Commerce</option>
      <option>Doctor of Community Health</option>
      <option>Doctor of Dental Surgery</option>
      <option>Doctor of Divinity</option>
      <option>Doctor of Education</option>
      <option>Doctor of Engineering</option>
      <option>Doctor of Fine Arts</option>
      <option>Doctor of Health Administration</option>
      <option>Doctor of Health Science</option>
      <option>Doctor of Juridical Science; Juris Doctor</option>
      <option>Doctor of Law; Legum Doctor</option>
      <option>Doctor of Liberal Studies</option>
      <option>Doctor of Management</option>
      <option>Doctor of Medicine (M.D.)</option>
      <option>Doctor of Ministry</option>
      <option>Doctor of Modern Languages</option>
      <option>Doctor of Musical Arts</option>
      <option>Doctor of Naturopathic Medicine</option>
      <option>Doctor of Optometry</option>
      <option>Doctor of Osteopathic Medicine</option>
      <option>Doctor of Pharmacy</option>
      <option>Doctor of Philosophy</option>
      <option>Doctor of Public Administration</option>
      <option>Doctor of Science</option>
      <option>Doctor of Theology</option>
      <option>Doctor of Veterinary Medicine</option>
      <option>Doctor of Radio oncology</option>
</select>

         
         </label>
    <br/>
    <label>
         College/School
         <input  name="csname" type="text" required="required" onChange={this.handleChange}/>
         </label><br/>
    <label>
         Skills
         <select class="dropdown" name="skills" required="required" value={this.state.skills} onChange={this.handleChange}>
      <option >Select</option>      
      <option>Effective communication</option>
      <option>Teamwork</option>
      <option>Responsibility</option>
      <option>Creativity</option>
      <option>Problem-solving</option>
      <option>Leadership</option>
      <option>Extroversion</option>
      <option>People skills</option>
      <option>Openness</option>
      <option>Adaptability</option>
      <option>Time management</option>
      <option>Effective communication</option>
      <option>Emotional intelligence</option>
      <option>Conflict management</option>
      <option>Teamwork skills</option>
      <option>Stress management</option>
      <option>Productivity &amp; organization</option>
      <option>Critical thinking</option>
      <option>Attention to detail</option>
      <option>Adaptability</option>
      <option>Data analysis</option>
      <option>Web analytics</option>
      <option>SEO/SEM</option>
      <option>HTML &amp; CSS</option>
      <option>Wordpress</option>
      <option>Email marketing</option>
      <option>Web scraping</option>
      <option>CRO and A/B Testing</option>
      <option>Data visualization &amp; pattern-finding through critical thinking</option>
      <option>Search Engine and Keyword Optimization</option>
      <option>Project/campaign management</option>
      <option>Social media and mobile marketing</option>
      <option>Paid social media advertisements</option>
      <option>B2B Marketing</option>
      <option>The 4 P-s of Marketing</option>
      <option>Consumer Behavior Drivers</option>
      <option>Brand management</option>
      <option>Creativity</option>
      <option>Copywriting</option>
      <option>Storytelling</option>
      <option>Sales</option>
      <option>CMS Tools</option>
      <option>Six Sigma techniques</option>
      <option>The McKinsey 7s Framework</option>
      <option>Porter’s Five Forces</option>
      <option>PESTEL</option>
      <option>Emotional Intelligence</option>
      <option>Dealing with work-related stress</option>
      <option>Motivation</option>
      <option>Task delegation</option>
      <option>Technological savviness</option>
      <option>People management</option>
      <option>Business Development</option>
      <option>Strategic Management</option>
      <option>Negotiation</option>
      <option>Planning</option>
      <option>Proposal writing</option>
      <option>Problem-solving</option>
      <option>Innovation</option>
      <option>Charisma</option>
      <option>Customer Relationship Management (CRM)</option>
      <option>Cold-calling</option>
      <option>Negotiation</option>
      <option>Public speaking</option>
      <option>Closing</option>
      <option>Lead generation</option>
      <option>Buyer-Responsive selling</option>
      <option>Buyer engagement</option>
      <option>Product knowledge</option>
      <option>Persuasion</option>
      <option>Effective communication and sociability</option>
      <option>Empathy</option>
      <option>Social media/digital communication</option>
      <option>Teamwork</option>
      <option>Time management</option>
      <option>Adobe Creative Suite: Illustrator, InDesign, Photoshop</option>
      <option>Dreamweaver</option>
      <option>Infographics</option>
      <option>HTML &amp; CSS</option>
      <option>Photo editing</option>
      <option>Typography: spacing, line height, layout, choosing fonts</option>
      <option>Storyboarding</option>
      <option>Targeting and marketing through visual communications</option>
      <option>Logo creation</option>
      <option>Digital printing</option>
      <option>Integration of visual communication in social media platforms</option>
      <option>Creativity</option>
      <option>Attention to detail &amp; aesthetics</option>
      <option>Interactive media design</option>
      <option>Color sense &amp; theory</option>
      <option>Ad design</option>
      <option>Active listening</option>
      <option>Microsoft Office Pack: Word, Excel, Access, Publisher, Outlook, Powerpoint</option>
      <option>Filing and paper management</option>
      <option>Data entry</option>
      <option>Bookkeeping through Excel or TurboTax</option>
      <option>Research and data analysis</option>
      <option>Basic knowledge of user interface communication</option>
      <option>Technical writing</option>
      <option>Cloud networking and file sharing</option>
      <option>Microsoft Excel (Advanced)</option>
      <option>Enterprise Resource Planning</option>
      <option>Big Data Analysis &amp; SQL</option>
      <option>Know Your Customers (KYC)</option>
      <option>Cognos Analytics (IBM)</option>
      <option>Visual Basic</option>
      <option>Accounting Software</option>
      <option>Revenue recognition</option>
      <option>Anti Money Laundering</option>
      <option>Clear communication</option>
      <option>General business knowledge</option>
      <option>Numerical competence</option>
      <option>Accuracy</option>
      <option>Attention to detailMicrosoft Excel (Advanced)</option>
      <option>Enterprise Resource Planning</option>
      <option>Big Data Analysis &amp; SQL</option>
      <option>Know Your Customers (KYC)</option>
      <option>Cognos Analytics (IBM)</option>
      <option>Visual Basic</option>
      <option>Accounting Software</option>
      <option>Revenue recognition</option>
      <option>Anti Money Laundering</option>
      <option>Clear communication</option>
      <option>General business knowledge</option>
      <option>Numerical competence</option>
      <option>Accuracy</option>
      <option>Attention to detail</option>
      <option>Updated curriculum knowledge</option>
      <option>Research &amp; Data analysis</option>
      <option>Communication</option>
      <option>Educational platforms (software like Elearn)</option>
      <option>Stress management</option>
      <option>Technological &amp; digital literacy</option>
      <option>Patience</option>
      <option>Critical thinking</option>
      <option>Enthusiasm</option>
      <option>Motivation</option>
      <option>HTML/CSS</option>
      <option>CSS preprocessors</option>
      <option>Javascript</option>
      <option>Wordpress</option>
      <option>Graphic User Interfaces (GUI)</option>
      <option>Git/Version control (Github, gitlab)</option>
      <option>Search Engine Optimization (SEO)</option>
      <option>Application Programming Interface (API)</option>
      <option>Adobe Photoshop, InDesign</option>
      <option>Content Management Systems (CMS)</option>
      <option>Testing/Debugging</option>
      <option>Responsive design principles</option>
      <option>SQL (a must) and Hive (optional)</option>
      <option>Programming language (R, Python, Scala, Matlab)</option>
      <option>STATA, SPSS, SAS</option>
      <option>Data Mapping</option>
      <option>Entity Relationship Diagrams</option>
      <option>Wireframes</option>
      <option>Big Data tools</option>
      <option>Microsoft Visio</option>
      <option>Agile Business Analysis</option>
      <option>Machine learning</option>
      <option>System Context Diagrams</option>
      <option>Business Process Modeling</option>
      <option>Technical and non-technical communication</option>
      <option>Mathematics</option>
      <option>CPR</option>
      <option>Patient care and assistance</option>
      <option>Paperwork/record-keeping abilities</option>
      <option>Compassion</option>
      <option>Advanced Cardiac Life Support (ACLS)</option>
      <option>Telemetry</option>
      <option>Attention to detail</option>
      <option>Physical endurance</option>
      <option>Acute care</option>
      <option>Infection control</option>
      <option>Surgery preparation</option>
</select>

         
         </label>
    <br/>
    <label>
         Internships/Past Experience
         <textArea class="input1" name="inter" rows="4" columns="40"   onChange={this.handleChange} />
         </label>
         <br/>
         </div>
         <br/>
         
         <div class="inner-wrap">
         <label>
         Jobs Interested in 
         <select class="dropdown" name="jbin" required="required" onChange={this.handleChange}>
       <option >Select</option>     
      <option>Account Collectors</option>
      <option>Accountants</option>
      <option>Accounting Clerks</option>
      <option>Actors</option>
      <option>Actuaries</option>
      <option>Administrative Assistants</option>
      <option>Administrative Services Managers</option>
      <option>Adult Literacy Teachers</option>
      <option>Advertising Managers</option>
      <option>AAdvertising Sales Agents</option>
      <option>AAerospace Engineering and Operations Technicians</option>
      <option>Aerospace Engineers</option>
      <option>Agents and Business Managers of Artists, Performers, and Athletes</option>
      <option>Agricultural Engineers</option>
      <option>Agricultural Inspectors</option>
      <option>Agricultural Managers</option>
      <option>Agricultural Scientists</option>
      <option>Agricultural Technicians</option>
      <option>Agricultural Workers</option>
      <option>Air Conditioning and Heating Mechanics and Installers</option>
      <option>Air Traffic Controllers</option>
      <option>Aircraft Cargo Handling Supervisors</option>
      <option>Aircraft Equipment Mechanics and Technicians</option>
      <option>Airfield Operations Specialists</option>
      <option>Airline and Commercial Pilots</option>
      <option>Ambulance Dispatchers</option>
      <option>Ambulance Drivers and Attendants (Except Emergency Medical Technicians)</option>
      <option>Amusement and Recreation Attendants</option>
      <option>Animal Care and Service Workers</option>
      <option>Animal Control Workers</option>
      <option>Announcers</option>
      <option>Anthropologists</option>
      <option>Appraisers and Assessors of Real Estate</option>
      <option>Arbitrators</option>
      <option>Archeologists</option>
      <option>Architects</option>
      <option>Architectural Managers</option>
      <option>Archivists</option>
      <option>Art Directors</option>
      <option>Assemblers</option>
      <option>Astronomers</option>
      <option>Athletes and Sports Competitors</option>
      <option>Athletic Trainers</option>
      <option>Atmospheric Scientists</option>
      <option>Attorneys</option>
      <option>Avionics Equipment Mechanics and Technicians</option>
      <option>Audio and Video Technicians</option>
      <option>Audiologists</option>
      <option>Auditing Clerks</option>
      <option>Auditors</option>
      <option>Authors</option>
      <option>Automated Teller Machine (ATM) Repairers</option>
      <option>Automotive and Watercraft Service Attendants</option>
      <option>Automotive Body and Glass Repairers</option>
      <option>Automotive Service Technicians and Mechanics</option>
      <legend>All "B" Careers</legend>
      <option>Baggage Porters and Bellhops</option>
      <option>Bailiffs</option>
      <option>Bakers</option>
      <option>Barbers</option>
      <option>Bartenders</option>
      <option>Behavioral Disorder Counselors</option>
      <option>Benefits Managers</option>
      <option>Bicycle Repairers</option>
      <option>Bill Collectors</option>
      <option>Biochemists and Biophysicists</option>
      <option>Biological Scientists (all other)</option>
      <option>Biological Technicians</option>
      <option>Biomedical Engineers</option>
      <option>Blockmasons</option>
      <option>Boiler Operators</option>
      <option>Boilermakers</option>
      <option>Bookkeeping Clerks</option>
      <option>Brazers</option>
      <option>Brickmasons</option>
      <option>Bridge and Lock Tenders</option>
      <option>Broadcast Engineering Technicians</option>
      <option>Budget Analysts</option>
      <option>Building Cleaners</option>
      <option>Building Cleaning Workers (all other)</option>
      <option>Building Inspectors</option>
      <option>Bus Drivers</option>
      <option>Business Operations Specialists (all other)</option>
      <option>Butchers</option>
      <option>Buyers</option>
      
      <option>Camera and Photographic Equipment Repairers</option>
      <option>Camera Operators</option>
      <option>Cardiovascular Technologists and Technicians</option>
      <option>Career Counselors</option>
      <option>Career and Technical Education Teachers</option>
      <option>Cargo and Freight Agents</option>
      <option>Carpenters</option>
      <option>Carpet Installers</option>
      <option>Cartographers</option>
      <option>Cashiers</option>
      <option>Ceiling Tile Installers</option>
      <option>Cement Masons</option>
      <option>Chauffeurs</option>
      <option>Chefs</option>
      <option>Chemical Engineers</option>
      <option>Chemical Plant and System Operators</option>
      <option>Chemical Technicians</option>
      <option>Chemists</option>
      <option>Childcare Center Directors</option>
      <option>Childcare Workers</option>
      <option>Chiropractors</option>
      <option>Choreographers</option>
      <option>Civil Engineering Technicians</option>
      <option>Civil Engineers</option>
      <option>Claims Adjusters, Appraisers, Examiners, and Investigators</option>
      <option>Clergy</option>
      <option>Clerks</option>
      <option>Bookkeeping, Accounting, and Auditing Clerks</option>
      <option>Counter and Rental Clerks</option>
      <option>Financial Clerks</option>
      <option>General Office Clerks</option>
      <option>Information Clerks</option>
      <option>Mail Clerks and Mail Machine Operators (Except Postal Service)</option>
      <option>Material Recording Clerks</option>
      <option>Clinical Laboratory Technologists and Technicians</option>
      <option>Coaches and Scouts</option>
      <option>Coating Workers</option>
      <option>Commercial Designers</option>
      <option>Commercial Divers</option>
      <option>Commodities Sales Agents</option>
      <option>Communications Equipment Operators (all other)</option>
      <option>Community and Social Service Specialists (all other)</option>
      <option>Community Association Managers</option>
      <option>Community Health Workers</option>
      <option>Community Service Managers</option>
      <option>Compensation, Benefits, and Job Analysis Specialists</option>
      <option>Compensation and Benefits Managers</option>
      <option>Compliance Officers</option>
      <option>Composers - Music</option>
      <option>Computer Control Programmers and Operators</option>
      <option>Computer Hardware Engineers</option>
      <option>Computer Managers</option>
      <option>Computer Network Architects</option>
      <option>Computer Occupations (all other)</option>
      <option>Computer Operators</option>
      <option>Computer Programmers</option>
      <option>Computer Repairers</option>
      <option>Computer Scientists</option>
      <option>Computer Software Engineers</option>
      <option>Computer Support Specialists</option>
      <option>Computer Systems Analysts</option>
      <option>Computer Systems Administrators</option>
      <option>Concierges</option>
      <option>Conciliators</option>
      <option>Conservation Scientists</option>
      <option>Conservation Technicians</option>
      <option>Construction and Related Workers (all other)</option>
      <option>Construction Equipment Operators</option>
      <option>Construction Inspectors</option>
      <option>Construction Laborers and Helpers</option>
      <option>Construction Managers</option>
      <option>Continuous Mining Machine Operators</option>
      <option>Control and Valve Installers and Repairers (Except Mechanical Door)</option>
      <option>Cooks</option>
      <option>Correctional Officers</option>
      <option>Correctional Treatment Specialists</option>
      <option>Correspondents</option>
      <option>Cosmetologists</option>
      <option>Cost Estimators</option>
      <option>Costume Attendants</option>
      <option>Counselors (all other)</option>
      <option>Counter and Rental Clerks</option>
      <option>Couriers and Messengers</option>
      <option>Court Reporters</option>
      <option>Craft Artists</option>
      <option>Credit Analysts</option>
      <option>Credit Counselors</option>
      <option>Crossing Guards</option>
      <option>Curators</option>
      <option>Customer Service Representatives</option>
      <option>Cutters and Trimmers (Hand)</option>
      
      <option>Dancers</option>
      <option>Data Entry Keyers</option>
      <option>Database Administrators</option>
      <option>Delivery Truck Drivers and Driver/Sales Workers</option>
      <option>Demonstrators and Product Promoters</option>
      <option>Dental Assistants</option>
      <option>Dental Hygienists</option>
      <option>Dental Laboratory Technicians</option>
      <option>Dentists</option>
      <option>Derrick Operators (Oil and Gas)</option>
      <option>Designers (all other)</option>
      <option>Desktop Publishers</option>
      <option>Development Managers</option>
      <option>Diagnostic Medical Sonographers</option>
      <option>Diesel Service Technicians and Mechanics</option>
      <option>Dietitians</option>
      <option>Directors - Music</option>
      <option>Directors - Film, Theater</option>
      <option>Dishwashers</option>
      <option>Dispatchers (Police, Fire, and Ambulance)</option>
      <option>Dispatchers (Except Police, Fire, and Ambulance)</option>
      <option>Doctors</option>
      <option>Door-to-Door Sales Workers, News and Street Vendors, and Related Workers</option>
      <option>Drafters</option>
      <option>Drywall Installers</option>
      
      <option>Earth Drillers (Except Oil and Gas)</option>
      <option>Economists</option>
      <option>Editors</option>
      <option>Education Administrators - Postsecondary</option>
      <option>Education Administrators - Elementary, Middle, and High School</option>
      <option>Education Administrators (all other)</option>
      <option>Education, Training, and Library Workers (all other)</option>
      <option>Electrical and Electronics Engineering Technicians</option>
      <option>Electrical and Electronics Engineers</option>
      <option>Electrical and Electronics Installers and Repairers</option>
      <option>Electricians</option>
      <option>Electro-mechanical Technicians</option>
      <option>Electronic Home Entertainment Equipment Installers and Repairers</option>
      <option>Elementary School Principals</option>
      <option>Elementary School Teachers</option>
      <option>Elevator Installers and Repairers</option>
      <option>Embalmers</option>
      <option>Emergency Management Directors</option>
      <option>Emergency Medical Technicians (EMTs)</option>
      <option>Emergency Response Dispatchers</option>
      <option>Engineering Managers</option>
      <option>Engineering Technicians, except Drafters (all other)</option>
      <option>Engineers:</option>
      <option>Aerospace Engineers</option>
      <option>Agricultural Engineers</option>
      <option>Biomedical Engineers</option>
      <option>Chemical Engineers</option>
      <option>Civil Engineers</option>
      <option>Computer Hardware Engineers</option>
      <option>Computer Software Engineers</option>
      <option>Electrical and Electronics Engineers</option>
      <option>Environmental Engineers</option>
      <option>Flight Engineers</option>
      <option>Geological Engineers</option>
      <option>Health and Safety Engineers</option>
      <option>Industrial Engineers</option>
      <option>Manufacturing Engineers</option>
      <option>Marine Engineers</option>
      <option>Materials Engineers</option>
      <option>Mechanical Engineers</option>
      <option>Mining Engineers</option>
      <option>Mining Safety Engineers</option>
      <option>Nuclear Engineers</option>
      <option>Petroleum Engineers</option>
      <option>Sales Engineers</option>
      <option>Stationary Engineers</option>
      ion>
      <option>Entertainers and Performers, Sports and Related Workers (all other)</option>
      <option>Entertainment Attendants and Related Workers (all other)</option>
      <option>Environmental Engineering Technicians</option>
      <option>Environmental Engineers</option>
      <option>Environmental Science and Protection Technicians</option>
      <option>Environmental Scientists and Specialists</option>
      <option>Epidemiologists</option>
      <option>Etchers and Engravers</option>
      <option>Exercise Physiologists</option>
      <option>Explosives Workers, Ordnance Handling Experts, and Blasters</option>
      <option>Extraction Worker Helpers</option>
      <option>Extraction Workers (all other)</option>
      
      <option>Fabric and Apparel Patternmakers</option>
      <option>Fabric Menders (Except Garment)</option>
      <option>Fabricators</option>
      <option>Family Therapists</option>
      <option>Farm Labor Contractors</option>
      <option>Farmers</option>
      <option>Fashion Designers</option>
      <option>Fence Erectors</option>
      <option>Film Editors</option>
      <option>Financial Analysts</option>
      <option>Financial Clerks</option>
      <option>Financial Clerks (all other)</option>
      <option>Financial Examiners</option>
      <option>Financial Managers</option>
      <option>Financial Services Sales Agents</option>
      <option>Financial Specialists (all other)</option>
      <option>Fine Artists</option>
      <option>Fire Inspectors and Investigators</option>
      <option>Firefighters</option>
      <option>First-Line Supervisors of…</option>
      <option>Construction Trades and Extraction Workers</option>
      <option>Correctional Officers</option>
      <option>Farming, Fishing, and Forestry Workers</option>
      <option>Fire Fighting and Prevention Workers</option>
      <option>Food Preparation and Serving Workers</option>
      <option>Helpers, Laborers, and Material Movers (Hand)</option>
      <option>Housekeeping and Janitorial Workers</option>
      <option>Landscaping, Lawn Service, and Groundskeeping Workers</option>
      <option>Mechanics, Installers, and Repairers</option>
      <option>Nonretail Sales Workers</option>
      <option>Office and Administrative Support Workers</option>
      <option>Personal Service Workers</option>
      <option>Police and Detectives</option>
      <option>Production and Operating Workers</option>
      <option>First-line Supervisors of Protective Service Workers (all other)</option>
      <option>Retail Sales Workers</option>
      <option>Transportation and Material-Moving Machine and Vehicle Operators</option>
      <option>Fishing Workers</option>
      <option>Fitness Trainers and Instructors</option>
      <option>Flight Attendants</option>
      <option>Flight Engineers</option>
      <option>Floor Layers</option>
      <option>Floor Sanders and Finishers</option>
      <option>Floral Designers</option>
      <option>Food and Beverage Serving and Related Workers</option>
      <option>Food Preparation Workers</option>
      <option>Food Processing Workers</option>
      <option>Food Science Technicians</option>
      <option>Food Scientists</option>
      <option>Food Service Managers</option>
      <option>Forensic Science Technicians</option>
      <option>Forest and Conservation Technicians</option>
      <option>Forest and Conservation Workers</option>
      <option>Forest Fire Inspectors and Prevention Specialists</option>
      <option>Foresters</option>
      <option>Fundraisers</option>
      <option>Fundraising Managers</option>
      <option>Funeral Attendants</option>
      <option>Funeral Service Workers</option>
      
      <option>G.E.D. Teachers</option>
      <option>Gaming Change Persons and Booth Cashiers</option>
      <option>Gaming Services Workers</option>
      <option>Gaming Surveillance Officers</option>
      <option>Gas Compressor and Gas Pumping Station Operators</option>
      <option>Gas Plant Operators</option>
      <option>General Maintenance and Repair Workers</option>
      <option>General Office Clerks</option>
      <option>Genetic Counselors</option>
      <option>Geographers</option>
      <option>Geological Engineers</option>
      <option>Geological Technicians</option>
      <option>Geoscientists</option>
      <option>Glaziers</option>
      <option>Graders and Sorters (Agricultural Products)</option>
      <option>Graduate Teaching Assistants</option>
      <option>Graphic Designers</option>
      <option>Grinding and Polishing Workers (Hand)</option>
      <option>Grounds Maintenance Workers</option>
      
      <option>Hairstylists</option>
      <option>Hand Laborers</option>
      <option>Hazardous Materials Removal Workers</option>
      <option>Head Cooks</option>
      <option>Health and Safety Engineers</option>
      <option>Health Diagnosing and Treating Practitioners (all other)</option>
      <option>Health Educators and Community Health Workers</option>
      <option>Health Information Technicians</option>
      <option>Health Services Managers</option>
      <option>Health Technologists and Technicians (all other)</option>
      <option>Healthcare Practitioners and Technical Workers (all other)</option>
      <option>Healthcare Support Workers (all other)</option>
      <option>Hearing Officers</option>
      <option>Heating and Air Conditioning Mechanics and Installers</option>
      <option>Heavy and Tractor-trailer Truck Drivers</option>
      <option>Heavy Vehicle Service Technicians</option>
      <option>High School Equivalency Diploma Teachers</option>
      <option>High School Principals</option>
      <option>High School Teachers</option>
      <option>Highway Maintenance Workers</option>
      <option>Historians</option>
      <option>Home Appliance Repairers</option>
      <option>Home Health Aides</option>
      <option>Hotel Managers</option>
      <option>Housekeeping Cleaners</option>
      <option>Human Resources Managers</option>
      <option>Human Resources Specialists</option>
      <option>Human Service Assistants</option>
      <option>Hunting Workers</option>
      <option>Hydrologists</option>
      
      <option>Industrial Designers</option>
      <option>Industrial Engineering Technicians</option>
      <option>Industrial Engineers</option>
      <option>Industrial Machinery Mechanics and Maintenance Workers</option>
      <option>Industrial Production Managers</option>
      <option>Information Clerks</option>
      <option>Information Research Scientists</option>
      <option>Information Security Analysts</option>
      <option>Information Systems Managers</option>
      <option>Inspectors, Testers, Sorters, Samplers, and Weighers</option>
      <option>Installation, Maintenance, and Repair Worker Helpers</option>
      <option>Installation, Maintenance, and Repair Workers (all other)</option>
      <option>Instructional Coordinators</option>
      <option>Insulation Workers</option>
      <option>Insurance Sales Agents</option>
      <option>Insurance Underwriters</option>
      <option>Interior Designers</option>
      <option>Interpreters</option>
      <option>Iron Workers</option>
      
      <option>Janitors</option>
      <option>Jewelers</option>
      <option>Job Analysis Specialists</option>
      <option>Journalists</option>
      <option>Judges</option>
      
      <option>Kindergarten Teachers</option>
      
      <option>Labor Relations Specialists</option>
      <option>Laboratory Animal Caretakers</option>
      <option>Landscape Architects</option>
      <option>Lawyers</option>
      <option>Layout Workers (Metal and Plastic)</option>
      <option>Legal Assistants</option>
      <option>Legal Support Workers (all other)</option>
      <option>Legislators</option>
      <option>Librarians</option>
      <option>Library Technicians and Assistants</option>
      <option>Licensed Practical and Licensed Vocational Nurses</option>
      <option>Life Scientists (all other)</option>
      <option>Life, Physical, and Social Science Technicians (all other)</option>
      <option>Lifeguards and Other Recreational Protective Service Workers</option>
      <option>Line Installers and Repairers</option>
      <option>Loan Officers</option>
      <option>Locker Room, Coatroom, and Dressing Room Attendants</option>
      <option>Locksmiths and Safe Repairers</option>
      <option>Lodging Managers</option>
      <option>Logging Workers</option>
      <option>Logisticians</option>
      
      <option>Machine and Equipment Setters, Operators and Tenders:</option>
      <option>Adhesive Bonding Machine Operators and Tenders</option>
      <option>Chemical Equipment Operators and Tenders</option>
      <option>Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders</option>
      <option>Cooling and Freezing Equipment Operators and Tenders</option>
      <option>Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders</option>
      <option>Cutting and Slicing Machine Setters, Operators, and Tenders</option>
      <option>Extruding and Forming Machine Setters, Operators, and Tenders (Synthetic and Glass Fibers)</option>
      <option>Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders</option>
      <option>Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders</option>
      <option>Mixing and Blending Machine Setters, Operators, and Tenders</option>
      <option>Packaging and Filling Machine Operators and Tenders</option>
      <option>Paper Goods Machine Setters, Operators, and Tenders</option>
      <option>Photographic Process Workers and Processing Machine Operators</option>
      <option>Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tenders</option>
      <option>Sewing Machine Operators</option>
      <option>Shoe Machine Operators and Tenders</option>
      <option>Textile Bleaching and Dyeing Machine Operators and Tenders</option>
      <option>Textile Cutting Machine Setters, Operators, and Tenders</option>
      <option>Textile Knitting and Weaving Machine Setters, Operators, and Tenders</option>
      <option>Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tenders</option>
      <option>Machinists</option>
      <option>Maids</option>
      <option>Mail Clerks and Mail Machine Operators (Except Postal Service)</option>
      <option>Maintenance and Repair Workers, General</option>
      <option>Makeup Artists (Theatrical and Performance)</option>
      <option>Management Analysts</option>
      <option>Managers (all other)</option>
      <option>Manicurists</option>
      <option>Manufactured Building and Mobile Home Installers</option>
      <option>Manufacturing Engineers</option>
      <option>Manufacturing Sales Representatives</option>
      <option>Mapping Technicians</option>
      <option>Marble Setters</option>
      <option>Marine Mechanics</option>
      <option>Marine Engineers</option>
      <option>Market Research Analysts</option>
      <option>Marketing Managers</option>
      <option>Marriage and Family Therapists</option>
      <option>Masons: Brick, Block, Stone, and Cement</option>
      <option>Massage Therapists</option>
      <option>Material Movers</option>
      <option>Material Moving Workers (all other)</option>
      <option>Material Moving Machine Operators</option>
      <option>Materials Engineers</option>
      <option>Mathematical Science Occupations (all other)</option>
      <option>Materials Scientists</option>
      <option>Mathematical Technicians</option>
      <option>Mathematicians</option>
      <option>Meat, Poultry, and Fish Cutters and Trimmers</option>
      <option>Meat Packers</option>
      <option>Mechanical Door Repairers</option>
      <option>Mechanical Engineering Technicians</option>
      <option>Mechanical Engineers</option>
      <option>Mechanics - Automotive</option>
      <option>Mechanics - Diesel</option>
      <option>Mechanics - Heating, Air Conditioning, and Refrigeration</option>
      <option>Mechanics - Industrial Machinery</option>
      <option>Mechanics - Small Engine</option>
      <option>Media and Communication Equipment Workers (all other)</option>
      <option>Media and Communication Workers (all other)</option>
      <option>Mediators</option>
      <option>Medical Appliance Technicians</option>
      <option>Medical Assistants</option>
      <option>Medical Billing and Coding</option>
      <option>Medical Doctors</option>
      <option>Medical Equipment Repairers</option>
      <option>Medical Laboratory Technologists and Technicians</option>
      <option>Medical Records Technicians</option>
      <option>Medical Scientists</option>
      <option>Medical Services Managers</option>
      <option>Medical Transcriptionists</option>
      <option>Meeting, Convention, and Event Planners</option>
      <option>Mental Health Counselors</option>
      <option>Merchandise Displayers and Window Trimmers</option>
      <option>Metal Machine Workers</option>
      <option>Metal Workers</option>
      <option>Metal Workers and Plastic Workers (all other)</option>
      <option>Meteorologists</option>
      <option>Meter Readers (Utilities)</option>
      <option>Microbiologists</option>
      <option>Middle School Principals</option>
      <option>Middle School Teachers</option>
      <option>Millwrights</option>
      <option>Mine Cutting and Channeling Machine Operators</option>
      <option>Mine Shuttle Car Operators</option>
      <option>Mining Engineers</option>
      <option>Mining Machine Operators (all other)</option>
      <option>Mining Safety Engineers</option>
      <option>Mobile Equipment Service Technicians</option>
      <option>Models</option>
      <option>Model Makers (Wood)</option>
      <option>Molders, Shapers, and Casters (Except Metal and Plastic)</option>
      <option>Morticians</option>
      <option>Motel Managers</option>
      <option>Motion Picture Projectionists</option>
      <option>Motor Vehicle Operators (all other)</option>
      <option>Motorcycle Mechanics</option>
      <option>MRI Technologists</option>
      <option>Multimedia Artists and Animators</option>
      <option>Museum Technicians</option>
      <option>Music Directors and Composers</option>
      <option>Musical Instrument Repairers and Tuners</option>
      <option>Musicians</option>
      
      <option>Nail Technicians</option>
      <option>Natural Sciences Managers</option>
      <option>Naval Architects</option>
      <option>Network Architects</option>
      <option>Network Systems Administrators</option>
      <option>News Analysts</option>
      <option>Nuclear Engineers</option>
      <option>Nuclear Medicine Technologists</option>
      <option>Nuclear Technicians</option>
      <option>Nurses</option>
      <option>Nurse Anesthetists, Nurse Midwives, and Nurse Practitioners</option>
      <option>Nursing Assistants</option>
      <option>Nutritionists</option>
      
      <option>Office and Administrative Support Workers (all other)</option>
      <option>Office Clerks</option>
      <option>Office Machine Operators (Except Computer)</option>
      <option>Occupational Health and Safety Specialists</option>
      <option>Occupational Health and Safety Technicians</option>
      <option>Occupational Therapists</option>
      <option>Occupational Therapy Assistants and Aides</option>
      <option>Operations Research Analysts</option>
      <option>Ophthalmic Medical Technicians</option>
      <option>Opticians, Dispensing</option>
      <option>Optometrists</option>
      <option>Orderlies</option>
      <option>Orthotists</option>
      
      <option>Painters (Construction and Maintenance)</option>
      <option>Painting Workers</option>
      <option>Paperhangers</option>
      <option>Paralegals</option>
      <option>Paramedics</option>
      <option>Parking Enforcement Workers</option>
      <option>Parking Lot Attendants</option>
      <option>Patternmakers (Wood)</option>
      <option>Payroll Clerks</option>
      <option>Pedicurists</option>
      <option>Personal Care Aides</option>
      <option>Personal Care and Service Workers (all other)</option>
      <option>Personal Financial Advisors</option>
      <option>Pest Control Workers</option>
      <option>Petroleum Engineers</option>
      <option>Petroleum Pump System Operators, Refinery Operators, and Gaugers</option>
      <option>Petroleum Technicians</option>
      <option>Pharmacists</option>
      <option>Pharmacy Technicians</option>
      <option>Phlebotomists</option>
      <option>Photogrammetrists</option>
      <option>Photographers</option>
      <option>Physical Scientists (all other)</option>
      <option>Physical Therapist Assistants and Aides</option>
      <option>Physical Therapists</option>
      <option>Physician Assistants</option>
      <option>Physicians</option>
      <option>Physicists</option>
      <option>Pipefitters</option>
      <option>Pipelayers</option>
      <option>Plant and System Operators (all other)</option>
      <option>Plasterers and Stucco Masons</option>
      <option>Plastic Machine Workers</option>
      <option>Plumbers</option>
      <option>Podiatrists</option>
      <option>Police and Detectives</option>
      <option>Police Dispatchers</option>
      <option>Political Scientists</option>
      <option>Postal Service Workers</option>
      <option>Postmasters and Mail Superintendents</option>
      <option>Postsecondary Education Administrators</option>
      <option>Postsecondary Teachers</option>
      <option>Postsecondary Teachers (all other)</option>
      <option>Power Plant Operators, Distributors, and Dispatchers</option>
      <option>Practical Nurses, Licensed</option>
      <option>Precious Stone and Metal Workers</option>
      <option>Precision Instrument and Equipment Repairers (all other)</option>
      <option>Prepress Technicians and Workers</option>
      <option>Preschool Directors</option>
      <option>Preschool Teachers</option>
      <option>Pressers (Textile, Garment, and Related Materials)</option>
      <option>Print Binding and Finishing Workers</option>
      <option>Printing Press Operators</option>
      <option>Private Detectives and Investigators</option>
      <option>Probation Officers</option>
      <option>Producers - Film, Theater</option>
      <option>Production Managers</option>
      <option>Production Worker Helpers</option>
      <option>Production Workers (all other)</option>
      <option>Promotions Managers</option>
      <option>Proofreaders and Copy Markers</option>
      <option>Property Managers</option>
      <option>Prosthetists</option>
      <option>Protective Service Workers (all other)</option>
      <option>Psychiatric Technicians and Aides</option>
      <option>Psychologists</option>
      <option>Public Relations Managers</option>
      <option>Public Relations Specialists</option>
      <option>Pump Operators</option>
      <option>Purchasing Agents</option>
      <option>Purchasing Managers</option>
      
      <option>Quality Control Inspectors</option>
      <option>Quarry Rock Splitters</option>
      
      <option>Radiation Therapists</option>
      <option>Radio Operators</option>
      <option>Radio, Cellular, and Tower Equipment Installers and Repairers</option>
      <option>Radiologic Technologists</option>
      <option>Rail Transportation Workers (all other)</option>
      <option>Rail-Track Laying and Maintenance Equipment Operators</option>
      <option>Railroad Occupations</option>
      <option>Ranchers</option>
      <option>Real Estate Brokers and Sales Agents</option>
      <option>Real Estate Managers</option>
      <option>Receptionists</option>
      <option>Recreation Workers</option>
      <option>Recreational Therapists</option>
      <option>Recreational Vehicle Service Technicians</option>
      <option>Referees, Umpires, and Other Sports Officials</option>
      <option>Refractory Materials Repairers (Except Brickmasons)</option>
      <option>Refrigeration Mechanics and Installers</option>
      <option>Registered Nurses</option>
      <option>Rehabilitation Counselors</option>
      <option>Reinforcing Iron and Rebar Workers</option>
      <option>Religious Activities and Education Directors</option>
      <option>Religious Workers (all other)</option>
      <option>Repair and Maintenance Workers, General</option>
      <option>Reporters</option>
      <option>Residential Advisors</option>
      <option>Respiratory Therapists</option>
      <option>Retail Sales Workers</option>
      <option>Riggers</option>
      <option>Roof Bolters (Mining)</option>
      <option>Roofers</option>
      <option>Rotary Drill Operators (Oil and Gas)</option>
      <option>Roustabouts (Oil and Gas)</option>
      
      <option>Sales and Related Workers (all other)</option>
      <option>Sales Engineers</option>
      <option>Sales Managers</option>
      <option>Sales Representatives, Services (all other)</option>
      <option>School Counselors</option>
      <option>School Principals - Elementary, Middle, and High</option>
      <option>Science Technicians</option>
      <option>Secretaries</option>
      <option>Securities Sales Agents</option>
      <option>Security and Fire Alarm Systems Installers</option>
      <option>Security Guards</option>
      <option>Segmental Pavers</option>
      <option>Semi Truck Drivers</option>
      <option>Septic Tank Servicers and Sewer Pipe Cleaners</option>
      <option>Service Unit Operators (Oil, Gas, and Mining)</option>
      <option>Set and Exhibit Designers</option>
      <option>Sewers (Hand)</option>
      <option>Shampooers</option>
      <option>Sheet Metal Workers</option>
      <option>Shipping, Receiving, and Traffic Clerks</option>
      <option>Shoe and Leather Workers and Repairers</option>
      <option>Signal and Track Switch Repairers</option>
      <option>Singers</option>
      <option>Ski Patrol and Other Recreational Protective Service Workers</option>
      <option>Skincare Specialists</option>
      <option>Slaughterers</option>
      <option>Small Engine Mechanics</option>
      <option>Social Science Research Assistants</option>
      <option>Social Scientists and Related Workers (all other)</option>
      <option>Social Service Assistants</option>
      <option>Social Service Managers</option>
      <option>Social Workers</option>
      <option>Sociologists</option>
      <option>Software Developers</option>
      <option>Solar Photovoltaic Installers</option>
      <option>Solderers</option>
      <option>Sound Engineering Technicians</option>
      <option>Special Education Teachers</option>
      <option>Special Education Teachers (all other)</option>
      <option>Speech-Language Pathologists</option>
      <option>Stationary Engineers</option>
      <option>Statistical Assistants</option>
      <option>Statisticians</option>
      <option>Steamfitters</option>
      <option>Steel Workers</option>
      <option>Stonemasons</option>
      <option>Substance Abuse Counselors</option>
      <option>Subway and Streetcar Operators</option>
      <option>Surgeons</option>
      <option>Surgical Technologists</option>
      <option>Survey Researchers</option>
      <option>Surveying Technicians</option>
      <option>Surveyors</option>
      <option>Switchboard Operators (Including Answering Service)</option>
      <option>Systems Analysts</option>
      
      <option>Tailors, Dressmakers, and Custom Sewers</option>
      <option>Tank Car, Truck, and Ship Loaders</option>
      <option>Tapers</option>
      <option>Tax Examiners and Collectors, and Revenue Agents</option>
      <option>Tax Preparers</option>
      <option>Taxi Drivers</option>
      <option>Teacher Assistants</option>
      <option>Teachers - Adult Literacy and High School Equivalency Diploma</option>
      <option>Teachers - Career and Technical Education Teachers</option>
      <option>Teachers - High School</option>
      <option>Teachers - Kindergarten and Elementary School</option>
      <option>Teachers - Middle School</option>
      <option>Teachers - Postsecondary</option>
      <option>Teachers - Preschool</option>
      <option>Teachers - Special Education</option>
      <option>Teachers and Instructors (all other)</option>
      <option>Technical Writers</option>
      <option>Telecommunications Equipment Installers and Repairers (Except Line Installers)</option>
      <option>Telemarketers</option>
      <option>Telephone Operators</option>
      <option>Television, Video, and Motion Picture Camera Operators and Editors</option>
      <option>Tellers</option>
      <option>Terrazzo Workers</option>
      <option>Textile Careers</option>
      <option>Textile, Apparel, and Furnishings Workers (all other)</option>
      <option>Therapists (all other)</option>
      <option>Tile Setters</option>
      <option>Timekeeping Clerks</option>
      <option>Tire Builders</option>
      <option>Tire Repairers and Changers</option>
      <option>Tobacco Processing Workers</option>
      <option>Tool and Die Makers</option>
      <option>Tool Grinders, Filers, and Sharpeners</option>
      <option>Top Executives</option>
      <option>Tour Guides and Escorts</option>
      <option>Traffic Technicians</option>
      <option>Training Managers</option>
      <option>Training and Development Specialists</option>
      <option>Translators</option>
      <option>Transportation Attendants</option>
      <option>Transportation Inspectors</option>
      <option>Transportation Security Screeners</option>
      <option>Transportation Workers (all other)</option>
      <option>Transportation, Storage, and Distribution Managers</option>
      <option>Travel Agents</option>
      <option>Travel Clerks</option>
      <option>Travel Guides</option>
      <option>Truck Drivers - Delivery and Sales Workers</option>
      <option>Truck Drivers - Heavy and Tractor-trailer</option>
      
      <option>Ultrasound Technician</option>
      <option>Umpires, Referees, and Other Sports Officials</option>
      <option>Upholsterers</option>
      <option>Urban and Regional Planners</option>
      <option>Ushers, Lobby Attendants, and Ticket Takers</option>
      
      <option>Vascular Technologists</option>
      <option>Vending, Coin, and Amusement Machine Servicers and Repairers</option>
      <option>Veterinarians</option>
      <option>Veterinary Assistants</option>
      <option>Veterinary Technologists and Technicians</option>
      <option>Video Editors</option>
      <option>Vocational Nurses, Licensed</option>
      
      <option>Waiters and Waitresses</option>
      <option>Watch Repairers</option>
      <option>Water and Wastewater Treatment Plant and System Operators</option>
      <option>Water Transportation Occupations</option>
      <option>Web Developers</option>
      <option>Weighers, Measurers, Checkers, and Samplers, Recordkeeping</option>
      <option>Welders and Cutters</option>
      <option>Wellhead Pumpers</option>
      <option>Wholesale Sales Representatives</option>
      <option>Wildlife Biologists</option>
      <option>Wind Turbine Technicians</option>
      <option>Word Processors and Typists</option>
      <option>Woodworkers</option>
      <option>Woodworkers (all other)</option>
      <option>Writers</option>
      
      <option >X-Ray Technologists</option>
      <option >All "Z" Careers</option>
      <option>Zoologists</option>
</select>

         
         </label>
    <br/>
    <label>
         Upload Your Passport size Picture
         <input type="file" name="photo" onChange={this.fileSelectedHandler}/>
         </label>
         <br/>
         </div>
         <br/>
         
         <div class="inner-wrap">
         <label>
         Reference Person
         <select class="dropdown" name="contactpersontitle"   onChange={this.handleChange}>
            <option >Select</option>
            <option value="Mr.">Mr</option><br/>
            <option value="Mrs.">Mrs</option><br/>
            <option value="Miss">Miss</option><br/>
         </select>
         
         <input  name="contactperson" type="text"  onChange={this.handleChange}/>
         
         </label>
         <br/>
         <label>
         Contact Email
         <input  name="contactemail" type="email" onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Contact 
         <input  name="contactnumber" type="tel"   onChange={this.handleChange}/>
         </label>
         <br/>
      
         
         </div>
         

         <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      
         
         </form>
         );
   
}}