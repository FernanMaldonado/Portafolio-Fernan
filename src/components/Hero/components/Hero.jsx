import React from 'react';
import RubikCube from '../../Cube/RubikCube.jsx';
import "../style/Hero.css"

function Hero() {
    const cubos = [
        { top: 55, left: 60, size: 2.2, rot: -25 },
        { top: 17, left: 60, size: 1.75, rot: -55 },
        { top: 25, left: 50, size: 1.5, rot: -10 },
        { top: 25, left: 35, size: 2.0, rot: 5 },
        { top: -10, left: 45, size: 2.5, rot: 20 },
        { top: 35, left: 5, size: 2, rot: -25 },
        { top: 0, left: 0, size: 2.2, rot: -5 },
        { top: 25, left: -10, size: 1.5, rot: 15 },
        { top: 5, left: 20, size: 2.5, rot: 15 },
        { top: 60, left: 10, size: 1.5, rot: -10 },
        { top: 50, left: 35, size: 2.5, rot: -20 },
        { top: 50, left: -10, size: 1.75, rot: -20 },
        { top: -12, left: 20, size: 1.5, rot: -25 },
    ];

    return (
        <section id="hero" className='Cuadro'>
            <div className='space'></div>
            <div className='content'>
                <h1>Hola, soy Fernando Maldonado</h1>
                <p>Soy un desarrollador apasionado por transformar desafíos técnicos en soluciones digitales eficientes y escalables. Mi enfoque combina una sólida base en el desarrollo de software con la versatilidad necesaria para trabajar tanto en el backend, mediante la robustez de Java, como en interfaces dinámicas con JavaScript. Entiendo el código como una herramienta esencial para mejorar la experiencia del usuario y optimizar procesos, siempre bajo las mejores prácticas de desarrollo.</p>
                <div className='BTN'>Conoceme</div>
            </div>
            <div className="contenedor-disperso">
                {cubos.map((c, i) => (
                    <div
                        key={i}
                        className="Cube-absoluto"
                        style={{
                            top: `${c.top}%`,
                            left: `${c.left}%`,
                            transform: `rotate(${c.rot}deg)`
                        }}
                    >
                        <RubikCube size={c.size} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;