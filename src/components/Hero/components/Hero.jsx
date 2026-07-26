import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import RubikCube from '../../Cube/RubikCube.jsx';
import { TypeAnimation } from "react-type-animation";
import "../style/Hero.css";

function Hero() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    const phraseText = "Todo programador tiene un momento donde piensa en rendirse, un momento en el que el error parece imposible de resolver, donde las horas pasan y el avance no llega, donde la frustración pesa más que la motivación. Es normal, forma parte del camino de aprender algo complejo, pero también es en esos momentos donde se marca la diferencia, no entre quien nunca se equivoca y quien sí, sino entre quien se detiene y quien decide intentarlo una vez más. Muchas de las habilidades que hoy tienes nacieron de un momento en el que pensaste que no podías. La programación tiene algo curioso: casi todos quieren los resultados, pero pocos están dispuestos a soportar el proceso. Y es precisamente ese proceso lleno de errores, dudas y aprendizaje el que termina contruyendo a un ! Verdadero Programador ¡";

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // Función para hacer scroll suave hacia abajo
    const scrollToNext = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section id="hero" className='Cuadro'>
            <div className='space'></div>
            <div className='contenth'>
                <div ref={ref}>
                    {animate && (
                        <TypeAnimation
                            sequence={[
                                "Hola, Soy Fernando",
                                2000,
                            ]}
                            speed={25}
                            cursor
                            repeat={0}
                            className="Title-h"
                        />
                    )}
                </div>

                {animate && (
                    <TypeAnimation
                        sequence={[
                            phraseText,
                            2000,
                        ]}
                        speed={55}
                        cursor
                        repeat={0}
                    />
                )}

                <div className='BTN' onClick={() => setIsOpen && setIsOpen(false)}>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Conoceme
                    </Link>
                </div>
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

            {/* Botón de flecha hacia abajo para scroll automático */}
            <div 
                onClick={scrollToNext} 
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                    animation: 'bounce 2s infinite',
                    color: 'white',
                    fontSize: '24px'
                }}
                title="Bajar"
            >
                ↓
            </div>
        </section>
    );
};

export default Hero;