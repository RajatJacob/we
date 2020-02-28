
import React from 'react';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import ReactDOM from 'react-dom';
import './style.css';
import Card  from "../Card";
import Button from "../Button";
import { storage } from '../../contexts/FirebaseContext';

export default class View extends React.Component {
	static contextType = FirebaseContext;
	state={
		user: {},
		done: false
	}

  //this.handleJob=this.handleJob.bind(this);
  //this.baseState = this.state;
handleJob(event){
      
      
      window.open("https://www.naukri.com/"+this.state.user.jbin+"-jobs")
      window.open("https://www.indeed.co.in/"+this.state.user.jbin+"-jobs")
      
    }

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
	{
		return(<>
              <table  cellpadding="3px"  width="100%">
              <tr>
              <td bgcolor="#003878" rowspan="2" width="30%">
                
                    
                    <h1 align="left" class="colorr">{this.state.user.fname} {this.state.user.lname} <br/><br/> {this.state.user.jbin} </h1> 
                    
                    
                    <div class="col"><h3 align= "left" class="colorr">Personal Info</h3></div><br/> 
                    <h4 align="left" class="colorr">Address</h4><p align="left" class="colorr">{this.state.user.Addline1} {this.state.user.Addline2}<br/>{this.state.user.City}, {this.state.user.State} {this.state.user.PinCode}<br/>{this.state.user.Country} </p><br/>
                    <h4 align="left" class="colorr">Date of Birth</h4> <p align="left" class="colorr">{this.state.user.date}<br/></p>
                        <br/> <h4 align="left" class="colorr">Nationality </h4><p align="left" class="colorr">{this.state.user.nationality}</p><br/>
                  
                    <div class="col"><h3 align= "left" class="colorr">Skills</h3></div> 
                   <br/>
                      <li align="left" class="colorr">{this.state.user.skills1}</li><br/>
                      <li align="left" class="colorr">{this.state.user.skills2}</li><br/>
                      <li align="left" class="colorr">{this.state.user.skills3}</li><br/>
                      <li align="left" class="colorr">{this.state.user.skills0}</li><br/>
               
                </td>
                <td width="70%">
                  <hr/>
                  <h3 align="left" class="colorrs">Education</h3><hr/><br/>
                   <h4><li align="left">{this.state.user.education0}</li> <br/>
                      <ul align="left">{this.state.user.csname0}</ul> <br/>
                      <li align="left">{this.state.user.education1}</li> <br/>
                      <ul align="left">{this.state.user.csname1}</ul> <br/>
                      <li align="left">{this.state.user.education2}</li> <br/>
                      <ul align="left">{this.state.user.csname2}</ul> <br/></h4>

               
                </td></tr>
                <tr>
                <td>
                <hr/>
                <h3 align="left" class="colorrs">Past Experience</h3><hr/><br/>
                   <h4 align="left"><i>{this.state.user.inter}</i> <br/>
                      </h4><hr/>
                    <h3 align="left" class="colorrs">Reference Person</h3><hr/><br/>
                    <h4 align="left"><i>{this.state.user.contactpersontitle} {this.state.user.contactperson} </i></h4> <br/>
                    <h4 align="left"><a href="mailto:{this.state.user.contactemail}"><i>{this.state.user.contactemail} </i></a></h4> <br/>
                     



                </td></tr></table>
              
                <input type="submit" value = "Print" onClick={window.print} className="print-page"/>&nbsp;&nbsp;&nbsp;
                <input type="submit" value = "Find Jobs" onClick={() => this.handleJob("{this.state.user.jbin}")}/>
             <br/>
			  	
          </>
          

             )
        }		}