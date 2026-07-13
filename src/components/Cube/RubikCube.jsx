import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, RoundedBox } from '@react-three/drei';

const CuboPieza = ({ position, size }) => (
    <RoundedBox
        args={[size, size, size]}
        position={position}
        radius={size * 0.05} // Un poco más redondeado para mejor estética
        smoothness={4}
    >
        <meshStandardMaterial
            metalness={1}
            roughness={0.1}
            color="#ffffff"
        />
    </RoundedBox>
);

const RubikCube = ({ size = 1.5 }) => {
    // Ya no necesitamos 'gap' porque solo hay una pieza
    const piezas = [];

    // Cambiamos el rango de -1 a 1, por simplemente 0 a 0
    for (let x = 0; x <= 0; x++) {
        for (let y = 0; y <= 0; y++) {
            for (let z = 0; z <= 0; z++) {
                // La posición será [0, 0, 0] para que esté centrado
                const pos = [0, 0, 0];
                piezas.push(<CuboPieza key="solo-uno" position={pos} size={size} />);
            }
        }
    }

    return (
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} />
            <Environment preset="city" />

            {/* El grupo de piezas debe ir DENTRO de Float */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group>{piezas}</group>
            </Float>
            <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} autoRotate={true} />
        </Canvas>
    );
};

export default RubikCube;