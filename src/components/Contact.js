import React, { useRef } from "react";
import "firebase/firestore";
import { db } from "../firebase";
import { Dialog, Grid, Typography, TextField, Button } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Contact({ openContact, setOpenContact }) {
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	const sendMessage = async (name, email, message) => {

    const mailRef = await db.collection("mail");

    try {
      await mailRef
			.add({
				to: "juliaakravets@gmail.com",
				message: {
					subject: "Hello from Firebase!",
					text: "This is the plaintext section of the email body.",
					html: "This is the <code>HTML</code> section of the email body.",
				},
			})
    } catch (error) {
      console.log("oh noes!", error)
    }

    
			// .then(() => console.log("Queued email for delivery!"));
    
// let response = db.collection("mail").doc("Rap9yX4Jx7wjhcLYHUHa");
// console.log(response)
// 		const res = await db
// 			.collection("mail")
// 			// .doc(email)
// 			.add({
// 				to: "juliaakravets@gmail.com",
// 				// from: email,
// 				// replyTo: email,
// 				// message: {
// 				// 	name: name,
// 				// 	text: message,
// 				// },
//         message: message
// 			})
// console.log("sendmessage2")
// 			// .catch((error) => {
// 			// 	console.log("Something went wrong", error);
// 			// });

//       console.log("doc id", res.id)
	};

  const handleSubmit = async (e) => {
    // e.preventDefault()
    sendMessage(
      nameRef.current.value,
      emailRef.current.value,
      messageRef.current.value
    )
    console.log(messageRef.current.value)
  }

  

	return (
		<Dialog
			open={openContact}
			onBackdropClick={() => setOpenContact(false)}
			onEscapeKeyDown={() => setOpenContact(false)}
		>
			<Typography variant="h2">Shoot me a message!</Typography>
			<TextField
				label="Your Name"
				required
				inputRef={nameRef}
				// onChange={() => console.log(nameRef.current.value)}
			/>
			<TextField
				label="Your Email"
				type="email"
				required
				inputRef={emailRef}
				// onChange={() => console.log(emailRef)}
			/>
			<TextField
				label="Your Message"
				multiline
				rows={4}
				required
				inputRef={messageRef}
				// onChange={() => console.log(messageRef)}
			/>
			<Button variant="contained" type="submit" onClick={handleSubmit}>
				Send
			</Button>
			<Grid container alignItems="center" justify="center">
				<GitHub
					style={{ fontSize: 60, margin: "10px" }}
					color="secondary"
					onClick={() => window.open("https://github.com/juliadeclared")}
				/>
				<LinkedIn
					style={{ fontSize: 70, margin: "10px" }}
					color="secondary"
					onClick={() =>
						window.open("https://www.linkedin.com/in/julia-kravets/")
					}
				/>
			</Grid>
		</Dialog>
	);
}
