import React from 'react';
import Courses from '../../../components/Courses';
import '../all.scss';
import img from '../../../images/bakerymain.jpg';
import vid1 from '../../../images/ethics.mp4';

 class Bakery extends React.Component{
	render()
	{
	return(
	
		<div className="Bakery">
			
			<Courses className='heading' name="Bakery and Confectionery" imgsrc={img}/>
			<div className="start">
			<div class="sidebar">
			
			<div class="sidebar_item">
		   <h3 >Facts</h3>
		   <p align="justify" className="side">
		   In France, by law a bakery has to make all the bread it sells from scratch in order to have the right to be called a bakery.</p> </div>
		
	   </div>
	   <div className="para">
			<p className="info"> Bakery and Confectionery Course is for women who for has a love for baking. Cake baking is not complex but it is an art. The right mix of ingredients and procedure followed to perfection brings you the best output. Baking cakes have never been so easy and the interest it has generated recently is enormous. There are so many methods that are adopted while baking a cake and the excitement that is derived after seeing the output is worth the wait. 
<br/><br/>
The Cake baking course is carefully designed to cover various aspects of baking and provide women through knowledge & understanding. This course is in reference of experts and chefs who will give you immense insight of various important aspects such as usage of raw materials, creating right blend and setting up perfect oven temperature etc. 
</p>

<p className="info">
In India today, Baking and Pastry chefs equipped with professional skills and knowledge of the field are in huge demand. Due to high demand of bakery products as well as professionally trained bakers and chef, the baking training industry now records huge number of women every year. Companies, manufacturers and baking merchandises all seek for individuals that are capable of producing high standard products.<br/>
</p>
</div>
<div class="sidebar">
		
<div class="sidebar_item">
  <h3>Useful Links</h3>
  <ul className="sidelist">
   <li className="list"> <a href="https://www.skillshare.com/browse/baking">Learn with the experts</a><br/></li>
   <li className="list"><a href="https://www.udemy.com/topic/baking/">Enhance your Skills</a></li>
   </ul>
</div>

</div>
<div>
	   <video width="50%" height="30%"  className="video" controls >
	   <source src={vid1} type="video/mp4"></source>
	   <source src="images/ethics.ogg" type="video/ogg"></source>
	   Your browser does not support the video tag.
	 </video>
	   </div >
	   <div className="Modules">
	   <h2>Modules covered in the course</h2>
<p className="info">The home baking sector has proven to be a major player in India’s baking industry and plays a vital role in solving economic problems such as unemployment. Women, particularly mothers have taken over the home baking sector, producing good and quality bakery products from the comfort of their homes.

 </p>

 	
 <br/>
 <p className="info">
The baking courses offered are properly planned, structured and tailored to cater for the training needs of the women and market analysis. The Course includes different variants such as Egg & Eggless and it is up to you to choose your preference.
 In the course links provided below, our beloved chef and recipe developer shares how to make a no-fail yeast dough every time — a perfect base for sweet rolls, savory twisted breads, iced buns, and more. 
 <br/>You'll learn:

<ul>
<li>How to combine ingredients (properly!)</li>
<li>Kneading techniques</li>
<li>The how and why of yeast-dough rising</li>
<li>Adding this foundational recipe to your repertoire opens the door to getting creative in the kitchen, mastering an essential yeast dough, and delighting friends and family with delicious baked goods at home!</li>
</ul>
<br/>

 </p>
</div>
		</div>
		<div id="footer">
		<p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
	  </div>
		</div>
		
		);
	}
}
export default Bakery;