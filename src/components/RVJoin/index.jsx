import React from 'react';
import './formstyle.scss';
import Card from '../../components/Card';
import Input from '../../components/Input';

import GridContainer from '../../components/GridContainer';
import Container from '../../components/Container';
import Alert from '../../components/Alert';

import { Redirect } from 'react-router-dom';


class RVJoin extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
 

    render() {
       
        return (
            <div class="RVJoin">
              <div class="background">
                
                <Card>
                  <div class="buttonlike">
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <a href="/resume"  align="left" >CREATE A RESUME</a><br/>
                  <br/>
                  <a href="/view" >VEIW RESUME</a>
                  </div>
                 </Card>
                 
                 </div>
            </div>
        )
    }
}

export default RVJoin;
