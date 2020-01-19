import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';

export default class Login extends React.Component {
	render() {
		return (
			<div className="LoginPage">
				<Card noContainer>
					<div className="grid-container">
						<Container>
							<h1>Login</h1>
						</Container>
						<Container>
							<Input label="E-mail" icon="@"/>
							<Input label="Password" type="password"
							icon="*"/>
						</Container>
					</div>
				</Card>
			</div>
		)
	}
}