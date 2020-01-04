import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<NavigationBar></NavigationBar>
			<Card>
				<h1>Card</h1>
			</Card>
			<Footer></Footer>
		</div>
	);
}

export default App;
