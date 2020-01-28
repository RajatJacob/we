import React from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
class Donation extends React.Component {
    render() {
        return (
            <div classname="Donation">
                <Card>
                    <h1></h1>Donation
                    <Input label="Name" icon={<FontAwesomeIcon icon={faUser} />} />
                    <Input label="E-mail" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                    <Input label="Phone Number" icon={<FontAwesomeIcon icon={faMobile} />} />
                    <Input label="Amount" icon={<FontAwesomeIcon icon={faWallet} />} />
                    <Input label="Donate" type="Submit" />
                </Card>
            </div>)
    }
}

export default Donation;
