import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import './style.scss';
import GridContainer from '../../components/GridContainer';

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="UserProfile">
                <Card noContainer>
                    <GridContainer>
                        <Container>
                            <h1>User Profile</h1>
                        </Container>
                        <Container>
                            <h3>Followers</h3>
                        </Container>
                    </GridContainer>
                </Card>
            </div>
        )
    }
}