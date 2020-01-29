import React from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
import GridContainer from '../../components/GridContainer';
import Container from '../../components/Container';
class Donation extends React.Component {
    render() {
        return (
            <div classname="Donation">
                <Card>


                    <GridContainer>
                        <Container>
                            <h1> Donation</h1>
                        </Container>
                        <Container>
                            <Input label="Name" icon={<FontAwesomeIcon icon={faUser} />} />
                            <Input label="E-mail" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                            <Input label="Phone Number" icon={<FontAwesomeIcon icon={faMobile} />} />
                            <Input label="Amount" icon={<FontAwesomeIcon icon={faWallet} />} />
                            <Input label="Donate" type="Submit" />
                        </Container>
                    </GridContainer>
                </Card>
            </div>)
    }
}

export default Donation;
