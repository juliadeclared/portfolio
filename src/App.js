import React from "react";
import { Canvas } from "react-three-fiber";
import { useStore } from "./utils/Context";
import { useContextBridge } from "@react-three/drei";
import { AppContext } from "./utils/Context";

import Box from "./components/Box";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

export default function App() {
	const ContextBridge = useContextBridge(AppContext);

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

	//position [-5, 3.5, 10]
	return (
		<>
			<div>Double-click any side to find out more</div>
			<Canvas colorManagement camera={{ position: [-5, 7, 10], fov: 10 }}>
				<ContextBridge>
					<ambientLight intensity={0.3} />
					<directionalLight position={[0, 10, 5]} intensity={1} />
					<pointLight position={[-10, 0, -20]} intensity={0.7} />
					<pointLight position={[0, -10, 0]} intensity={1.1} /> */}
					<Box />
				</ContextBridge>
			</Canvas>
			<About openAbout={openAbout} setOpenAbout={setOpenAbout} />
			<Stack openStack={openStack} setOpenStack={setOpenStack} />
			<Projects openProjects={openProjects} setOpenProjects={setOpenProjects} />
			<Contact openContact={openContact} setOpenContact={setOpenContact} />
		</>
	);
};
