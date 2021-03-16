import React from 'react'
import { Dialog, Typography } from "@material-ui/core";

export default function Contact({openContact, setOpenContact}) {
  return (
		<Dialog open={openContact} onBackdropClick={() => setOpenContact(false)}>
			<Typography>This is the Contact page</Typography>
		</Dialog>
	);
}
