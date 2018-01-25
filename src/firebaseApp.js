import * as firebase from 'firebase'
// Required for side-effects
import 'firebase/firestore'

const config = {
	apiKey: 'AIzaSyDt2qZ1XsZCjy5jOH2OWw5phWl7bzte0_c',
	authDomain: 'sandbox-a56c2.firebaseapp.com',
	databaseURL: 'https://sandbox-a56c2.firebaseio.com',
	projectId: 'sandbox-a56c2',
	storageBucket: 'sandbox-a56c2.appspot.com',
	messagingSenderId: '551480978318',
}

const fire = firebase.initializeApp(config)
const firestore = firebase.firestore()

const authProvider = {
	google: new firebase.auth.GoogleAuthProvider(),
	facebook: new firebase.auth.FacebookAuthProvider(),
	twitter: new firebase.auth.TwitterAuthProvider(),
}

export {
	firebase,
	fire,
	firestore,
	authProvider,
}
