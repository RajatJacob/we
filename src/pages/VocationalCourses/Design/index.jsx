import React from 'react';
import Courses from '../../../components/Courses';
import '../all.scss';
import img from '../../../images/designmain.jpg';
import vid1 from '../../../images/ethics.mp4';

 class Design extends React.Component{
	render()
	{
		return(
			<div className="Design">
				<Courses className='heading' name="Footwear and Dress Design" imgsrc={img}/>
				<div className="start">
				<div class="sidebar">
			
				<div class="sidebar_item">
			   <h3 >Facts</h3>
			   <p align="justify" className="side">
			   The T-shirt is one of the most popular items of clothing in the world, and around two billion of them are sold every single year.</p> </div>
			
		   </div>
		   <div className="para">
			<p className="info">In an intensive two-months course, the participants will learn about both traditional and innovative methods of shoe design and how to create patterns for various types of footwear. The course plan includes the basics of design, research for market trends, digital illustration, footwear graphic design and pattern making. The objective of the course is to achieve technical training for the development of an individual footwear collection.</p>
			<p className="info">The aim of the course is to provide women with the necessary skills to be able to manage the entire production chain and create trend-setting products that are competitive and valid both from a commercial and creative point of view. The design and development of bags and shoes is one of the most significant economic stimuli for countless businesses across the globe. In Italy in particular, the leather tradition’s artisanal character is united with the technological innovation applied to products, materials, and production processes. This gives further affirmation of Made in Italy as a world-renowned excellence brand even in the footwear and accessories sectors.</p>
			</div>	
			<div class="sidebar">
		
		 <div class="sidebar_item">
		   <h3>Useful Links</h3>
		   <ul className="sidelist">
			<li className="list"><a className="ref" href="https://icanmakeshoes.com/">Shoe Design</a>
			</li>
			<li  className="list"><a href="https://www.skillshare.com/browse/fashion-design">Dress Design</a>
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
			
			<h2>Learning Modules</h2>
			<ul>
				<li>Footwear Design – Collection</li>
				<li>Footwear Graphic Design</li>
				<li>Footwear Pattern Making</li>
				<li>Guided Tours</li>
				<li>Final Project Presentation</li>
			</ul>
			<h2>Introduction to Fashion Designing</h2>
<p className="info" >The fashion design industry represents nothing less than a dream career path for millions of people.  Nevertheless, comparatively few have the drive, determination and essential industry knowledge to breathe life into their dreams.  What often makes the difference between the desire to work in fashion and actually breaking into the industry is the necessary educational background.  To succeed in fashion design means to first understand the business side of the profession, while at the same time honing your skills and talents as a designer. Why not take this unique opportunity to begin studying fashion design, fashion design courses online free, 100% free of charge?  The free fashion design course centres around three important topics, which include an overview of the contemporary fashion design industry, an introduction to key design elements and an exploration of the most important principles of design.  You will begin learning how to not only bring your creative visions to life, but also how to carve out a successful career in one of the world’s most desirable industries.</p>

<h2>Learning Modules</h2>
<p className="info">This fashion design free course covers the following topics</p>

<ol>    
  <li>  Introduction to Fashion Design </li>
  <li>   The Elements of Design      </li>
  <li>   The Principles of Design  </li>
</ol>
<h2>Learning Outcomes</h2>
<p className="info">Fashion designers may work for clothing manufacturers to design the lines that they produce. Many fashion jobs are located in California or New York, so to land a job with a large fashion company, you may need to relocate. You can also expect to travel regularly to visit suppliers or go to trade shows and fashion shows. Expect to work long hours when you have a production deadline or a fashion show approaching.
</p>
<p className="info">Other fashion designers choose to work for themselves. In this role, you might create custom pieces for clients or you might make your own designs that you sell online. This option gives you more freedom to design the clothes you want, but you don't get a steady paycheck, and you need to promote yourself. Many self-employed designers start their businesses from home, and they may expand into a small commercial space as their business grows.</p>
</div>
<div id="footer">
			   <p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
			 </div>
</div>
				);
	}
}
export default Design;