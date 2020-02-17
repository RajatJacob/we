import React from 'react';
import Card from '../../components/Card'
import Input from '../../components/Input';
import Alert from '../../components/Alert';
import qr from '../../images/qr.PNG'
import coins from '../../images/coins.gif'
import phonepe from '../../images/phonepe.png'
import gpay from '../../images/gpay.png'
import upi from '../../images/upi.png'
import './style.scss'
import { Redirect } from 'react-router-dom';


export default class Payment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            alert: null,
            done: false
        }
    }
    submit = e => {
        this.setState({
            alert: {
                type: "info",
                message: "Thank You :)"
            },
            done: true
        })
        e.preventDefault()
    }

    render() {
        if (this.state.done)
            return (<Redirect to="/" />)
        return (
            <div className="Payment">
                <Card >
                    <img src={coins} alt="piggy pank" id="coins" />

                    <h4> Please Scan the QR code to pay</h4>
                    <img src={qr} alt="QR code" id="qr" />
                    <div className="Footer">
                        <img src={phonepe} alt="PhonePe" />
                        <img src={gpay} alt="Google Pay" />
                        <img src={upi} alt="UPI" />
                    </div>
                    <form onSubmit={this.submit}>
                        <Input label="Done" type="submit" onClick={this.submit} />
                    </form>
                    {
                        this.state.alert ?
                            <Alert type={this.state.alert.type} title={this.state.alert.title}>
                                {this.state.alert.message}
                            </Alert> :
                            null
                    }
                </Card>
            </div>
        )
    }



}

