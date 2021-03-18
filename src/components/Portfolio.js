import React, { useRef } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";

export default function Portfolio() {
  const constraintsRef = useRef(null);

	const portfolioStack = [
		{
			scale: 1.2,
			x: 50,
			y: 0,
			name: "Three JS",
			img: "three_icon.png",
		},
		{ scale: 1, x: 400, y: -150, name: "Node JS", img: "node_icon.png" },
		{ scale: 1.3, x: 240, y: -175, name: "React JS", img: "react_icon.png" },
		{ scale: 0.8, x: 500, y: -300, name: "Git / GitHub", img: "git_icon.png" },
		{ scale: 1.1, x: 390, y: -325, name: "Firebase", img: "firebase_icon.png" },
		{ scale: 0.6, x: 190, y: -450, name: "CSS", img: "css_icon.png" },
		{
			scale: 0.8,
			x: 240,
			y: -960,
			name: "Framer Motion",
			img: "framer_icon.png",
		},
		{
			scale: 0.9,
			x: 40,
			y: -850,
			name: "Material UI",
			img: "material_ui_icon.png",
		},
	];
  return (
		<>
			<Grid container direction="row">
				<Grid item container direction="column" xs={6}>
					<br />
					<Grid item container alignItems="baseline">
						<Typography variant="h3">Portfolio | </Typography>
						<Typography variant="h4"> | Full Stack SDE</Typography>
					</Grid>
					<Typography variant="h6">
						You’re lookin’ at it! For my portfolio site, I wanted to show off my
						creativity while learning some new technologies. I really enjoy the
						experience of clean, yet interactive websites, and my goal was to
						create a site of that nature. A lot of the components are
						interactive, so go ahead and drag ‘em around and do as you please!
						Are you having a good time yet? I hope so.
					</Typography>
					<br />
					<Typography variant="h6">
						Stack: Three JS, Node JS, React JS, Git / GitHub, Firebase, CSS,
						Framer Motion, Material UI
					</Typography>
					<br />
					<Button
						variant="outlined"
						href="https://github.com/juliadeclared/portfolio"
					>
						GitHub
					</Button>
				</Grid>
				<Grid item xs={6} style={{ height: "450px" }} ref={constraintsRef}>
					{portfolioStack.map((icon) => {
						return (
							<Grid item key={icon.name}>
								<motion.div
									className="iconBg"
									drag
									dragConstraints={constraintsRef}
									whileHover={{
										scale: 1.4,
										transition: {
											type: "spring",
											delay: 0,
											duration: 5,
										},
									}}
									initial={{
										opacity: 0,
										x: "100vw",
									}}
									animate={{
										opacity: 1,
										x: icon.x,
										y: icon.y,
										scale: icon.scale,
										transition: {
											type: "spring",
											delay: Math.random(),
										},
									}}
								>
									<motion.img
										src={`${process.env.PUBLIC_URL}/stackIcons/${icon.img}`}
										alt={icon.img.slice(0, icon.img.length - 4)}
										className="stackIcon"
									/>
								</motion.div>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
}
