import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

	const Cards = props =>{
		return(
			<div className="card ">
				<div className='card-flow'>
					<div className='card-flow-front'>
					<img src={props.imgsrc} alt="props.name  " className="card-img"/></div>
						
						<h4 className="card-title">{props.title}</h4>
						<div className='card-body'>
						<p className="content">{props.content}</p>
					
					</div>
				</div>
			</div>
			);
	}

	export default Cards;

		 //<button  className="button">Proceed</button>