import React, { useEffect, useState } from "react";
import { Dialog, Typography } from "@material-ui/core";

export default function Projects({ show }) {
	const [open, setOpen] = useState(show);

	useEffect(() => {
		setOpen(show);
	}, [show]);

	const handleClickAway = () => {
		setOpen(false);
	};
	return (
		<Dialog open={open} onBackdropClick={handleClickAway}>
			<Typography>This is the Projects page</Typography>
		</Dialog>
	);
}
