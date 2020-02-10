import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
import GridContainer from '../../components/GridContainer';
import Container from '../../components/Container';
import Alert from '../../components/Alert';
import { FirebaseContext } from '../../contexts/FirebaseContext';


class Donation extends React.Component {
    static contextType = FirebaseContext;
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            alert: null
        }
    }
    submit = e => {
        const { auth } = this.context;
        this.setState({
            alert: {
                type: "info",
                message: "Mailing..."
            }
        })

        e.preventDefault()

    }
    render() {
        return (
            <div className="Donation">
                <div className="background" id="donate" />
                <Card>
                    <GridContainer>
                        <Container>
                            <p> Here at WE ,you are showing support for a long-term solution to ending homelessness. You are providing the
                                support homeless women need to achieve their dreams, earn success and provide for their children.Your
                                    donation is a smart investment in the future, an open door of opportunity and a path to self-sufficiency.  </p>
                        </Container>
                        <Container>
                            <form onSubmit={this.submit}>
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
                                <Input label="Pay" type="submit" />
                            </form>
                            {
                                this.state.alert ?
                                    <Alert type={this.state.alert.type} title={this.state.alert.title}>
                                        {this.state.alert.message}
                                    </Alert> :
                                    null
                            }
                        </Container>
                    </GridContainer>
                </Card>

                <Card>
                    <h4>DONOR PRIVACY POLICY</h4>
                    <p>
                        WE is committed to respecting and protecting the privacy of donors. All information concerning donors, including their names, contact information, the amount of their gift, etc., shall be kept strictly confidential by Women’s Empowerment staff, Board of Directors, and select
                        development volunteers unless permission is obtained from donors to release such information. WE will not sell, share or trade our donors’ names or personal
                        information with any other entity, nor send mailings to our donors on behalf of other organizations.The donor will be mailed an appreciation certificate for theit donation.
                        </p>
                </Card>
            </div>
        )
    }
}

export default Donation;
