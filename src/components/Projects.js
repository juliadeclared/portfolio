import React from "react";
import { Dialog, Grid, Typography, Button } from "@material-ui/core";

export default function Projects({ openProjects, setOpenProjects }) {
	return (
		<Dialog
			open={openProjects}
			onBackdropClick={() => setOpenProjects(false)}
			onEscapeKeyDown={() => setOpenProjects(false)}
			maxWidth="false"
		>
			<Typography variant="h2">Projects</Typography>
			<br />

			<Typography variant="h3">SignBee | </Typography>
			<Typography variant="h5">Full Stack SDE</Typography>
			<Typography variant="h6">
				American Sign Language (ASL) teaching app akin to Duolingo. A
				progressive web application allowing users to learn the ASL alphabet
				through gameplay.
			</Typography>
			<Button
				variant="outlined"
				href="https://github.com/2011-team-heights100/SignBee"
			>
				GitHub
			</Button>
			<Grid item-container direction="row" spacing={3}>
				<img
					src={process.env.PUBLIC_URL + "/iphone_dashboard.png"}
					alt="dashboard"
					className="iphoneImg"
				/>
				<img
					src={process.env.PUBLIC_URL + "/iphone_gameplay.png"}
					alt="gameplay"
					className="iphoneImg"
				/>
				<img
					src={process.env.PUBLIC_URL + "/iphone_stats.png"}
					alt="stats"
					className="iphoneImg"
				/>
			</Grid>
		</Dialog>
	);
}
