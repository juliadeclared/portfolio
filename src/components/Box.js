import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Text } from "@react-three/drei";

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

export default function Box() {
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
		</a.mesh>
	);
};
