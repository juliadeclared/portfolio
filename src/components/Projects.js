import React from "react";
import { Dialog, Typography } from "@material-ui/core";

export default function Projects({ openProjects, setOpenProjects }) {

	return (
		<Dialog open={openProjects} onBackdropClick={()=>setOpenProjects(false)} >
			<Typography>This is the Projects page</Typography>
		</Dialog>
	);
}
