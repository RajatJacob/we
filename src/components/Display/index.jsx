import React from 'react';
import Card from '../Card';
import './style.scss';
//import Button from '../Button';
import img from '../../images/joinus.jpg';
 
export default class Display extends React.Component
{
    render()
    {
        return(
            <div>
            
            <Card className="text">
             WE is glad that you are joining hands with us in helping the women around the world. We are happy to have you on board. Thank You for registering with us. We will get back to you soon.
            <br/>
            <button>Back</button>
            </Card>
           
            </div>



        );
    }
}