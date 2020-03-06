import React from 'react';
import Courses from '../../../components/Courses';
import '../all.scss';
import img from '../../../images/englishmain.jpg';
import vid1 from '../../../images/ethics.mp4';

 class English extends React.Component{
	render()
	{
		return(
			<div className="English">
				<Courses className='heading' name="English Speaking" imgsrc={img}/>
				<div className="start">
				<div class="sidebar">
			
				<div class="sidebar_item">
			   <h3 >Facts</h3>
			   <p align="justify" className="side">
			   Over 840 million people speak English as a first or second language, which makes it the second most-spoken language right after Mandarin.  </p>
			   </div>
			
		   </div>
		   
		   
<div className="para">
				<p className="info"> In this course you will be introduced to the art of speaking. You will first learn about the ways that meaning is encoded through verbal and nonverbal symbols. You will also learn how the meanings of words are created by people, their experiences, and education. This course is divided into many modules to learn more proper english language.</p>
				<p className="info">Just knowing word-meanings and grammar rules is not enough. Pronunciation is a significant aspect of communication that can make or mar any conversation. Know how to pronounce words correctly by learning about stress patterns, intonation and modulation.	</p>
				<p className="info">Speaking English allows you to actually broaden your world, from job opportunities to the ability to relate to people from every country.

				Knowing the language makes it much more interesting every trip.</p>
				
				<p className="info">Anywhere you want to go in the world you can find someone who speaks English. If we account only the country where the English language is the official language, the United Kingdom, Australia, U.S.A., Canada, Ireland, New Zealand and the Caribbean countries, there are more than 400 million native English speakers.
				
				Simply put, we must recognize that English is an international language, the main language of this planet.</p>
				
				</div>


				<div class="sidebar">
		
		 <div class="sidebar_item">


		   <h3>Useful Links</h3>
		   <ul className="sidelist">
			<li className="list"> <a className="ref" href="https://www.udemy.com/topic/English-Language/?utm_source=adwords&utm_medium=udemyads&utm_campaign=EnglishLanguage_v.NONP_la.EN_cc.INDIA_ti.5626&utm_content=deal4584&utm_term=_._ag_81684902582_._ad_397998123549_._kw_english%20speaking%20course_._de_c_._dm__._pl__._ti_kwd-35561960_._li_9062015_._pd__._&matchtype=e&gclid=Cj0KCQiAnL7yBRD3ARIsAJp_oLYKRE8p-NJtD5CvaTFlQaCZdx-o4CIOVubhytMw3HLPN1o-EXcHcDwaAlriEALw_wcB">English language</a></li>
			<li  className="list"><a href="https://alison.com/topic/learn/70750/encoding-meaning-using-verbal-and-nonverbal-symbols#course-plan">Verbal Communication</a></li>
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
				<h2><li>Modules</li></h2>
				<ol className="modlist">
<li>Describe the difference between speech and writing</li>
<li>Define communication</li>
<li>Identify the one-way communication model, two-way communication model, and the inferential model of communication</li>
<li>Define a symbol</li>
<li>List the filters of communication</li>
<li>Create a checklist for choosing the best words in your writing</li>
<li>Define content, functional, connotative, abstract, concrete, and obsolete words</li>
<li>Identify modifiers, parallel form, indefinite starters, and dangling modifiers</li>
<li>List the "Golden Rules" for writing</li>
				</ol>
				</div>
				</div>
				<div id="footer">
				<p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
			  </div>
			</div>
			);
		}
	}
	export default English;