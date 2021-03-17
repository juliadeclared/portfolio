import React, { useState } from "react";
import { Dialog, Grid, Typography, Button } from "@material-ui/core";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import SignBee from "./SignBee";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";

const projectVariants = {
	hiddenLeft: {
		opacity: 0,
		x: "-100vw",
	},
	hiddenRight: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0.1,
			stiffness: 50,
		},
	},
};

export default function Projects({ openProjects, setOpenProjects }) {
	const [activeComponent, setActiveComponent] = useState(1);
	const [direction, setDirection] = useState(null);

	const maxProjects = 2;

	const scrollRight = () => {
		setDirection("hiddenRight");
		if (activeComponent === maxProjects) setActiveComponent(1);
		else setActiveComponent(activeComponent + 1);
	};

	const scrollLeft = () => {
		setDirection("hiddenLeft");
		if (activeComponent === 1) setActiveComponent(maxProjects);
		else setActiveComponent(activeComponent - 1);
	};

	return (
		<>
			<Dialog
				open={openProjects}
				onBackdropClick={() => setOpenProjects(false)}
				onEscapeKeyDown={() => setOpenProjects(false)}
				maxWidth="false"
			>
				<Grid container justify="space-between">
					<ArrowBackIos onClick={scrollLeft} />
					<Typography variant="h2" align="center">
						Projects
					</Typography>
					<ArrowForwardIos onClick={scrollRight} />
				</Grid>
				<br />
				{activeComponent === 1 && (
					<motion.div
						variants={projectVariants}
						initial={direction}
						animate="visible"
					>
						<SignBee />
					</motion.div>
				)}
				{activeComponent === 2 && (
					<motion.div
						variants={projectVariants}
						initial={direction}
						animate="visible"
					>
						<Portfolio />
					</motion.div>
				)}
			</Dialog>
		</>
	);
}
