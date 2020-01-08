import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';

function App() {
	return (
		<Router>
		<div className="App">
			<NavigationBar />
			<div className="Content">
				<Switch>
					<Route exact path="/">
						<h1>Home</h1>
						<div className="container">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum scelerisque leo nec bibendum. In ac ipsum elementum, malesuada tortor id, imperdiet augue. In hac habitasse platea dictumst. Aliquam lobortis eros eu nibh lacinia vestibulum. In malesuada, nisl ut rhoncus elementum, tortor enim rhoncus nunc, ac dignissim quam augue nec massa. Donec gravida in purus id tempus. Ut eget massa porta, vehicula massa sit amet, aliquam tortor.</p>
							<p>Sed libero odio, consectetur sed eros non, facilisis semper elit. Cras maximus lacus ac euismod porta. Aliquam sodales purus iaculis convallis rutrum. Nullam laoreet gravida odio, at porta augue ullamcorper quis. Quisque commodo rhoncus ante ac eleifend. Proin eget tortor accumsan, volutpat ex eu, egestas sapien. Curabitur pretium malesuada est ac egestas. Donec eu porta augue.</p>
							<p>Maecenas aliquet lobortis diam. Sed in massa nec elit pharetra molestie. Sed condimentum ligula vel justo vehicula tempor. Aliquam dapibus cursus metus at tempus. Aenean nec dapibus sem. Integer non lacus ut erat lacinia dignissim eu ut augue. In consequat ante dolor, pulvinar malesuada augue volutpat sit amet. Nam eget tellus non odio finibus tempus ut ac nunc. Nullam vehicula vulputate dui eu scelerisque. Nulla ut eros justo. Proin maximus vestibulum pulvinar. Nunc odio nibh, bibendum sed mattis semper, sodales sed metus.</p>
							<p>Fusce tristique commodo ullamcorper. Pellentesque egestas varius lectus vel fermentum. Nulla condimentum, sem ut tincidunt suscipit, leo ipsum feugiat dui, ac laoreet justo sapien in metus. Fusce nec lectus tincidunt, eleifend ante vel, mollis orci. Maecenas volutpat mi a quam laoreet pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed dolor iaculis, fringilla justo faucibus, rutrum lacus. Phasellus maximus arcu ac orci efficitur, at ornare velit tempus. Duis tincidunt dapibus sagittis.</p>
							<p>Duis nisl leo, vulputate vel ligula non, aliquet rhoncus ante. Aliquam finibus at lorem nec vestibulum. Etiam eu semper mauris, vitae cursus elit. Mauris sed risus odio. In elit ipsum, tincidunt non facilisis pharetra, feugiat vel velit. Pellentesque bibendum tincidunt massa gravida ornare. Maecenas sodales enim in velit ultrices, in pretium elit tempus. Nunc arcu ligula, consequat non efficitur eget, ornare a lacus. Donec quam ex, egestas non ipsum eu, pharetra pretium dui. Vestibulum facilisis pharetra lorem, quis tincidunt nunc sodales eu. Donec elementum porttitor nibh, sed pretium lorem dapibus quis. Vivamus viverra odio at nulla dictum finibus. Nunc semper mauris vel odio malesuada, ac varius justo dapibus. Donec faucibus a magna id tincidunt. Donec vitae eleifend erat.</p>
						</div>
					</Route>
					<Route exact path="/who-we-are">
						Who We Are
					</Route>
					<Route exact path="/opportunities">
						Opportunities
				  	</Route>
					<Route exact path="/join-us">
						Join Us
				  	</Route>
					<Route exact path="/support">
						Support
				  	</Route>
					<Route exact path="/community">
						Community
				  	</Route>
				</Switch>
			</div>
			<Footer />
		</div>
		</Router>
	);
}

export default App;
