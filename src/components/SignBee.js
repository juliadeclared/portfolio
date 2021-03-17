import React, {useRef} from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";

export default function SignBee() {
  const constraintsRef = useRef(null)

	const signBeeStack = [
		{
			scale: 1.2,
			x: 50,
			y: 0,
			name: "TensorFlow JS",
			img: "tensorflow_icon.png",
		},
		{ scale: 1, x: 400, y: -150, name: "Node JS", img: "node_icon.png" },
		{ scale: 1.3, x: 240, y: -175, name: "React JS", img: "react_icon.png" },
		{ scale: 0.8, x: 500, y: -300, name: "Git / GitHub", img: "git_icon.png" },
		{ scale: 1.1, x: 390, y: -325, name: "Firebase", img: "firebase_icon.png" },
		{ scale: 0.6, x: 240, y: -800, name: "CSS", img: "css_icon.png" },
		{ scale: 0.5, x: 190, y: -600, name: "HTML", img: "html_icon.png" },
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
						<Typography variant="h3">SignBee | </Typography>
						<Typography variant="h4"> | Full Stack SDE</Typography>
					</Grid>
					<Typography variant="h6">
						American Sign Language (ASL) teaching app akin to Duolingo. A
						progressive web application allowing users to learn the ASL alphabet
						through gameplay.
					</Typography>
					<br />
					<Typography variant="h6">
						Stack: TensorFlow JS, Node JS, React JS, Git / GitHub, Firebase,
						CSS, HTML, Material UI
					</Typography>
					<br />
					<Typography variant="h5">
						Team: Julia Kravets, Leon Zhao, Naomi Diaz and Goncagul "Gloria" Ay
					</Typography>
					<br />
					<Grid item>
						<Button href="https://signbee-79d6e.web.app/">Play</Button>
						<Button
							variant="outlined"
							href="https://github.com/2011-team-heights100/SignBee"
						>
							GitHub
						</Button>
						<Button
							variant="outlined"
							href="https://www.youtube.com/watch?v=Me-NddzkNp8"
						>
							Demo
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={6} style={{ height: "450px" }} ref={constraintsRef}>
					{signBeeStack.map((icon) => {
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
										src={`${process.env.PUBLIC_URL}/${icon.img}`}
										alt={icon.img.slice(0, icon.img.length - 4)}
										className="stackIcon"
									/>
								</motion.div>
							</Grid>
						);
					})}
				</Grid>
			</Grid>

			<Grid item-container direction="row" align="center">
				<motion.img
					src={process.env.PUBLIC_URL + "/iphone_dashboard.png"}
					alt="dashboard"
					className="iphoneImg"
					whileHover={{
						scale: 1.4,
						transition: {
							type: "spring",
							delay: 0,
							duration: 5,
						},
					}}
				/>
				<motion.img
					src={process.env.PUBLIC_URL + "/iphone_gameplay.png"}
					alt="gameplay"
					className="iphoneImg"
					whileHover={{
						scale: 1.4,
						transition: {
							type: "spring",
							delay: 0,
							duration: 5,
						},
					}}
				/>
				<motion.img
					src={process.env.PUBLIC_URL + "/iphone_stats.png"}
					alt="stats"
					className="iphoneImg"
					whileHover={{
						scale: 1.4,
						transition: {
							type: "spring",
							delay: 0,
							duration: 2,
						},
					}}
				/>
			</Grid>
		</>
	);
}
