import React, { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Box from "./Box";

extend({ OrbitControls });

function Box() {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.y += 0.005));

	const Controls = () => {
		const controls = useRef();

		const { camera, gl } = useThree();

		useFrame(() => {
			controls.current.update();
		});

		return (
			<orbitControls
				ref={controls}
				autoRotate
				args={[camera, gl.domElement]}
			></orbitControls>
		);
	};

	return (
		<mesh castShadow ref={mesh}>
			<Controls />
			<boxBufferGeometry attach="geometry" args={(1, 1, 1)} />
			<meshStandardMaterial attach="material" color="orange" />
		</mesh>
	);
}

export default function App() {
	return (
		<>
			<Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 10 }}>
				<ambientLight intensity={0.3} />
				<directionalLight
					position={[0, 10, 0]}
					intensity={1.5}
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
				<group>
					<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
						<planeBufferGeometry attach="geometry" args={[100, 100]} />
						<shadowMaterial attach="material" opacity={0.3} />
					</mesh>
				</group>
				<Box />
			</Canvas>
		</>
	);
}
