import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
	static contextType = FirebaseContext;

	render() {
		const { auth } = this.context
		auth.signOut()
		return (
			<Redirect to="/" />
		)
	}
}