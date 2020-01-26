import React from 'react';
import ReactDOM from 'react-dom';
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
import './style.scss';
import Card from '../../components/Card';

export default class VocationalCourses extends React.Component
{
	constructor(props)
	{
		super(props);
		
	}
	render()
	{
		return(
			<div>
			<div>
			<h1>WE OFFER</h1>
			<Card>
			</Card>
			</div>

			<div className='postsContainer'>
			
			<Cards imgsrc={img1} 
			title="English Speaking"
			>
				card1
			</Cards>

			<Cards imgsrc={img2} 
			title="Community Health and Sanitation">
			card1
			</Cards>

			<Cards imgsrc={img3} 
			title="Bakery and Confectionary">
			card1
			</Cards>

			<Cards imgsrc={img4} 
			title="Basic Life Sciences">
			card1
			</Cards>

			<Cards imgsrc={img5} 
			title="Haircare and Style">
				card1
			</Cards>

			<Cards imgsrc={img6} 
			title="Early Childhood Care and Education">
				card1
			</Cards>
			<Cards imgsrc={img7} 
			title="Footwear and Dress Design">
				card1
			</Cards>
			<Cards imgsrc={img8} 
			title="Basic Computer Training">
			card1
			</Cards>
			
			<Cards imgsrc={img9} 
			title="Ayurveda Assistant"
			>
				card1
			</Cards>
			
			</div>
			</div>
			);
		
	}
}