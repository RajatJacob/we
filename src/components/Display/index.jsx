import React from 'react';
import Card from '../Card';
import './style.scss';
import Button from '../Button';
import Link from 'react-router-dom';
import Container from '../Container';
import GridContainer from '../GridContainer';

 
export default class Display extends React.Component
{
    render()
    {
        return(
            <div className="Display">
            <div className="background"/>
            <div>  
                        <Container>
                            <Card className="text">
                             WE is glad that you are joining hands with us in helping the women around the world. We are happy to have you on board. Thank You for registering with us. We will get back to you soon!
                            </Card>            
                        </Container>
                       <GridContainer>
                        <Container>
                            <Button Link to={'/Organisation'} >Back</Button>
                        </Container>
                        <Container></Container>
                        </GridContainer>
                    
                        </div>      
           
            </div>
            );
    }
}