import React from 'react';
import Cards from '../../components/CourseCard';
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
		const { firestore, storage } = this.context;
		var courses = []
		firestore.collection("courses").get().then(
			snapshot => {
				snapshot.forEach(
					doc => {
						var c = doc.data()
						storage.refFromURL(c.image).getDownloadURL().then(
							url => {
								c.image = url
								console.log(c)
								courses.push(c)
								this.setState({
									courses: courses
								}
								)
							}
						)
					}
				)
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
<div className="postsContainer">
				{
					this.state.courses.map(
					x => {
						return (
							<div >
							<Cards image={x.image}
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

				
					
			

			</div>
			</Container>
		);

	}
}