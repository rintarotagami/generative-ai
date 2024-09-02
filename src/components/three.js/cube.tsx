import { FC } from 'react';

export const Cube: FC = () => {
	return (
		<mesh>
			<boxGeometry args={[1, 1, 1]} /> {/* BoxBufferGeometryをBoxGeometryに変更 */}
			<meshPhongMaterial color="aqua" />
		</mesh>
	);
};
