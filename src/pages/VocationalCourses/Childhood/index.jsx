import React from 'react';
import ReactDOM from 'react-dom';
import Courses from '../../../components/Courses';
import './style.scss';
 class Childhood extends React.Component{
	render()
	{
		return(
			<div className="Childhood">
				<Courses className='heading' name="Early Childhood Care and Education"/>
				<div className="Child">
				<p className="info">You will discover the world of children in the early years. Though child development patterns are reasonably universal, every child is unique, has individual potential and will learn differently from their peers.

By exploring many aspects of child development and learning you will gain insight into how to support infants, toddlers and pre-schoolers during this critical stage of life.
<br/>
<h4>What will you learn?</h4>
<ul>
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

<h4>Where could this lead me?</h4>
<br/>
If you're wondering what your future could look like in this area, here are some potential careers you could head towards.
<ul>
<li>Early childhood teacher</li>
<li>Child care coordinator</li>
<li>Child care worker</li>
</ul>
				</p>
				<p>For further references, please visit</p><br/>
				<a href="https://www.classcentral.com/course/open2study-early-childhood-education-1000">Childhood Education</a>
			</div>
			</div>
			);
		}
	}
	export default Childhood;