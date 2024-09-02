import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Cube } from '@/components/three.js/cube';

interface CanvasComponentProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ className, style }) => {
    const cubes = Array.from({ length: 50 }, (_, i) => ({
        position: [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ]
    }));

    return (
        <div className={className} style={style}>
            <Canvas
                style={{ width: '100%', height: '100%' }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 5]
                }}
            >
                {cubes.map((cube, index) => (
                    <mesh key={index} position={cube.position}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshPhongMaterial color="aqua" />
                    </mesh>
                ))}
            </Canvas>
        </div>
    );
};

export default CanvasComponent;
