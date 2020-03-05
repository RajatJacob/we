import React from 'react';
import Card from '../Card';
import Button from '../Button';
import Link from 'react-router-dom';
import './style.scss';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import Container from '../Container';
import GridContainer from '../GridContainer';


 
export default class DisplayOrg extends React.Component
{
    static contextType= FirebaseContext;

     constructor(props){
        super(props);
     this.state={
            organisation:[]
     }
    }

    getData=()=>
    {
        const {firestore} = this.context;
       
        firestore.collection("organisation").limit(4).get().then(
            snapshot => {
                var org=[]
                snapshot.forEach(
                    doc=>{
                        org.push(doc.data())
                    }
                )
                this.setState({organisation: org})
            }
        )
    }

    componentDidMount() {
        this.getData()
       }
    render()
    {
        return(
            <div className="DisplayOrg">
            <div className="background"/>
            <div>
                        <br/>
                        <h1 className="heading">Our Family</h1>
                        <Container>
                        {
                            this.state.organisation.map(
                                o => {
                                    return(
                                <Card className="text">
                                    <u>
                                        <h4>{o.name}</h4>
                                    </u>
                                    <div className="info">
                                    <h4>About</h4> 
                                    <p>{o.description}</p>
                                    <h4>Views</h4> 
                                    <p>{o.gender}</p>
                                    </div>
                                </Card>                
                                )
                                    }
                                )
                        }
                        </Container>
                        
                        <Container><Button Link to={'/Organisation'} >Back</Button></Container>
                        </div>
                    
                        
                        
                
                    
            </div>
            
            );
    }
}