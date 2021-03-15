import React, { useState, useContext } from "react";
import { Canvas } from "react-three-fiber";
import { useStore } from "./utils/Context";

import Box from "./components/Box";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";

export default function App() {
  // const {
	// 	openAbout,
	// 	openStack,
	// 	openProjects,
	// 	setOpenAbout,
	// 	setOpenStack,
	// 	setOpenProjects,
	// } = useStore();

  const store = useStore()

	return (
		<>
			<Canvas colorManagement camera={{ position: [-5, 3.5, 10], fov: 10 }}>
				<ambientLight intensity={0.3} />
				<directionalLight position={[0, 10, 5]} intensity={1} />
				<pointLight position={[-10, 0, -20]} intensity={0.7} />
				<pointLight position={[0, -10, 0]} intensity={1.1} />
				<Box
					// setOpenAbout={setOpenAbout}
					// openAbout={openAbout}
					// openStack={openStack}
					// setOpenStack={setOpenStack}
          store={store}
				/>
			</Canvas>
			<About openAbout={store.openAbout} setOpenAbout={store.setOpenAbout} />
			<Stack openStack={store.openStack} setOpenStack={store.setOpenStack} />
			{/* <Projects show={openProjects} /> */}
		</>
	);
}
