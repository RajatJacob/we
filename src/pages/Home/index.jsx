import React from 'react';
import './style.scss';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';
import GridContainer from '../../components/GridContainer';

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
				<Card>
					<h1>Change the Future for Women and Girls</h1>
					Around the world, women and girls face incredible challenges to their safety, success, and human rights.
					With the right support and resources they have the potential to make lasting strides.
						<GridContainer>
						<Button to="/Organisation">Join Us</Button>
						<Button to="/donation">Donate</Button>
					</GridContainer>
				</Card>
				<div className="background center" id="rural">
				</div>
				<div className="content">
					<Container>
						<h1>Our Mission</h1>
						This website will serve as an anchor for all women by remaining steadfast in publishing premium,
                        multimedia content so that it uplifts deeper understanding and connection,
                        and cultivates rich dialogue in communities around the globe.
					</Container>
				</div>
				<div className="background center" id="top" />
			</div>
		);
	}

}
export default Home;