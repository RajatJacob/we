import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../components/Input';
import './style.scss';
import Container from '../../components/Container';
import img10 from '../../images/calendar.png';

const Cards = props =>{
	return(
		<container>
		<div>

		<div className="card">
			<div className='card-flow'>
				<div className='card-flow-front'>
					<img src={props.imgsrc} alt="props.name" className="card-img"/>
					
						<h5 className="title">{props.title}</h5>
					
				</div>
					<div className='card-body'>
					<div className="color"> </div>
						<div className="body">
							<p className="content">{props.content}</p>
						</div>
						<div className="weeks">
							<img className="weekimage" src={img10} alt="props.name" /> 
							<p className="weeklabel">{props.label}</p>
						</div>
						<footer>
							<p><button type="button">Learn</button></p>
						</footer>
					</div>
					</div>
			</div>
		<br/>
		<br/>
		</div>
		</container>
				);
			}

			export default Cards;


			// <Input className="icon" label={props.label} icon={ <FontAwesomeIcon icon={faCalendar}/>}/>