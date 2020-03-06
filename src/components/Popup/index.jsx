import React, {Component} from 'react';
import './style.scss';
import Button from '../Button';

export default class Popup extends Component{
    
        render()
    
        {
            return(
                <div className="start">
                <div id="wrapper">
                  <p><a className="button1" href="#enroll">Enroll</a></p>
                </div>
                
                <div id="enroll" class="overlay">
                    <div className="popup">
                    <header>
                        <center><h1>Enroll</h1></center>
                        </header>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                        <form>
                        <label>Email</label><br/>
                        <input type="email" className="input"/><br/><br/>
                        <label>Password</label><br/>
                        <input type="password" className="input"/><br/><br/>
                        </form>
                        </div>
                        <div>
                        <a  href="/forgotpassword" className="forgot">Forgot Password?</a>
                        </div> 
                        <footer>
                        <Button className="newb">Submit</Button>
                        <p className="member">Not a member? <a href="/signup" >SignUp</a></p>
                       
                        </footer>
                       
                     </div>
                    </div>
                </div>
                
               
             

               
            );
        }
       
    
}

