import React from 'react';
import './formstyle.scss';
import Card from '../../components/Card';


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
                  <a href="/view" >VIEW RESUME</a>
                  </div>
                 </Card>
                 
                 </div>
            </div>
        )
    }
}

export default RVJoin;
