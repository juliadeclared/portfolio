import React from "react";
import { Dialog, Grid, Typography, TextField, Button } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Contact({ openContact, setOpenContact }) {
	return (
		<Dialog
			open={openContact}
			onBackdropClick={() => setOpenContact(false)}
			onEscapeKeyDown={() => setOpenContact(false)}
		>
			<Typography variant="h2">Shoot me a message!</Typography>
			<TextField label="Your Name" required />
			<TextField label="Your Email" type="email" required />
			<TextField label="Your Message" multiline rows={4} required />
			<Button variant="contained" type="submit">
				Send{" "}
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
