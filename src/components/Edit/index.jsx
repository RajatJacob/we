import React from 'react';

import {Redirect} from 'react-router-dom';
import './formstyle.css';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import EducationSelecter from '../EducationSelecter'
import JobSelector from '../JobSelector'
import SkillSelector from '../SkillSelector'


export default class Edit extends React.Component
{

   static contextType = FirebaseContext;
   constructor(props){
   super(props);
      this.state = {
            user: {},
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
         <EducationSelecter name={"education"+i}  onChange={this.handleChange}/>
         </label> <br/>
         <label>
         College/School
         <input  name={"csname"+i} type="text" onChange={this.handleChange}/>
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
         <SkillSelector  name={"skills"+i} value={this.state.skills} onChange={this.handleChange}/>
      


         
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
    
   const {
         firestore, auth
      } = this.context;
      
      console.log(this.state.form)
      alert('Submitted');
      this.setState({Submitted: true})
      
      firestore.collection("users").doc(auth.currentUser.uid).update(
         this.state.form
      )

         

        //window.location.href("www.google.com");
      
      event.preventDefault();
   };

  
getInfo = () => {
    const { firestore, auth } = this.context
    
    console.log("user")
console.log(auth.currentUser)
    if(auth.currentUser.uid)
    firestore.collection("users").doc(auth.currentUser.uid).get().then(
      doc =>
      {
        this.setState({user: doc.data(), done:true})
      }
    )
  }
  ///this.handleJob=this.handleJob.bind(this);

  componentDidUpdate() {
    if(!this.state.done)
    this.getInfo()
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
         <input   name="fname" type="text" placeholder={this.state.user.fname}  onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Last Name 
         <input  name="lname" type="text" placeholder={this.state.user.lname}  onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Date of Birth
         <input   name="date" type="text" placeholder={this.state.user.date} onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Gender
         <input   name="gender" type="text"  placeholder={this.state.user.gender} onChange={this.handleChange}/>
         </label><br/>
         <label>
         Nationality 
         <input   name="nationality" type="text"  placeholder={this.state.user.nationality} onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Father's/Spouse's name 
         <input  name="fsname" type="text" placeholder={this.state.user.fsname} onChange={this.handleChange}/>
         </label><br/>
         <label>
         Address
          <input  name="Addline1" type="text"  placeholder={this.state.user.Addline1}  onChange={this.handleChange}/> <br/>
          <input  name="Addline2" type="text"placeholder={this.state.user.Addline2}  onChange={this.handleChange}/><br/>
          <input  name="City" type="text" placeholder={this.state.user.City}  onChange={this.handleChange}/><br/>
          <input  name="State" type="text" placeholder={this.state.user.State}  onChange={this.handleChange}/><br/>
          <input  name="PinCode" type="text" placeholder={this.state.user.PinCode} onChange={this.handleChange}/><br/>
          <input  name="Country" type="text" placeholder={this.state.user.Country}  onChange={this.handleChange}/><br/>
          
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
         <textArea class="input1" name="inter" rows="4" columns="40" placeholder={this.state.user.inter}   onChange={this.handleChange} />
         </label>
         <br/>
         </div>
         <br/>
         
         <div class="inner-wrap">
         <label>
         Jobs Interested in 
         <input  name="jbin" type="text" placeholder={this.state.user.jbin} onChange={this.handleChange}/>
       


         
         </label>
    <br/>
    
         </div>
         <br/>
         
         <div class="inner-wrap">
         <label>
         Reference Person
         <input  name="contactpersontitle" type="text" placeholder={this.state.user.contactpersontitle} onChange={this.handleChange}/>
         
         <input  name="contactperson" type="text" placeholder={this.state.user.contactperson}  onChange={this.handleChange}/>
         
         </label>
         <br/>
         <label>
         Contact Email
         <input  name="contactemail" type="email"  placeholder={this.state.user.contactemail} onChange={this.handleChange}/>
         </label>
         <br/>
         <label>
         Contact 
         <input  name="contactnumber" type="tel" placeholder={this.state.user.contactnumber}   onChange={this.handleChange}/>
         </label>
         <br/>
      
         
         </div>
         <div className="buttonnn">
         
         <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
         
         </form>
         );
   
}}