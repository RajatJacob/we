import React, {
	createContext
} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
import 'firebase/storage';

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
			firebase: firebase,
			firestore: firebase.firestore(),
			auth: firebase.auth(),
			isLoggedIn: false,
			getUserRefByUsername: (username) => this.state.firestore
				.collection("users")
				.where("username", "==", username.toLowerCase()),
			login: (p, ob) => {
				p
					.then(() => {
						ob.setState({
							email: "",
							password: "",
							alert: null
						})
					})
					.catch((error) => {
						ob.setState({
							password: "",
							alert: {
								type: "danger",
								title: error.code,
								message: error.message
							}
						})
					})
				return p
			},
			loginWithGoogle: (ob) => {
				const provider = new firebase.auth.GoogleAuthProvider()
				this.state.login(this.state.auth.signInWithPopup(provider), ob).then(
					() => {
						let u = this.state.auth.currentUser
						let dbu = {}
						this.state.firestore.collection("users").doc(u.uid).get().then(
							doc => {
								dbu = doc.data()
								u.providerData.forEach(
									p => [
										u.updateProfile({
											providerId: u.providerId || p.providerId,
											uid: u.uid || p.uid,
											displayName: dbu.username || u.displayName || p.displayName,
											name: dbu.name || u.name || p.name,
											email: u.email || p.email,
											photoURL: u.photoURL || p.photoURL
										})
									]
								)
							}
						)
					}
				)
			},
			getFollowers: (uid) => {
				if (uid)
					return new Promise(
						(resolve, reject) => {

							this.state.firestore
								.collection("users")
								.where(
									"following",
									"array-contains",
									this.state.firestore
										.collection("users")
										.doc(uid)
								)
								.get()
								.then(
									snapshot => {
										var followers = []
										snapshot.forEach(
											doc => {
												followers
													.push(
														this.state.firestore.collection("users").doc(doc.id)
													)
											}
										)
										resolve(followers)
									}
								)
								.catch(
									err => {
										reject(err)
									}
								)
						}
					)
			},
			getFollowing: uid => {
				return new Promise(
					(resolve, reject) => {
						if (!uid || !this.state.auth.currentUser)
							reject(
								{
									message: "Invalid UID"
								}
							)
						this.state.firestore
							.collection("users")
							.doc(this.state.auth.currentUser.uid)
							.get()
							.then(
								doc => {
									resolve(doc.data().following)
								}
							)
							.catch(
								err => {
									reject(err)
								}
							)
					}
				)
			},
			isFollowing: uid => {
				return new Promise(
					(resolve, reject) => {
						if (!uid || !this.state.auth.currentUser)
							reject(
								{
									message: "Invalid UID"
								}
							)
						this.state.getFollowing(this.state.auth.currentUser.uid)
							.then(
								following => {
									resolve(
										following
											.includes(
												this.state.firestore
													.collection("users")
													.doc(uid)
											)
									)
								}
							)
							.catch(
								err => {
									reject(err)
								}
							)
					}
				)
			},
			follow: uid => {
				return new Promise(
					(resolve, reject) => {
						if (!uid || !this.state.auth.currentUser)
							reject(
								{
									message: "Invalid UID"
								}
							)
						this.state.getFollowing(this.state.auth.currentUser.uid)
							.then(
								following => {

								}
							)
					}
				)
			}
		}

		this.state.auth.onAuthStateChanged(
			u => {
				var data = {}
				var username, name, photoURL
				this.setState({ isLoggedIn: (u) ? true : false })
				if (u) {
					let dbu = {}
					this.state.firestore.collection("users").doc(u.uid).get().then(
						doc => {
							dbu = doc.data()
							u.updateProfile({
								displayName: dbu.displayName || u.displayName.toLowerCase().replace(" ", "-")
							}).then(
								() => {
									username = dbu.username || u.displayName || ""
									name = dbu.name || username
									photoURL = u.photoURL
									if (username) data["username"] = username
									if (name) data["name"] = name
									if (photoURL) data["photoURL"] = photoURL
									this.state.firestore.collection("users").doc(u.uid).update(data)
								}
							)
						}
					)
				}
			}
		)
	}

	render() {
		return ( <
			FirebaseContext.Provider value = {
				{
					...this.state
				}
			} > {
				this.props.children
			} < /FirebaseContext.Provider>
		)
	}
}