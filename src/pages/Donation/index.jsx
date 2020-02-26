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
import { Redirect } from 'react-router-dom';


class Donation extends React.Component {
    static contextType = FirebaseContext;
    constructor(props) {
        super(props)
        this.state = {

            name: "",
            email: "",
            phone: "",
            role: "",
            amount: "",
            alert: null,
            proceed: false
        }
    }
    submit = e => {
        const { firestore } = this.context
        this.setState({
            alert: {
                type: "info",
                message: "Loading..."
            },
            proceed: true
        })
        firestore.collection("donation").add()
        e.preventDefault()
    }

    render() {
        console.log(this.state)
        if (this.state.proceed)
            return (<Redirect to="/payment" />)
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
                                <Input label="Name" icon={<FontAwesomeIcon icon={faUser} />} onChange={e => this.setState({ name: e.target.value })} value={this.state.name} required />
                                <label>
                                    <input type="radio" value="Individual" name="category" onChange={e => this.setState({ role: e.target.value })} checked={this.state.role === "Individual"} required />
                                    Individual
                                    </label>
                                <label>
                                    <input type="radio" value="Organisation" name="category" onChange={e => this.setState({ role: e.target.value })} checked={this.state.role === "Organisation"} />
                                    Organisation
                                    </label>
                                <Input label="E-mail" icon={<FontAwesomeIcon icon={faEnvelope} />} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                                <Input label="Phone Number" icon={<FontAwesomeIcon icon={faMobile} />} onChange={e => this.setState({ phone: e.target.value })} value={this.state.phone} pattern="[6789][0-9]{9}" required />
                                <Input label="Amount" type="number" min="1" icon={<FontAwesomeIcon icon={faWallet} />} required />
                                <h5>(Amount in terms of INR)</h5>
                                <Input label="Pay" type="submit" onClick={this.submit} />
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
                        WE are committed to respecting and protecting the privacy of donors. All information concerning donors, including their names, contact information, the amount of their gift, etc., shall be kept strictly confidential by the Board of Directors
                        unless permission is obtained from donors to release such information. WE will not sell, share or trade our donors’ names or personal
                        information with any other entity, nor send mails to our donors on behalf of other organizations. We trust you on your donation since it is a QR scan code.
                    </p>
                </Card>
            </div>
        )
    }
}

export default Donation;
