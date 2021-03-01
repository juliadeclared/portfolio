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
