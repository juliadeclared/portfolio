import React from "react";
import { Dialog, Typography, Grid } from "@material-ui/core";

export default function Stack({ openStack, setOpenStack }) {
	const icons = [
		"node_icon.png",
    "react_icon.png",
		"redux_icon.png",
		"git_icon.png",
		"expressjs_icon.png",
		"sequelize_icon.png",
		"postgresql_icon.png",
		"firebase_icon.png",
		"css_icon.png",
		"html_icon.png",
		"material_ui_icon.png",
	];

	return (
		<Dialog open={openStack} onBackdropClick={() => setOpenStack(false)}>
			<Typography variant="h2" justify="center">Stack -</Typography>
			<Grid container spacing={3} justify="center">
				{icons.map((icon) => {
					return (
						<Grid item key={icon}>
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
