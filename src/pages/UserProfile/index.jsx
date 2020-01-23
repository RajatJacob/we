import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import './style.scss';
//import ImageUploader from 'react-images-upload';

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="UserProfile">
                <Card noContainer>
                    <div className="grid-container">
                        <Container>
                            <h1>User Profile</h1>
                        </Container>
                        <Container>
                            <h1>Followers</h1>
                        </Container>
                    </div>
                </Card>
            </div>
        )
    }
}