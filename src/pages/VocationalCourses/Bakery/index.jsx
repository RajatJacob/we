import React from 'react';
import ReactDOM from 'react-dom';
import Courses from '../../../components/Courses';
import './style.scss';
 class Bakery extends React.Component{
	render()
	{
	return(
	
		<div className="Main">
			<div className="Baking">
			<Courses className='heading' name="Bakery and Confectionery"/>
			<div className="Bake">
				
				<p className="info"> Bakery and Confectionery Course is for women who for has a love for baking. Cake baking is not complex but it is an art. The right mix of ingredients and procedure followed to perfection brings you the best output. Baking cakes have never been so easy and the interest it has generated recently is enormous. There are so many methods that are adopted while baking a cake and the excitement that is derived after seeing the output is worth the wait. 
<br/>
The Cake baking course is carefully designed to cover various aspects of baking and provide women through knowledge & understanding. This course is in reference of experts and chefs who will give you immense insight of various important aspects such as usage of raw materials, creating right blend and setting up perfect oven temperature etc. 
<br/>
In India today, Baking and Pastry chefs equipped with professional skills and knowledge of the field are in huge demand. Due to high demand of bakery products as well as professionally trained bakers and chef, the baking training industry now records huge number of women every year. Companies, manufacturers and baking merchandises all seek for individuals that are capable of producing high standard products.<br/>

The home baking sector has proven to be a major player in India’s baking industry and plays a vital role in solving economic problems such as unemployment. Women, particularly mothers have taken over the home baking sector, producing good and quality bakery products from the comfort of their homes.

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
 <p className="info">
 Following are the links that you may refer to get more knowledge and information by more experienced experts
 <br/>
 <a href="https://www.skillshare.com/browse/baking">Learn with the experts</a><br/>
 <a href="https://www.udemy.com/topic/baking/">Enhance your Skills</a>
</p>
</div>
		</div>
		</div>
		);
	}
}
export default Bakery;