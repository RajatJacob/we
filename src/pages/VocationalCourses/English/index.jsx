import React from 'react';
import ReactDOM from 'react-dom';
import Courses from '../../../components/Courses';
import './style.scss';
 class English extends React.Component{
	render()
	{
		return(
			<div className="English">
				<Courses className='heading' name="English Speaking"/>
				<div className="Eng">
				<p className="info"> In this course you will be introduced to the art of speaking. You will first learn about the ways that meaning is encoded through verbal and nonverbal symbols. You will also learn how the meanings of words are created by people, their experiences, and education. This course is divided into many modules to learn more proper english language.
				<ul>
				<h3><li>Modules</li></h3>
				<ol>
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
				
				
				</ul>
<a href="https://alison.com/topic/learn/70750/encoding-meaning-using-verbal-and-nonverbal-symbols#course-plan">Verbal Communication</a>
<br/>



				</p>
				</div>
			</div>
			);
		}
	}
	export default English;