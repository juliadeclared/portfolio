import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import { useStore } from "./utils/Context";
import { useContextBridge } from "@react-three/drei";
import { AppContext } from "./utils/Context";
import { Grid, Typography } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { motion } from "framer-motion";

import Box from "./components/Box";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
	const ContextBridge = useContextBridge(AppContext);
	const [show, setShow] = useState(false);

	const {
		openAbout,
		openStack,
		openProjects,
		openContact,
		setOpenAbout,
		setOpenStack,
		setOpenProjects,
		setOpenContact,
	} = useStore();

	return (
		<>
			<Grid container alignItems="center">
				<motion.div
					whileHover={{ scale: 1.1 }}
					onClick={() => setShow(!show)}
					onMouseLeave={() => setShow(false)}
				>
					<HelpIcon
						style={{ fontSize: 50, margin: "10px"}}
            color="secondary"
					/>
				</motion.div>
				{show && (
					<motion.div
						id="hint"
						initial={{ scale: 0, x: "-14vw" }}
						animate={{ scale: 1, x: 0 }}
					>
						<Typography variant="h5" style={{ marginTop: "10px" }}>
							Double-click any side to find out more
						</Typography>
					</motion.div>
				)}
			</Grid>
			<Canvas colorManagement camera={{ position: [-5, 7, 10], fov: 10 }}>
				<ContextBridge>
					<ambientLight intensity={0.3} />
					<directionalLight position={[0, 10, 5]} intensity={1} />
					<pointLight position={[-10, 0, -20]} intensity={0.7} />
					<pointLight position={[0, -10, 0]} intensity={1.1} />
					<Box />
				</ContextBridge>
			</Canvas>
			<About openAbout={openAbout} setOpenAbout={setOpenAbout} />
			<Stack openStack={openStack} setOpenStack={setOpenStack} />
			<Projects openProjects={openProjects} setOpenProjects={setOpenProjects} />
			<Contact openContact={openContact} setOpenContact={setOpenContact} />
		</>
	);
}
