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
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import img10 from '../../images/calendar.png';
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
			</div>

			<div className='postsContainer'>
				<container>
					<Cards imgsrc={img1} 
						title="English Speaking"
						content="This course will help you enhance your english speaking skills. It will help mprove your pronunciation and fluency, increase your English vocabulary, identify how culture influences your speech and help you know questions and responses for different settings and situations."
					
						label="6 Weeks"
						>
						card1
					</Cards>

					<Cards imgsrc={img2} 
						title="Community Health and Sanitation"
						content="The goal is to aware them with safe water access, sanitation, and hygiene which are the most basic building blocks for empowering women everywhere. Here’s what it takes to provide proper sanitation for women; a toilet with dignity,hand washing facility, safe water source and Menstruation Hygiene Management Training."
						label="4 Weeks">
						card1
					</Cards>

					<Cards imgsrc={img3} 
						title="Bakery and Confectionary"
						content="Introductory baking classes provide women with an understanding of the ingredients and methods used in creating breads, pastries, cookies and other desserts. They will learn how dairy, fruits, flour and chocolate come into play with pastry and baking. The fundamentals of dough and basic decorating skills are covered."
						label="6 Weeks">
						card1
					</Cards>
					</container>
				<container>
					<Cards imgsrc={img4} 
						title="Elderly Ethics"
						content="Elderly care emphasizes the social and personal requirements of senior citizens who need some assistance with daily activities and health care, but who desire to age with dignity. It is important in the design of housing, services, activities, employee training and such should be truly customer-centered."
						label="3 Weeks">
						card1
					</Cards>

					<Cards imgsrc={img5} 
						title="Haircare and Style"
						content="Haircare and Style is to learn the basics of hair style and hair care be it straight or curls, bob or pixie, ponytail or braids. A trendy hairstyle requires healthy hair. The curriculum includes topics like shampooing and conditioning techniques, oil massages, basic touch ups, and hair spa."
						label="8 Weeks">
						card1
					</Cards>

					<Cards imgsrc={img6} 
						title="Early Childhood Care and Education"
						content="Early childhood care and education aims at the holistic development of a child’s social, emotional, cognitive and physical needs in order to build a solid and broad foundation for lifelong learning and wellbeing. It has the possibility to nurture caring, capable and responsible future citizens."
						label="6 Weeks">
			card1
			</Cards>
			</container>
			<container>
			
			<Cards imgsrc={img7} 
			title="Footwear and Dress Design"
			content="Footwear and Dress design offers a focused approach to fashion design concepts, to create and showcase shoe and dress designs for a variety of markets. Many designers specialize and design for particular ages and genders. It will help you get jobs in corporate sector or in boutiques."
			label="8 Weeks">
			card1
			</Cards>
			<Cards imgsrc={img8} 
			title="Basic Computer Training"
			content="The goal of an online basic computer course is to equip women with basic computer skills. Additional advanced courses may be taken to strengthen knowledge in a particular area.The curriculum will include Basic Computer Skills, Keyboarding, Microsoft Office, Internet Navigation, etc."
			label="10 Weeks">
			>
			card1
			</Cards>
			
			<Cards imgsrc={img9} 
			title="Ayurveda Assistant"
			content="Ayurveda is science of Life. It is a skill based course, designed for proper practical understanding and sound guidance for developing a practice as an Ayurvedic Assistant. The course includes theoretical and practical applications of Ayurveda and enables you to acquire and hone your skills in authentic massages and healing therapies."	
			label="8 Weeks">
			card1
			</Cards>
			</container>
			</div>
			
			</div>
			);

		}
	}