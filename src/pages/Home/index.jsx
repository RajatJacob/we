import React from 'react';
import './style.scss';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div className="background banner" id="top">
					WE
                </div>
				<div className="content">
					<Container>
						<h1>About Us</h1>
						We are a team of Computer Science students in Bangalore, India.
						<div id="team">
							<div className="member">
								<h3>Anushree Agarwal</h3>
								1841006
							</div>
							<div className="member">
								<h3>Rajat Abraham Jacob</h3>
								1841039
							</div>
							<div className="member">
								<h3>Vansikaa A</h3>
								1841061
							</div>
						</div>
					</Container>
				</div>
				<div className="background center" id="rural">
					<Card>
						<h1>Courses We Offer</h1>
						We offer a wide range of courses to help women improve their skills.
							<Button to="/courses">Courses</Button>
					</Card>
				</div>
				<div className="content">
					<Container>
						<h1>Our Vision</h1>
						A world where every woman has a platform to voice her opinion.
					</Container>
				</div>
				<div className="background" id="bottom" />
				<div className="content">
					<Container>
						<h1>Our Mission</h1>
						To provide a safe place to allow women to express their views.
					</Container>
				</div>
			</div>
		);
	}

}
export default Home;