import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../styles/Lenguages.css";
import Python from "../../../assets/icons/Python.png";
import Java from "../../../assets/icons/Java.png";
import JavaScript from "../../../assets/icons/JavaScript.png";
import CSharp from "../../../assets/icons/CSharp.png";
import SQL from "../../../assets/icons/SQL.png";

const Lenguages = () => {
    const dataLenguajes = [
        {
            id: 1,
            name: "Java",
            img: Java,
            level: 85,
            description: "Especialista en desarrollo backend robusto y escalable, aplicando patrones de diseño para sistemas empresariales de alto rendimiento."
        },
        {
            id: 2,
            name: "JavaScript",
            img: JavaScript,
            level: 90,
            description: "Dominio avanzado de ecosistemas web modernos (ES6+), enfocado en la creación de interfaces dinámicas y lógica asíncrona de alto impacto."
        },
        {
            id: 3,
            name: "Python",
            img: Python,
            level: 75,
            description: "Enfoque en desarrollo de soluciones backend, automatización de procesos e integración de modelos, priorizando la eficiencia y legibilidad."
        },
        {
            id: 4,
            name: "SQL",
            img: SQL,
            level: 95,
            description: "Experto en el diseño y optimización de bases de datos relacionales, garantizando la integridad de datos y consultas de alto rendimiento."
        },
        {
            id: 5,
            name: "C#",
            img: CSharp,
            level: 75,
            description: "Sólida experiencia en arquitectura .NET para aplicaciones empresariales y desarrollo lógico, manteniendo estándares de calidad industrial."
        },
    ];

    return (
        <div className="Lenguages">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title">Lenguajes Capacitados</div>
            <div><p>En esta seccion encontraran los lenguajes en los cuales me he capacitado y trabajado para diferentes proyectos dependiendo su funcion o fin de la App </p></div>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container">
                {dataLenguajes.map((lenguaje) => (
                    <div className="Specify" key={lenguaje.id}>
                        <div className="Specify-inner">
                            <div className="Specify-front">
                                <div className="sub-title-db">{lenguaje.name}</div>
                                <img style={{ width: "50%", height: "50%" }} src={lenguaje.img} alt={lenguaje.name} />
                            </div>

                            <div className="Specify-back">
                                <h3>{lenguaje.name}</h3>
                                <p style={{ fontSize: "0.9rem", marginBottom: "5px" }}>{lenguaje.description}</p>

                                {/* GRÁFICA CIRCULAR */}
                                <div className="porcentage">
                                    <div className="progress-container">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                "--progress": `${lenguaje.level}%`,
                                            }}
                                        ></div>

                                        <div className="progress-text">
                                            {lenguaje.level}%
                                        </div>

                                        <div className="particles">
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lenguages;