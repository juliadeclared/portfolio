// const Plane = ({
// 	name,
// 	color = 0xffff00,
// 	rotation = [0, 0, 0],
// 	position = [0, 0, -10],
// }) => (
// 	<mesh name={name} position={position} rotation={rotation}>
// 		<planeBufferGeometry attach="geometry" args={[10, 10, 10]} />
// 		<meshBasicMaterial
// 			attach="material"
// 			color={color}
// 			side={THREE.DoubleSide}
// 		/>
// 	</mesh>
// );
// const Box = (props) => {
// 	const { tagName: Tag, className, variant, children } = props;
// 	return (
// 		<group>
// 			<Plane name="front" />
// 			<Plane
// 				name="left"
// 				color={0x00ff00}
// 				position={[-5, 0, -5]}
// 				rotation={[0, Math.PI / 2, 0]}
// 			/>
// 			<Plane
// 				name="right"
// 				color={0x00ffff}
// 				position={[5, 0, -5]}
// 				rotation={[0, Math.PI / 2, 0]}
// 			/>
// 			<Plane
// 				name="bottom"
// 				color={0xffccff}
// 				position={[0, -5, -5]}
// 				rotation={[Math.PI / 2, 0, 0]}
// 			/>
// 			<Plane
// 				name="top"
// 				color={0xccccff}
// 				position={[0, 5, -5]}
// 				rotation={[Math.PI / 2, 0, 0]}
// 			/>
// 		</group>
// 	);
// };

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Text } from "@react-three/drei";
import About from "./components/About";
import Box from "./components/Box";

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

	const handleClick = (e) => {
		e.stopPropagation();
		setActive(!active);
		setActivePage(name);
		console.log(activePage);
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
				// color="black"
				// fillOpacity={0.5}
				anchorX="center"
				anchorY="middle"
				depthOffset={-1}
				materialType="meshStandardMaterial"
				font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
				maxWidth={1}
				fontSize={0.17}
				textAlign="center"
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
					name="Projects"
					position={[0, 0, -0.5009]}
					rotation={[0, Math.PI, 0]}
				/>
				<Plane
					name="Stack"
					position={[0, 0, 0.5009]}
					rotation={[Math.PI, -Math.PI, Math.PI]}
				/>
				<Plane
					name="About"
					position={[-0.5009, 0, -0.0001]}
					rotation={[0, -Math.PI / 2, 0]}
				/>
				<Plane
					name="Contact"
					position={[0.5009, 0, -0.0001]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<Plane
					name="Thank You"
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
			{/* <Billboard
				follow={true} // Follow the camera (default=true)
				lockX={false} // Lock the rotation on the x axis (default=false)
				lockY={false} // Lock the rotation on the y axis (default=false)
				lockZ={false} // Lock the rotation on the z axis (default=false)
				args={[2, 1]}
				position={[0, 0, 0]}
			/> */}
		</a.mesh>
	);
};

export default function App() {
	const [showModal, setShowModal] = useState(true);

	return (
		<>
			<Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 10 }}>
				<ambientLight intensity={0.3} />
				<directionalLight position={[0, 10, 5]} intensity={1} />
				<pointLight position={[-10, 0, -20]} intensity={0.5} />
				<pointLight position={[0, -10, 0]} intensity={1.5} />
				<Box />
			</Canvas>
			<About show={showModal} />
		</>
	);
}