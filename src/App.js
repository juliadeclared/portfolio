import React, { useState } from "react";
import { Canvas } from "react-three-fiber";

import Box from "./components/Box";
import About from "./components/About";

export default function App() {
	const [showModal, setShowModal] = useState(true);

	return (
		<>
			<Canvas colorManagement camera={{ position: [-5, 3.5, 10], fov: 10 }}>
				<ambientLight intensity={0.3} />
				<directionalLight position={[0, 10, 5]} intensity={1} />
				<pointLight position={[-10, 0, -20]} intensity={0.7} />
				<pointLight position={[0, -10, 0]} intensity={1.1} />
				<Box />
			</Canvas>
			<About show={showModal} />
		</>
	);
}
