import React, { useRef, useState } from "react";
import * as THREE from "three"
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const Plane = ({
	name,
	// color = "0xffff00",
	rotation = [0, 0, 0],
	position = [0, 0, -.5009],
}) => {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
		color: hovered ? "hotpink" : "orange",
	});

  return (
		<mesh
			name={name}
			position={position}
			rotation={rotation}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<a.meshBasicMaterial
				attach="material"
				color={props.color}
				side={THREE.DoubleSide}
			/>
		</mesh>
	);};

const Box = (planeProps) => {
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);
	const mesh = useRef(null);

  // const { tagName: Tag, className, variant, children } = planeProps;

	const props = useSpring({
		// scale: active ? [2, 2, 2] : [1, 1, 1],
		color: hovered ? "hotpink" : "orange",
	});

	useFrame(() =>
		hovered
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
				<Plane name="front" />
				<Plane
					name="left"
					color={0x00ff00}
					position={[-0.5009, 0, -0.001]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<Plane
					name="right"
					color={0x00ffff}
					position={[0.5009, 0, -0.001]}
					rotation={[0, Math.PI / 2, 0]}
				/>
				<Plane
					name="bottom"
					color={0xffccff}
					position={[0, -0.5009, -0.001]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
				<Plane
					name="top"
					color={0xccccff}
					position={[0, 0.5009, -0.001]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
			</group>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<a.meshStandardMaterial attach="material" color={props.color} />
		</a.mesh>
	);
};

export default function App() {
	return (
		<>
			<Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 10 }}>
				<ambientLight intensity={0.3} />
				<directionalLight
					position={[0, 10, 5]}
					intensity={1}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-far={50}
					shadow-camera-left={-10}
					shadow-camera-right={10}
					shadow-camera-top={10}
					shadow-camera-bottom={-10}
				/>
				<pointLight position={[-10, 0, -20]} intensity={0.5} />
				<pointLight position={[0, -10, 0]} intensity={1.5} />
				<Box />
			</Canvas>
		</>
	);
}
