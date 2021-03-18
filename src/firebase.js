// import firebase from "firebase/app";
// import "firebase/firestore";

// export const db = firebase
// 	.initializeApp({
// 		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 		databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// 		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 		appId: process.env.REACT_APP_FIREBASE_APP_ID,
// 	})
// 	.firestore();

// const mailRef = db
// 	.collection("mail")
// 	.get()
// 	.then((doc) => {
// 		console.log(doc.id)
// 	}).catch(error=> console.log(error));

// console.log("db", mailRef);

// const test = () => {
// 	db.collection("mail")
// 		.add({
// 			to: "email@gmail.com",
// 			message: {
// 				subject: "Hello from Firebase!",
// 				text: "This is the plaintext section of the email body.",
// 				html: "This is the <code>HTML</code> section of the email body.",
// 			},
// 		})
// 		.then(() => console.log("Queued email for delivery!"))
// 		.catch((error) => {
// 			console.error("Error writing document: ", error);
// 		});
// };

// test();
