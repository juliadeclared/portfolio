import React, { useEffect, useState } from "react";
import { Dialog, Typography, Grid } from "@material-ui/core";

export default function Stack({ openStack, setOpenStack }) {
	// const [open, setOpen] = useState(show);

	// useEffect(() => {
	// 	setOpen(show);
	// }, [show]);

	// const handleClickAway = () => {
	// 	setOpenStack(false);
	// };

	const icons = [
		"react_icon.png",
		"react_icon.png",
		"react_icon.png",
		"react_icon.png",
	];

	return (
		<Dialog open={openStack} onBackdropClick={() => setOpenStack(false)}>
			<Typography variant="h2">STACK</Typography>
			<Grid container spacing={3} justify="center">
				{icons.map((icon) => {
					return (
						<Grid item>
							<img
								src={`${process.env.PUBLIC_URL}/${icon}`}
								alt={icon.slice(0, icons[1].length - 4)}
								className="stackIcon"
							/>
						</Grid>
					);
				})}
			</Grid>
		</Dialog>
	);
}
