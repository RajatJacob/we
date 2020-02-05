import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
import GridContainer from '../../components/GridContainer';
import Container from '../../components/Container';
import Button from '../../components/Button';

class Donation extends React.Component {
    render() {
        return (
            <div className="Donation">
                <div className="background" id="donate">
                    <Card>
                        <GridContainer>
                            <Container>
                                <p> Here at WE ,you are showing support for a long-term solution to ending homelessness. You are providing the
                                    support homeless women need to achieve their dreams, earn success and provide for their children.Your
                                    donation is a smart investment in the future, an open door of opportunity and a path to self-sufficiency.  </p>
                            </Container>
                            <Container>
                                <form>
                                    <h4>Support WE</h4>
                                    <Input label="Name" icon={<FontAwesomeIcon icon={faUser} />} />
                                    <label>
                                        <input type="radio" value="Individual" name="category" />
                                        Individual
                                    </label>
                                    <label>
                                        <input type="radio" value="Organisation" name="category" />
                                        Organisation
                                    </label>
                                    <Input label="E-mail" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                                    <Input label="Phone Number" icon={<FontAwesomeIcon icon={faMobile} />} />
                                    <Input label="Amount" icon={<FontAwesomeIcon icon={faWallet} />} />
                                    <Button to="/payment">Pay</Button>
                                </form>
                            </Container>
                        </GridContainer>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Donation;
