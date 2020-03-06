import React from 'react';
import './style.scss';
import img10 from '../../images/calendar.png';
import Button from '../../components/Button';

const Cards = props => {
	return (
		<container>
			

				<div className="card">
					<div className='card-flow'>
						<div className='card-flow-front'>
							<img src={props.image} alt={props.name} className="card-img" />

							<h4 className="title">{props.title}</h4>

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
								<Button to={props.link}>Learn</Button>
							</footer>
						</div>
					</div>
				</div>
				<br />
				<br />
			
		</container>
	);
}

export default Cards;