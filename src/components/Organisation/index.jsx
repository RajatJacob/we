import React from 'react';
import './style.scss';
import Card from '../Card';
import Button from '../Button';
import Link from 'react-router-dom';
import GridContainer from '../GridContainer';
import Container from '../Container';


export default class Organisation extends React.Component{

    render()
    {
        return(
            <div className="Organisation">
            
            <div className="background">
            </div>
            <Card><GridContainer>
           <Container>
          
            <p>WE offers the platform to provide opportunities for various non-governmental organisations and non-profitable organisations to join hands with us to help women around. By joining us you will be able to work with us. 
            Your steps and contributions will help us, help them. You can also provide donations for the welfare of women in the Donation Section. Become a part of our family.
            </p>
            </Container>
            <Container>
            <Button Link to={'Organisation/Register'}>Form</Button>
            <Button Link to={'Organisation/Family'}>Family</Button>
            </Container>
            </GridContainer>
            </Card>
           
            <Container>
            <Card>
            <h4>CODE OF CONDUCT</h4>
            WE aims to help women in the safest way possible. Therefore at WE, we look for those organisations which are actually willing to contribute something to help us.
            All the entries in the form are verified by the developers and then the organisation are allowed to work as a part of our family.
            <p>Don't worry, your personal details will not be shared with anyone and will be kept confidential. Feel free to express your views.</p>
            </Card>
            </Container>
           
           
            </div>

        );
    }

}