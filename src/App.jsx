import React from 'react';
import './App.scss';
import Card from './components/Card';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Card>
					<h1>WE</h1>
				</Card>
			</div>
		);
	}
}
