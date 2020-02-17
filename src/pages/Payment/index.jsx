import React from 'react';
import Card from '../../components/Card'
import qr from '../../images/qr.PNG'
import phonepe from '../../images/phonepe.png'
import gpay from '../../images/gpay.png'
import upi from '../../images/upi.png'
import './style.scss'

export default class Payment extends React.Component {
    render() {
        return (
            <div className="Payment">
                <Card >
                    <h4> Please Scan the QR code to pay</h4>
                    <img src={qr} alt="QR code" id="qr" />
                    <div className="Footer">
                        <img src={phonepe} alt="PhonePe" />
                        <img src={gpay} alt="Google Pay" />
                        <img src={upi} alt="UPI" />
                    </div>
                </Card>
            </div>
        )
    }



}

