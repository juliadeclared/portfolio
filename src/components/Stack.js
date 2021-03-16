import React, { useState } from "react";
import { Dialog, Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";

const stackIconVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	hidden2: {
		opacity: 0,
		x: "-100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		// scale: [0, 1, 0.5, 1],
		transition: {
			type: "spring",
			delay: 0.5,
			// times: [0, 0.1, 0.9, 1],
		},
	},
	hover: {
		scale: 1.2,
	},
};

export default function Stack({ openStack, setOpenStack }) {
	const [selectedIcon, setSelectedIcon] = useState(".");

	const icons = [
		{ name: "Node JS", img: "node_icon.png" },
		{ name: "React JS", img: "react_icon.png" },
		{ name: "Redux", img: "redux_icon.png" },
		{ name: "Git / GitHub", img: "git_icon.png" },
		{ name: "Express JS", img: "expressjs_icon.png" },
		{ name: "Sequelize", img: "sequelize_icon.png" },
		{ name: "PostgreSQL", img: "postgresql_icon.png" },
		{ name: "Firebase", img: "firebase_icon.png" },
		{ name: "CSS", img: "css_icon.png" },
		{ name: "HTML", img: "html_icon.png" },
		{ name: "Material UI", img: "material_ui_icon.png" },
	];

	const iconsTwo = [
		{ name: "TensorFlow JS", img: "tensorflow_icon.png" },
		{ name: "Three JS", img: "three_icon.png" },
		{ name: "Heroku", img: "heroku_icon.png" },
		{ name: "Travis", img: "travis_icon.png" },
	];

	return (
		<Dialog
			open={openStack}
			onBackdropClick={() => setOpenStack(false)}
			onEscapeKeyDown={() => setOpenStack(false)}
			maxWidth="false"
		>
			<motion.div initial="hidden" animate="visible">
				<Typography variant="h2" align="center">
					Technologies I know
				</Typography>
			</motion.div>
			<Typography variant="h5" align="center">
				{selectedIcon}
			</Typography>
			<Grid container spacing={3} justify="center">
				{icons.map((icon) => {
					return (
						<Grid item key={icon.name}>
							<motion.div
								variants={stackIconVariants}
								className="iconBg"
								drag
								whileHover="hover"
								initial="hidden"
								animate="visible"
								onMouseEnter={() => setSelectedIcon(icon.name)}
								onMouseLeave={() => setSelectedIcon(".")}
							>
								<motion.img
									src={`${process.env.PUBLIC_URL}/${icon.img}`}
									alt={icon.img.slice(0, icon.img.length - 4)}
									className="stackIcon"
								/>
							</motion.div>
						</Grid>
					);
				})}
			</Grid>
			<br />
			<Typography variant="h2" align="center">
				Technologies I am familiar with
			</Typography>
			<br />
			<Grid container spacing={3} justify="center">
				{iconsTwo.map((icon) => {
					return (
						<Grid item key={icon.name}>
							<motion.div
								variants={stackIconVariants}
								className="iconBg"
								drag
								whileHover="hover"
								initial="hidden2"
								animate="visible"
								onMouseEnter={() => setSelectedIcon(icon.name)}
								onMouseLeave={() => setSelectedIcon(".")}
							>
								<motion.img
									src={`${process.env.PUBLIC_URL}/${icon.img}`}
									alt={icon.img.slice(0, icon.img.length - 4)}
									className="stackIcon"
								/>
							</motion.div>
						</Grid>
					);
				})}
			</Grid>
		</Dialog>
	);
}
