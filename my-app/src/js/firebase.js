import * as firebase from 'firebase'
let database

export const init = () => {
	let config = {
		apiKey: "00000000000000000000000000000000",
        authDomain: "newsletter-app-7b62b.firebaseapp.com",
        databaseURL: "https://newsletter-app-7b62b.firebaseio.com",
        projectId: "newsletter-app-7b62b",
        storageBucket: "newsletter-app-7b62b.appspot.com",
        messagingSenderId: "0000000000"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}