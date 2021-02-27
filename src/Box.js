import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Box() {
  const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
		<mesh castShadow ref={mesh}>
			<boxBufferGeometry attach="geometry" args={(1, 1, 1)} />
			<meshStandardMaterial attach="material" color="orange"/>
		</mesh>
	);
}
