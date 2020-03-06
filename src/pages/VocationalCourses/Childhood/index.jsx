import React from 'react';
import ReactDOM from 'react-dom';
import Courses from '../../../components/Courses';
import img from '../../../images/educationfront.jpg';
import '../all.scss';
import vid1 from '../../../images/ethics.mp4';

 class Childhood extends React.Component{
	render()
	{
		return(
			<div className="Childhood">
				<Courses className='heading' name="Early Childhood Care and Education" imgsrc={img}/>
				<div className="start">
				<div class="sidebar">
			
			 <div class="sidebar_item">
            <h3 >Facts</h3>
            <p align="justify" className="side">
			Preschool can help combat crime, teen pregnancy, and high school dropout rates.</p>  
			<p align="justify" className="side">Preschool can save families thousands of dollars in child care costs each year.</p></div>
		</div>
		<div className="para">
				<p className="info">You will discover the world of children in the early years. Though child development patterns are reasonably universal, every child is unique, has individual potential and will learn differently from their peers.

By exploring many aspects of child development and learning you will gain insight into how to support infants, toddlers and pre-schoolers during this critical stage of life.</p>

<p className="info">Early childhood, defined as the period from birth to eight years old, is a time of remarkable growth with brain development at its peak. During this stage, children are highly influenced by the environment and the people that surround them.</p>

<p className="info">Early childhood care and education (ECCE) is more than preparation for primary school. It aims at the holistic development of a child’s social, emotional, cognitive and physical needs in order to build a solid and broad foundation for lifelong learning and wellbeing. ECCE has the possibility to nurture caring, capable and responsible future citizens.
</p>

<p className="info">In this way ECCE is one of the best investments a country can make to promote human resource development, gender equality and social cohesion, and to reduce the costs for later remedial programmes. For disadvantaged children, ECCE plays an important role in compensating for the disadvantages in the family and combating educational inequalities.</p>

</div>
<div class="sidebar">
		
<div class="sidebar_item">
  <h3>Useful Links</h3>
  <ul className="sidelist">
   <li className="list"> <a href="https://www.classcentral.com/course/open2study-early-childhood-education-1000">Childhood Education</a>
   </li>
   <li  className="list"><a href=" https://swayam.gov.in/nd2_ugc19_hs28/preview">Government of India Initiative Program</a></li>
   <li  className="list"><a href=" https://wcd.nic.in/sites/default/files/national_ecce_curr_framework_final_03022014%20%282%29.pdf">Curriculum</a></li>

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
<h2>What will you learn?</h2>
<ul className="modlist">
<li>The stages of child development from birth to five years and some important milestones</li>
<li>The different domains in which children develop, and how care givers can support the development in each domain</li>
<li>Laws and regulations that guide the care and education of children in Australia and internationally</li>
<li>The belonging, being and becoming framework for understanding children’s developmental needs</li>
<li>How children’s brains develop, and the importance of interactions with care givers in this process</li>
<li>The importance of play in child development and learning</li>
<li>The concepts of attachment and reciprocity, and their importance in early childhood education</li>
<li>Why taking risks is a essential part of children’s learning and development</li>
<li>Positive forms of behaviour guidance, especially for toddlers</li>
</ul>

<h2>Where will it lead you?</h2>
<br/>
<p  className="learn">If you're wondering what your future could look like in this area, here are some potential careers you could head towards.
</p>
<ul className="modlist">
<li>Early childhood teacher</li>
<li>Child care coordinator</li>
<li>Child care worker</li>
</ul>

				</div>
				<div id="footer">
				<p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
			  </div>
			 
				</div>
		
			);
		}
	}
	export default Childhood;