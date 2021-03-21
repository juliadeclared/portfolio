import React, { useRef, useState } from "react";
import "firebase/firestore";
import { Dialog, Grid, Typography, TextField, Button, Popper } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { motion } from "framer-motion";

export default function Contact({ openContact, setOpenContact }) {
	const nameRef = useRef();
	const messageRef = useRef();
  const [openPopper, setOpenPopper] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubmit = () => {
    const mailto = `mailto:juliaakravets@gmail.com?subject=${nameRef.current.value} Connection Request&body=${messageRef.current.value}`;

		window.location.href = mailto

    setOpenContact(false);
  }

  const mouseOver = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenPopper(true);
  }

  const mouseLeave = () => {
		setOpenPopper(false);
	};

	return (
		<Dialog
			open={openContact}
			onBackdropClick={() => setOpenContact(false)}
			onEscapeKeyDown={() => setOpenContact(false)}
		>
			<Typography variant="h2">Shoot me a message!</Typography>
			<TextField label="Your Name" required inputRef={nameRef} />
			<TextField
				label="Your Message Draft"
				multiline
				rows={4}
				required
				inputRef={messageRef}
			/>
			<Button
				variant="contained"
				type="submit"
				onClick={handleSubmit}
				onMouseEnter={mouseOver}
				onMouseLeave={mouseLeave}
			>
				Send Email
			</Button>
			<Popper open={openPopper} anchorEl={anchorEl} style={{ zIndex: 1400 }}>
				<motion.div
					className="popper"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: "spring", duration: 0.3 }}
				>
					<Typography>Will open your default email client</Typography>
				</motion.div>
			</Popper>
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
