import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
}).firestore();

const test = () => {
	db
		.collection("mail")
		.add({
			to: "email@gmail.com",
			message: {
				subject: "Hello from Firebase!",
				text: "This is the plaintext section of the email body.",
				html: "This is the <code>HTML</code> section of the email body.",
			},
		})
		.then(() => console.log("Queued email for delivery!"));
};

test()
