import React from 'react';

import {Redirect} from 'react-router-dom';
import './formstyle.css';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import EducationSelecter from '../EducationSelecter'
import JobSelector from '../JobSelector'
import SkillSelector from '../SkillSelector'


export default class Resume extends React.Component
{

   static contextType = FirebaseContext;
   constructor(props){
   super(props);
      this.state = {
         form: {

         },
         noOfEdu:0,
         noOfSki:0,
         Submitted: false


      };

      this.eduPush = () => { 
         var a=[]
          for(let i=0; i<this.state.noOfEdu; i++)
         a.push(<>
      <label>
         Education
         <EducationSelecter name={"education"+i} required="required"  onChange={this.handleChange}/>
         </label> <br/>
         <label>
         College/School
         <input  name={"csname"+i} type="text" required="required" onChange={this.handleChange}/>
         </label><br/>

    
         </>)
         return a
      }

      this.skiPush = () => { 
         var a=[]
          for(let i=0; i<this.state.noOfSki; i++)
         a.push(<>
      <label>
         Skills
         <SkillSelector  name={"skills"+i} required="required" value={this.state.skills} onChange={this.handleChange}/>
      


         
         </label>
    <br/>
    
         </>)
         return a

      }


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
    if(this.validateForm()) return;
   const {
         firestore, auth
      } = this.context;
      
      console.log(this.state.form)
      console.log('Submitted');
      
      
      firestore.collection("users").doc(auth.currentUser.uid).update(
         this.state.form
      )

         

        //window.location.href("www.google.com");
      
      event.preventDefault();
   };

  validateForm = ()  => {
  var x = document.forms["resume"]["fname"].value;
  var y = document.forms["resume"]["lname"].value;
  var z = document.forms["resume"]["date"].value;
  var a = document.forms["resume"]["nationality"].value;
  var b = document.forms["resume"]["fsname"].value;
  var c = document.forms["resume"]["Addline1"].value;
  var d = document.forms["resume"]["Addline2"].value;
  var e = document.forms["resume"]["City"].value;
  var f = document.forms["resume"]["State"].value;
  var g = document.forms["resume"]["PinCode"].value;
  var h = document.forms["resume"]["Country"].value;
 
  var j = document.forms["resume"]["contactnumber"].value;
  if (x === ""||y === ""||z === ""||a === ""||b === ""||c === ""||d === ""||e === ""||f === ""||g === ""||h === ""||j === "") {
    
    return true;

  }
  else{
    this.setState({Submitted: true})
  }
}
   render()
   {//const {firestore} = this.context;
      //firestore.collection("users").doc(DOCID).
      if(this.state.Submitted)
        return <Redirect to = "/resume/view" />
      return(
         <form name="resume" class="form-style-2" onSubmit={this.handleSubmit}>
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
         Date of Birth
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
          <input  name="Addline1" type="text" required="required" placeholder = "Address Line 1" onChange={this.handleChange}/> <br/>
          <input  name="Addline2" type="text" required="required" placeholder = "Address Line 2" onChange={this.handleChange}/><br/>
          <input  name="City" type="text" required="required" placeholder = "City" onChange={this.handleChange}/><br/>
          <input  name="State" type="text" required="required" placeholder = "State" onChange={this.handleChange}/><br/>
          <input  name="PinCode" type="text" required="required" placeholder = "Pin Code" onChange={this.handleChange}/><br/>
          <input  name="Country" type="text" required="required" placeholder = "Country" onChange={this.handleChange}/><br/>
          
          </label>

         </div>
         
         <br/>
         <div class="inner-wrap">
         
         <br/>
         
         {
        this.eduPush()  
      } 
      
      <button onClick={e => {
         e.preventDefault()
         this.setState({noOfEdu: this.state.noOfEdu+1})
      }}>Add Education</button>
           
    <br/><br/>
    
     {
        this.skiPush()  
      } 
      
      <button onClick={e => {
         e.preventDefault()
         this.setState({noOfSki: this.state.noOfSki+1})
      }}>Add Skills</button>
    <br/><br/>
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
         <JobSelector name="jbin" required="required"  onChange={this.handleChange}/>
       


         
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
         <input  name="contactemail" type="email"  onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Contact 
         <input  name="contactnumber" type="tel"  required="required" onChange={this.handleChange}/>
         </label>
         <br/>
      
         
         </div>
         <div className="buttonnn">
         
         <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
         
         </form>
         );
   
}}