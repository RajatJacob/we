import React from 'react';
import Courses from '../../../components/Courses';
import img from '../../../images/elderlymain.jpg';
import vid1 from '../../../images/ethics.mp4';
import '../all.scss'


 class Elderly extends React.Component{
 	render()
 	{
 		return(
			
 			<div className="Elderly">
 			<Courses className='heading' name="Elderly Ethics" imgsrc={img}/>
			 <div className="start">
			 <div class="sidebar">
			
			 <div class="sidebar_item">
            <h3 >Facts</h3>
            <p align="justify" className="side">
			In 2015, the number of people aged 60 years and over worldwide was estimated to be about 900 million. The size of this age group is expected to grow to 2 billion by 2050.</p>
		  </div>
		 
        </div>
		
		 <div className="para">
 			<p  className="info">
 			This course begins by introducing you to the roles and responsibilities of caregivers. You will study the legal and ethical issues involved in the caregiving process. You will also learn how to communicate with individuals with disabilities, stress management, body mechanics, and organizational skills. This course will also discuss the purpose of observing, reporting, and documenting. You will learn the importance of cultural awareness and cultural competency, as well as gain an understanding of the ailments and illnesses that you may encounter, including their treatment and prevention.<br/><br/>
			 </p>
			 <p  className="info">Dementia refers to a spectrum of brain disorders that involve difficulty with memory and thinking and may vary in terms of cause and prognosis. This course will clearly discuss what dementia is.They will teach you how to work with patients’ families. You will study how aging affects the body, the emotional impact of disease and traumatic injuries, and the preparation for a patient's death.<br/><br/>
			 </p>
			 <p  className="info">Caring for the aged as well as those with physical and emotional disabilities requires compassion and understanding Upon completion of this course, you will not only gain the knowledge and necessary skills to provide effective care to any client or family member that you may find in your care, but will also be able to deal with any emergency that you encounter in a calm manner. So, start this course today, and boost your caregiving skills in just a few short hours.<br/><br/>
			 </p>
			 </div>
			 <div class="sidebar">
		
		 <div class="sidebar_item">
		   <h3>Useful Links</h3>
		   <ul className="sidelist">
			<li className="list"> <a className="ref" href="https://alison.com/courses/diploma-in-caregiving-revised-2018/content">Diploma in Caregiving - First Assessment</a></li>
			<li  className="list"><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >Diploma in Caregiving - Second Assessment</a></li>
			<li className="list"><a href="https://alison.com/courses/diploma-in-caregiving-revised-2018/content">Elderly Ethics</a></li>
 			
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
 			<h2>Various Modules covered in the course</h2>
 			<ul className="modlist">
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >
Module 1: The Fundamentals of Caregiving
</a></li>
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >

Module 2: Fundamental Skills in Caregiving

</a></li>
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >

Module 3: Infections, Nutrition &amp; Food Safety

</a></li>
<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >

Module 4: Emergencies, Falls &amp; Fire Safety

</a></li>
 			
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >

Module 6: Understanding Dementia

</a></li>
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >

Module 7: Working with Clients with Dementia

</a></li>
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content"  >

Module 8: How Ageing Effects the Body

</a></li>
 			<li><a href=" https://alison.com/courses/diploma-in-caregiving-revised-2018/content" >

Module 9: Traumatic Injuries &amp; Preparing for Death

</a></li>
 			

			 </ul>
			 </div> </div>
			 <div className="outcome">
			 <h2>Learning Outcomes</h2>
			 <p className="learn"> Ageing and some of the challenges it represents can be a daunting experience for older people, their family, friends and healthcare teams alike.

			 The purpose of this course is to help you better understand and address these challenges by exploring a partnership model of care that aims to build stronger and more beneficial relationships between older people and those who care for them in a variety of care settings.This course on elderly ethics will cover all the aspects of learning and getting awared about the ethics of helping and taking care of the elderly.</p>
			 </div>
			 
			 
			 <div id="footer">
			   <p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
			 </div>
			 </div>
			

 			);
 	}
 }

 export default Elderly;