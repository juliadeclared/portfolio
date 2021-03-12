import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Text } from "@react-three/drei";
import { ContextProvider } from "../utils/Context";

import { useStore } from "../utils/Context"

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
  const { setOpenAbout, setOpenStack, setOpenProjects } = useStore();
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);

	const props = useSpring({
		color: hovered || active ? "hotpink" : "#ee6c4d",
	});

	const handleClick = (e) => {
		e.stopPropagation();
		setActive(!active);
    if (name === "About") setOpenAbout(true)
		// setActivePage(name);
    console.log(name)
	};

	return (
		<ContextProvider>
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
					// color="#272640"
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
					{`${name}`.toUpperCase()}
				</Text>
			</a.mesh>
		</ContextProvider>
	);
};

export default function Box() {
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	const mesh = useRef(null);

	const props = useSpring({
		// scale: active ? [4, 2, 1] : [1, 1, 1],
		color: hovered || active ? "hotpink" : "#f9dcc4",
	});

	useFrame(() =>
		hovered || active
			? (mesh.current.rotation.y += 0)
			: (mesh.current.rotation.y += 0.005)
	);

	return (
		<ContextProvider>
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
				<a.meshStandardMaterial
					wireframe
					attach="material"
					color={props.color}
				/>
			</a.mesh>
		</ContextProvider>
	);
};
