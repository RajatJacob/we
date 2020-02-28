import React from 'react';
import './style.scss';
import {FirebaseContext} from '../../contexts/FirebaseContext'
import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';

class Home extends React.Component {
	static contextType = FirebaseContext
	
	state = {
		feedback: []
	}

	getInfo = () => {
		const { firestore } = this.context
		firestore.collection("Feedback").limit(5).get().then(
			snapshot =>
			{
				var f = []
				snapshot.forEach(
					doc=>f.push(doc.data())
				)
				console.log(f)
				this.setState({feedback: f, done:true})
			}
		)
	}

	componentDidMount() {
		this.getInfo()
	}


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
						This website will serve as an anchor for all women by remaining steadfast in publishing premium,
                        multimedia content so that it uplifts deeper understanding and connection,
                        and cultivates rich dialogue in communities around the globe.
					</Container>
				</div>
				<div className="background center" id="top" />
				<div className="background center" id="rural">
					<Card>
						<h1>Feedback</h1>
						{	
							this.state.feedback.map(
								f => {
									return (
									<Card>
										{f.feedback}
									</Card>
									)
								}
							)
						}
					</Card>
				</div>
			</div>
		);
	}

}
export default Home;