import React from 'react';
import Cards from '../../components/CourseCard';
import img1 from '../../images/books.jpg';
import img2 from '../../images/health.jpeg';
import img3 from '../../images/bakery.jpg';
import img4 from '../../images/elderly.jpeg';
import img5 from '../../images/haircare.png';
import img6 from '../../images/childcare.jpg';
import img7 from '../../images/dress.jpg';
import img8 from '../../images/computer.jpg';
import img9 from '../../images/ayurveda.jpg';
import Container from '../../components/Container';
import { FirebaseContext } from '../../contexts/FirebaseContext';


//import img10 from '../../images/calendar.png';
import './style.scss';

export default class VocationalCourses extends React.Component {
	static contextType = FirebaseContext;

	constructor(props){
		super(props);
		this.state={
			courses: []
		}
	}

	getCourseData = () => {
		const { firestore } = this.context;
		var courses = []
		firestore.collection("courses").get().then(
			snapshot => {
				snapshot.forEach(
					doc => {
						courses.push(doc.data())
					}
				)
				this.setState({
					courses: courses
				})
			}
		)
	}

	componentDidMount() {
		this.getCourseData()
	}

	render() {
		return (
			<Container>
			<div className="VocationalCourses">
				<div>
					<h1>WE Offer</h1>
				</div>

				{
					this.state.courses.map(
					x => {
						return (
							<div className='postsContainer'>
							<Cards imgsrc={x.imgsrc}
							title={x.title}
							content={x.content}
							label={x.label}
							link={x.link} />
								</div>
						)
					}
				)
			}

				
					
			

			</div>
			</Container>
		);

	}
}