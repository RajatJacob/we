import React from 'react';
import Courses from '../../../components/Courses';
import '../all.scss';
import img from '../../../images/ayurvedamian.jpeg';

import vid1 from '../../../images/ethics.mp4';
 class Ayurveda extends React.Component{
	render()
	{
		
		return(
			
			<div className="Ayurveda">
				<Courses className='heading' name="Ayurveda Assistant" imgsrc={img}/>
				<div className="start">
				<div class="sidebar">
			
			 <div class="sidebar_item">
            <h3 >Facts</h3>
            <p align="justify" className="side">
			"The fundamental concept of Ayurveda is to maintain health. Ayurveda does not look at the disease. It looks at the host and [an individual's] vulnerability," Manyam said. </p> </div>
		 
        </div>
		<div className="para">
				<p className="info">Ayurveda Basic Course builds foundation in Basic Ayurveda concepts/ terms, introduces Doshas, concepts related to five elements (Panchmahabhuta), Rasas (taste), Sapta Dhatus( Seven Tissues), Agni, Malas, Daily Regimens and other foundation concepts to build good base for other further studies.</p>
				<p className="info">This course helps you to understand intermediate to advanced procedures in Ayurveda like concept of disease and Panchkarma, pathology of diseases, treatment plan based on body constitution and type (Dosha), details of Panchkarma methods and understanding.</p>
				<p className="info">The Ayurvedic assistant course is more skill based course, designed for proper practical understanding and provides sound guidance for developing a practice as an Ayurvedic Assistant. The course includes comprehensive theoretical but more practical applications of Ayurveda and enables you to acquire and hone your skills in authentic massages and healing therapies adding extra value to your professional profile. The course also equips the learner in relieving physical and mental stress, support in treatment of common health issues, etc.</p>
				
				</div>
				<br/><br/><br/>
				<div class="sidebar">
		
				<div class="sidebar_item">
				  <h3>Useful Links</h3>
				  <ul className="sidelist">
				   <li className="list"><a className="ref" href="https://www.vishuddhiyogaindia.com/wp-content/uploads/2019/06/Course-Plan-and-Progression-Schedule-Sheet-Basic-Online-Ayurveda-.pdf">Ayurveda</a></li>
				   <li  className="list"><a href="https://ayurveda-foryou.com/online-ayurveda-courses.html">Medicines</a>  </li>
				   
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
				<h2>Various modules of the course</h2>
				<ul className="modlist">
				<li>History and Foundation of Ayurveda</li>
				<li>Trisdosha Concept (Three Humors)</li>
				<li>Panchmahabhuta concept</li>
				<li>Dincharya (Morning Regimens)</li>
				<li>Rati Charya (Night Regimens)</li>
				<li>Ritucharya (Seasonal Regimens)</li>
				<li>Concept of Body and Mind</li>
				<li>Marma Points (The Vital Body Points)</li>
				<li>Detoxification and treatment)</li>

				</ul>
				<h2>Learning Outcomes</h2>
				

			<p className="info">This course introduces you to Ayurvedic herbs, it’s properties, usage in various diseases and disorders, understanding the nature of herbs & application in healing. Dravyaguna Vidnyana [Study of Ayurvedic Medicinal Herbs] – It is the science of energetic principles and their various uses for treating diseases.Today while learning and practicing Ayurveda and alternative medicine the knowledge of the Healing Herbs described in Ayurveda is very important. Learning about Herbs in Ayurvedic way is very important but in today’s advanced world the updates and scientific information of the Herbs is also very useful for treating diseases.</p>	
				
				
				</div>
				</div>
				<div id="footer">
				<p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
			  </div>
				</div>
				);
	}
}
export default Ayurveda;
