import React, { createContext } from 'react';
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
			storage: firebase.storage(),
			auth: firebase.auth(),
			storage: firebase.storage(),
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
			isEnrolled: (coursename)=>
			{
				var courses = []
				return new Promise(
					(resolve, reject) => {
						if(!this.state.auth.currentUser) reject("Not logged in")
						else this.state.firestore
						.collection("users")
						.doc(this.state.auth.currentUser.uid)
						.get()
						.then(
							doc => {
								if(doc.exists) {
									courses = doc.data().coursesEnrolled || []
									resolve(courses.indexOf(coursename) !== -1)
								}
								else resolve(false)
							}
						)
					}
				)
			},
			enroll: (coursename)=>{
				return new Promise(
					(resolve, reject) => {
						var courses = []
						if(!this.state.auth.currentUser) reject("Not logged in")
						else this.state.firestore
						.collection("users")
						.doc(this.state.auth.currentUser.uid)
						.get()
						.then(
							doc =>{
								if(doc.exists) courses = doc.data().coursesEnrolled || []
								this.state.isEnrolled(coursename)
								.then(
									e => {
										var i = -1
										if(e) 
										do {
											i = courses.indexOf(coursename)
											courses.splice(i, 1)
										}while(i!==-1)
										else {
											courses.push(coursename)
										}
										this.state.firestore
										.collection("users")
										.doc(this.state.auth.currentUser.uid)
										.update({coursesEnrolled: courses})
										.then(
											x => resolve(x)
										)
										.catch(
											err=> reject(err)
										)
									}
								)
							}
						)
					}
				)	
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
			}
		}

		this.state.auth.onAuthStateChanged(
			u => {
				this.setState({ isLoggedIn: (u) ? true : false })
				if (u) {
					let dbu = {}
					this.state.firestore.collection("users").doc(u.uid).get().then(
						doc => {
							dbu = doc.data()
						}
					)
					u.updateProfile({
						displayName: dbu.displayName || u.displayName.toLowerCase().replace(" ", "-")
					}).then(
						() => {
							this.state.firestore.collection("users").doc(u.uid).update(
								{
									username: dbu.displayName || u.displayName || ""
								}
							)
						}
					)
				}
			}
		)
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