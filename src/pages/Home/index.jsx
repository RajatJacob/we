import React from 'react';
import './style.scss';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            links: this.props.links === undefined ?
                [
                    { name: "Who We Are", url: "/who-we-are" },
                    { name: "Join Us", url: "/join-us" },
                    { name: "WE Offer", url: "/we-offer" },
                    { name: "Privacy Policy", url: "/privacy-policy" },
                    { name: "Code Of Conduct ", url: "/code-of-conduct" },
                ] : this.props.links
        }

    }
    render() {
        return (
            <div className="Home">
                <div className="background banner">
                    WE
                </div>
                <div className="content">
                    A world where every woman is able to use her voice and make her own decisions.
                </div>
            </div>
        );
    }

}
export default Home;