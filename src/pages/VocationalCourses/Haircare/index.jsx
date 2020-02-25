import React from 'react';
import Courses from '../../../components/Courses';
import '../all.scss';
import img from '../../../images/haircaremain.jpeg';
import vid1 from '../../../images/ethics.mp4';

 class Haircare extends React.Component{
	render()
	{
		return(
			<div className='Haircare'>
				<Courses className='heading' name="Haircare and Style" imgsrc={img}/>
				<div className='start'>
				<div class="sidebar">
			
				<div class="sidebar_item">
			   <h3 >Facts</h3>
			   <p align="justify" className="side">
			   In 2015, the number of people aged 60 years and over worldwide was estimated to be about 900 million. The size of this age group is expected to grow to 2 billion by 2050.</p>
			 </div>
			
		   </div>
		   </div>
		   

		   <div className="para">
 				<p className="info">
				Hairdressers, Hairstylists, and Cosmetologists perform a wide range of activities related to hair care services. They cut, trim, color, bleach and style hair while also offering a number of additional hair treatments. In this role, they offer a comprehensive range of beauty services. Most of these services are related to hair styling and grooming but they may also include other services such as nail and skin care. A part of their job is to apply makeup and choose appropriate hair wigs to give a client the desired look. they make use of a number of tools as well as electronic devices on a routine basis.
				</p>
				<p className="info">Hair is probably one of the first things you notice about people when meeting them for the first time. This is especially true for women. Beautiful and shiny hair always leaves good impression, which is why proper hair care is important. Also, good care of your hair plays an important part in having healthy hair and helps avoid extensive damage that can lead to hair loss. Regular washing with celebrity advertised shampoos and conditioners is not enough. To have a healthy, strong and shiny hair, you need to know how to care for it daily.</p>
			</div>
			<div class="sidebar">
		
			<div class="sidebar_item">
			  <h3>Useful Links</h3>
			  <ul className="sidelist">
			  <li className="list"><a href="https://joanmorais.com/product/professional-natural-hair-care-product-making-course/">Haircare Products</a><br/>
			  </li> 
			  <li className="list"><a href="https://www.udemy.com/topic/hair-styling/">Hair-Styling</a> 
			  </li>
			   </ul>
			</div>
		   
		  </div>
		  <div>
		   <video width="50%" height="30%"  className="video" controls >
		   <source src={vid1} type="video/mp4"></source>
		   <source src="images/ethics.ogg" type="video/ogg"></source>
		   Your browser does not support the video tag.
		 </video>
		   </div>
	<br/><br/>
			<div className="Modules">
				<h2>How do I become a Hairdresser, Hairstylist or Cosmetologist</h2>
			

<p className="info">The basic requirement for a career as Hairdressers, Hairstylists, or Cosmetologists are skills and qualifications in Customer and Personal Service, or a related field.
</p>
<h2>Sample Roles</h2>

<p className="info"> Hair dresser: A Hair Dresser is someone who cuts, trims and styles hair to give a client the desired looks. He may also perform a number of additional activities such as bleaching and coloring hair. A hair dresser works with a number of tools such as shears and scissors.
Beautician: A Beautician is someone who offers a wide range of beauty and personal care services. He or she may have a specific focus, such as hair care, or offer comprehensive beauty services. A beautician is typically employed at a salon or a spa.
			</p>

				<p className="info"> Various Modules of the course will cover </p>
				<ul>
				<li>Fundamentals Part 1: Hair Care Market, Pricing, Containers, Labeling, Raw Materials</li>
				<li>Fundamentals Part 2: Equipment, Weighing, Formulating, Testing</li>
				<li>Shampoo</li>
				<li>Hair Conditioner and Hair Mask</li>
				<li>Herbs 101, Herbal Extracts</li>
				<li>Hair Rinse, Mist, Gel, Serum</li>
				<li>Hair Oil, Beard Oil, Hair Butter, Pomade</li>

				</ul>
			
				

</div>
<div id="footer">
			   <p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
			 </div>
</div>

		);
	}
}
export default Haircare;