import React from 'react';
import './style.scss';
import Container from '../../components/Container';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="background banner" id="top">
                    WE
                </div>
                <div className="content">
                    <Container>
                        <h1>Our Vision</h1>
                        A world where every woman has a platform to voice her opinion.
					</Container>
                </div>
                <div className="background" id="rural" />
                <div className="content">
                    <Container>
                        <h1>Our Mission</h1>
                        To provide a safe place to allow women to express their views.
					</Container>
                </div>
                <div className="background" id="bottom" />
            </div>
        );
    }

}
export default Home;