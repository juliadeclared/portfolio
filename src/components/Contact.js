import React from 'react'
import { Dialog, Typography, TextField, Button } from "@material-ui/core";

export default function Contact({openContact, setOpenContact}) {
  return (
		<Dialog open={openContact} onBackdropClick={() => setOpenContact(false)}>
			<Typography variant="h2">Shoot me a message!</Typography>
			<TextField label="Your Name" />
			<TextField label="Your Email" />
			<TextField label="Your Message" multiline rows={4}/>
      <Button variant="contained">Send </Button>
		</Dialog>
	);
}
