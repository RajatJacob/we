import React from 'react';

import './style.scss';
import Popup from '../../components/Popup';


const Courses = props =>{
return(
	<div>
	<table width="100%" cellPadding="5px">
	<tr>
	
	<td width="70%"><h1 className="heading">{props.name}</h1></td>
	<td width="10%"><a className="course" href="/VocationalCourses" className="link" >Courses</a></td>
	<td width="20%" className="td"><Popup/></td>
	</tr>
	</table>

	<div>
	<br/>
	<br/><br/>
	<br/>	
	<img src={props.imgsrc} alt={props.name} height="500px" width="100%"></img>
	</div>
	<div className="introduction">
	<h2 className="intro">Introduction</h2>
	
	
	</div>
	</div>
	);

}
export default Courses;
