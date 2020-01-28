import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

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
				<div className="color">

				</div>
						<div className="body">
						<p className="content">{props.content}</p>
						</div>
						<div className="weeks">
						<p className="week">{props.weeks}</p>
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