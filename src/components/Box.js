import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, extend, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from '@react-three/drei';
import { useStore } from '../utils/Context';
import { analytics } from '../firebase';

extend({ OrbitControls });

const Controls = () => {
  const controls = useRef();
  const { camera, gl } = useThree();

  return (
    <orbitControls
      ref={controls}
      autoRotate
      args={[camera, gl.domElement]}
    ></orbitControls>
  );
};

const Plane = ({ name, rotation, position }) => {
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

  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    color: hovered ? 'hotpink' : '#f4acb7',
  });

  const handleDoubleClick = (e) => {
    e.stopPropagation();

    if (name === 'About') {
      setOpenAbout(!openAbout);
      analytics.logEvent('about_open');
    }
    if (name === 'Stack') {
      setOpenStack(!openStack);
      analytics.logEvent('stack_open');
    }
    if (name === 'Projects') {
      setOpenProjects(!openProjects);
      analytics.logEvent('projects_open');
    }
    if (name === 'Contact') {
      setOpenContact(!openContact);
      analytics.logEvent('contact_open');
    }
  };

  return (
    <a.mesh
      name={name}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onDoubleClick={handleDoubleClick}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial
        attach="material"
        color={props.color}
        side={THREE.DoubleSide}
        polygonOffset={true}
        polygonOffsetFactor={-1}
        polygonOffsetUnits={-1}
      />
      <Text
        color="#fff8dc"
        anchorX="center"
        anchorY="middle"
        depthOffset={-2}
        materialType="meshStandardMaterial"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        maxWidth={1}
        fontSize={0.17}
        textAlign="center"
      >
        {`${name}`.toUpperCase()}
      </Text>
    </a.mesh>
  );
};

export default function Box() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const mesh = useRef(null);

  const props = useSpring({
    color: hovered || active ? 'hotpink' : '#f4acb7',
  });

  let date = new Date();
  let year = date.getFullYear();

  useFrame(() =>
    hovered || active
      ? (mesh.current.rotation.y += 0)
      : (mesh.current.rotation.y += 0.005),
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
          name={`© ${year}`}
          position={[0, -0.5009, -0.0001]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <Plane
          name="Julia Kravets"
          position={[0, 0.5009, -0.0001]}
          rotation={[Math.PI / 2, Math.PI, Math.PI / 2]}
        />
      </group>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial wireframe attach="material" color={props.color} />
    </a.mesh>
  );
}
