import React, { useRef } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { useStore } from "../utils/Context";

export default function TigerSugar() {
	const { matches } = useStore();
	const constraintsRef = useRef(null);

	const TigerSugarStack = [
		{
			scale: 0.9,
			x: 80,
			y: 10,
			xx: 50,
			yy: 50,
			name: "Redux",
			img: "redux_icon.png",
		},
		{
			scale: 0.8,
			x: 400,
			y: -150,
			xx: 110,
			yy: 40,
			name: "Node JS",
			img: "node_icon.png",
		},
		{
			scale: 1,
			x: 240,
			y: -200,
			xx: 25,
			yy: -10,
			name: "React JS",
			img: "react_icon.png",
		},
		{
			scale: 0.8,
			x: 500,
			y: -300,
			xx: -10,
			yy: -210,
			name: "Git / GitHub",
			img: "git_icon.png",
		},
		{
			scale: 0.7,
			x: 350,
			y: -325,
			xx: 125,
			yy: -250,
			name: "Express JS",
			img: "expressjs_icon.png",
		},
		{
			scale: 0.6,
			x: 240,
			y: -800,
			xx: 180,
			yy: -205,
			name: "CSS",
			img: "css_icon.png",
		},
		{
			scale: 0.5,
			x: 230,
			y: -630,
			xx: 220,
			yy: -350,
			name: "HTML",
			img: "html_icon.png",
		},
		{
			scale: 0.9,
			x: 120,
			y: -840,
			xx: 200,
			yy: -500,
			name: "Material UI",
			img: "material_ui_icon.png",
		},
		{
			scale: 0.5,
			x: 370,
			y: -1050,
			xx: 95,
			yy: -370,
			name: "Sequelize",
			img: "sequelize_icon.png",
		},
		{
			scale: 0.6,
			x: 20,
			y: -1050,
			xx: -4,
			yy: -420,
			name: "PostgreSQL",
			img: "postgresql_icon.png",
		},
		{
			scale: 0.7,
			x: -10,
			y: -1350,
			xx: 200,
			yy: -480,
			name: "Heroku",
			img: "heroku_icon.png",
		},
		{
			scale: 0.8,
			x: 490,
			y: -1350,
			xx: 70,
			yy: -500,
			name: "Travis",
			img: "travis_icon.png",
		},
	];
	return (
		<>
			<Grid container direction={matches ? "column" : "row"}>
				<Grid item container direction="column" xs={matches ? 11 : 6}>
					<br />
					<Grid
						item
						container
						alignItems="baseline"
						justify={matches ? "center" : "flex-start"}
					>
						<Typography variant="h3">Tiger Sugar |</Typography>
						<Typography variant="h4">| Full Stack SDE</Typography>
					</Grid>
					{matches && <br />}
					<Typography variant="h6">
						A fictional e-commerce site that specializes in silly potions, such
						as Kanye West's Tears, that will make all your dreams come true!
					</Typography>
					<br />
					<Typography variant="h6">
						Stack: Node JS, React JS, Redux, Express, Sequelize, PostgreSQL, Git
						/ GitHub, CSS, HTML, Material UI, Heroku, Travis
					</Typography>
					<br />
					<Typography variant="h5">
						Team: Julia Kravets, Lindsey Pak, Samantha Shapland and Priscila
						Pintado
					</Typography>
					<br />
					<Grid item align="center">
						<Button href="https://tiger-sugar-balm.herokuapp.com/">
							Deployed Site
						</Button>
						<Button
							variant="outlined"
							href="https://github.com/Team-TigerSugar/tiger-sugar-shop"
						>
							GitHub
						</Button>
					</Grid>
				</Grid>
				<Grid
					item
					xs={6}
					style={{
						height: matches ? "210px" : "450px",
						minWidth: matches ? "100%" : "auto",
					}}
					ref={constraintsRef}
				>
					{TigerSugarStack.map((icon) => {
						return (
							<Grid item container key={icon.name} direction="row">
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
										x: matches ? icon.xx : icon.x,
										y: matches ? icon.yy : icon.y,
										scale: matches ? 1 : icon.scale,
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

			<Grid item container direction="column" align="center">
				<motion.img
					src={process.env.PUBLIC_URL + "/TS1.png"}
					alt="landing"
					className="laptopImg"
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
					src={process.env.PUBLIC_URL + "./TS2.png"}
					alt="gameplay"
					className="laptopImg"
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
					src={process.env.PUBLIC_URL + "/TS3.png"}
					alt="stats"
					className="laptopImg"
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
