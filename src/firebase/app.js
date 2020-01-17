import * as firebase from "firebase/app"

const firebaseConfig = {
	apiKey: "AIzaSyBTdGvBvHqguK_EzoYH0IkfCsrLvmxZj5c",
	authDomain: "we-empower.firebaseapp.com",
	databaseURL: "https://we-empower.firebaseio.com",
	projectId: "we-empower",
	storageBucket: "we-empower.appspot.com",
	messagingSenderId: "897210199343",
	appId: "1:897210199343:web:ed8d27bf2fa36cdeacc5da",
	measurementId: "G-8MZE3VCFP9"
}

firebase.initializeApp(firebaseConfig)

export default firebase