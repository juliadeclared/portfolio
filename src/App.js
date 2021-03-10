// create a canvas with text (and other components maybe?) and use as a Texture on a plane
// onClick sets it as active, and displays "click me" button
// clicking on the button will render a new component (or modal) with page content

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {Text} from "@react-three/drei";
// import About from "./components/About";

extend({ OrbitControls });

const Controls = () => {
	const controls = useRef();

	const { camera, gl } = useThree();

	// useFrame(() => {
	// 	controls.current.update();
	// });

	return (
		<orbitControls
			ref={controls}
			autoRotate
			args={[camera, gl.domElement]}
		></orbitControls>
	);
};

const Plane = ({ name, rotation, position }) => {
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	const [activePage, setActivePage] = useState(null);

	const props = useSpring({
		color: hovered || active ? "hotpink" : "orange",
	});

	const handleClick = () => {
		setActive(!active);
		setActivePage(name);
		console.log(activePage); //figure out how to not select two planes
	};

	return (
		<a.mesh
			name={name}
			position={position}
			rotation={rotation}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			onClick={handleClick}
		>
			<planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<a.meshStandardMaterial
				attach="material"
				color={props.color}
				side={THREE.DoubleSide}
			/>
			<Text
				color="black" // default
				anchorX="center" // default
				anchorY="middle" // default
				depthOffset={-1}
				materialType="MeshPhongMaterial"
			>
				{name}
			</Text>
		</a.mesh>
	);
};

const Box = () => {
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	const mesh = useRef(null);

	const props = useSpring({
		// scale: active ? [4, 2, 1] : [1, 1, 1],
		color: hovered || active ? "hotpink" : "orange",
	});

	useFrame(() =>
		hovered || active
			? (mesh.current.rotation.y += 0)
			: (mesh.current.rotation.y += 0.005)
	);

	return (
		<a.mesh
			ref={mesh}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			onClick={() => setActive(!active)}
			// scale={props.scale}
		>
			<Controls />
			<group>
				<Plane
					name="front"
					position={[0, 0, -0.5009]}
					rotation={[0, Math.PI, 0]}
				/>
				<Plane
					name="back"
					position={[0, 0, 0.5009]}
					rotation={[Math.PI, -Math.PI, Math.PI]}
				/>
				<Plane
					name="left"
					position={[-0.5009, 0, -0.0001]}
					rotation={[0, -Math.PI / 2, 0]}
				/>
				<Plane
					name="right"
					position={[0.5009, 0, -0.0001]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<Plane
					name="bottom"
					position={[0, -0.5009, -0.0001]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
				<Plane
					name="Julia Kravets"
					position={[0, 0.5009, -0.0001]}
					rotation={[Math.PI / 2, Math.PI, 0]}
				/>
			</group>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<a.meshStandardMaterial wireframe attach="material" color={props.color} />
		</a.mesh>
	);
};

export default function App() {
	return (
		<>
			<Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 10 }}>
				<ambientLight intensity={0.3} />
				<directionalLight position={[0, 10, 5]} intensity={1} />
				<pointLight position={[-10, 0, -20]} intensity={0.5} />
				<pointLight position={[0, -10, 0]} intensity={1.5} />
				<Box />
			</Canvas>
			{/* <About show={showModal} /> */}
		</>
	);
}
