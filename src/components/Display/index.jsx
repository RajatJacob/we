import React from 'react';
import Card from '../Card';
import './style.scss';
import Button from '../Button';

 
export default class Display extends React.Component
{
    render()
    {
        return(
            <div className="Display">
           
            <div className="background">
            <Card className="text">
             WE is glad that you are joining hands with us in helping the women around the world. We are happy to have you on board. Thank You for registering with us. We will get back to you soon.
            <br/>
            <br/>
            <Button >Back</Button>
            
            </Card>
            </div>
            </div>



        );
    }
}