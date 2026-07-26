import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
import "../styles/Lenguages.css";
import Python from "../../../assets/icons/Python.png";
import Java from "../../../assets/icons/Java.png";
import JavaScript from "../../../assets/icons/JavaScript.png";
import CSharp from "../../../assets/icons/CSharp.png";
import SQL from "../../../assets/icons/SQL.png";

const Lenguages = () => {

    const Parraf = () => {
        return (
            <div className="Parraf-container">
                <p>
                    Durante mi formación como desarrollador he adquirido experiencia trabajando
                    con diferentes lenguajes de programación que me permiten crear soluciones
                    eficientes, escalables y adaptadas a distintos entornos tecnológicos.
                    Manejo lenguajes como <strong>Java</strong>, aplicando programación orientada
                    a objetos y buenas prácticas para el desarrollo de sistemas robustos;
                    <strong> JavaScript</strong>, enfocado en la construcción de aplicaciones web
                    modernas con lógica dinámica y programación asíncrona;
                    <strong> Python</strong>, utilizado para automatización, desarrollo de
                    soluciones backend y procesamiento eficiente de información;
                    <strong> SQL</strong>, aplicado en el diseño, administración y optimización
                    de bases de datos relacionales; y <strong>C#</strong>, trabajando con el
                    ecosistema .NET para desarrollar aplicaciones empresariales seguras y
                    estructuradas. Estos lenguajes forman parte de mi base técnica para
                    desarrollar software profesional, aplicando principios de calidad,
                    organización de código y soluciones orientadas a las necesidades del usuario.
                </p>
            </div>
        )
    };
    const dataLenguajes = [
        {
            id: 1,
            name: "Java",
            img: Java,
            level: 85,
            description: "Desarrollo aplicaciones orientadas a objetos, aplicando patrones de diseño y estructuras sólidas para crear sistemas escalables y mantenibles."
        },
        {
            id: 2,
            name: "JavaScript",
            img: JavaScript,
            level: 90,
            description: "Construyo aplicaciones web modernas utilizando programación dinámica, asincronía y tecnologías del ecosistema frontend y backend."
        },
        {
            id: 3,
            name: "Python",
            img: Python,
            level: 75,
            description: "Implemento soluciones mediante automatización, desarrollo backend y manejo eficiente de datos utilizando un código limpio y adaptable."
        },
        {
            id: 4,
            name: "SQL",
            img: SQL,
            level: 95,
            description: "Diseño y administro bases de datos relacionales, optimizando consultas, estructuras y gestión eficiente de información."
        },
        {
            id: 5,
            name: "C#",
            img: CSharp,
            level: 75,
            description: "Desarrollo soluciones con el ecosistema .NET, aplicando arquitectura organizada y buenas prácticas para aplicaciones empresariales."
        },
    ];

    return (
        <div className="Lenguages">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-container">
                <motion.h1
                    className="Title"
                    initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    Lenguajes Capacitados
                </motion.h1>
            </div>
            <Parraf />

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