import React, { createContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

export const FirebaseContext = createContext();

export default class FirebaseContextProvider extends React.Component {
	constructor(props) {
		super(props);
		firebase.initializeApp({
			apiKey: "AIzaSyBTdGvBvHqguK_EzoYH0IkfCsrLvmxZj5c",
			authDomain: "we-empower.firebaseapp.com",
			databaseURL: "https://we-empower.firebaseio.com",
			projectId: "we-empower",
			storageBucket: "we-empower.appspot.com",
			messagingSenderId: "897210199343",
			appId: "1:897210199343:web:ed8d27bf2fa36cdeacc5da",
			measurementId: "G-8MZE3VCFP9"
		});
		firebase.firestore().enablePersistence()
			.catch(function (err) {
				console.log(err.code + ": " + err.message)
			})
		this.state = {
			firestore: firebase.firestore(),
			auth: firebase.auth()
		}
		this.state.auth.onAuthStateChanged((user) => {
			if (user)
				this.setState({
					user: {
						displayName: user.displayName,
						email: user.email,
						photoURL: user.photoURL,
						emailVerified: user.emailVerified,
						uid: user.uid
					}
				});
			else this.setState({ user: null })
		});
	}

	render() {
		return (
			<FirebaseContext.Provider value={
				{ ...this.state }
			}>
				{this.props.children}
			</FirebaseContext.Provider>
		)
	}
}