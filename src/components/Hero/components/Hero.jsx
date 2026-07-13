import React from 'react';
import RubikCube from '../../Cube/RubikCube.jsx';
import "../style/Hero.css"

function Hero() {
    const cubos = [
        { top: 50, left: 10, size: 3, rot: 15 },
        { top: -45, left: 55, size: 1.5, rot: -10 },
        { top: 350, left: 175, size: 2.0, rot: 5 },
        { top: -50, left: 470, size: 2.5, rot: -20 },
        { top: 90, left: 550, size: 2, rot: 30 },
        { top: 350, left: 600, size: 2.2, rot: -5 },
        { top: 135, left: 175, size: 1.5, rot: 15 },
        { top: 0, left: 300, size: 2.5, rot: 15 },
        { top: 250, left: 10, size: 1.5, rot: -10 },
        { top: 250, left: 350, size: 2.5, rot: -20 },
        { top: -110, left: 175, size: 1.75, rot: -20 },
    ];

    return (
        <section id="hero" className='Cuadro'>
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
                            top: `${c.top}px`,
                            left: `${c.left}px`,
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