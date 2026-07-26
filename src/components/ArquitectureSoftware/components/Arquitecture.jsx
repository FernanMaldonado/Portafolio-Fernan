import React, { useEffect, useRef, useState } from "react";
import "../styles/Arquitecture.css";
import { Fade, Zoom, Slide, Bounce, Rotate, JackInTheBox, Hinge, Roll } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import MERNs from "../../../assets/icons/MERN.png";
import JSONs from "../../../assets/icons/JSON.png";
import MICROSERVICESs from "../../../assets/icons/MICROSERVICES.png";
import lambda from "../../../assets/icons/lambda.png";

const BataBaseRelationalAndNorRelationals = () => {

    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    const Parraf = () => {
    return (
        <div className="Parraf-container">
        <p> En mi desarrollo como programador he trabajado con diferentes arquitecturas de software que me permiten crear aplicaciones modernas, escalables y eficientes. A lo largo de mi formación y proyectos he adquirido experiencia implementando estructuras como **MERN**, donde desarrollo aplicaciones completas utilizando tecnologías basadas en JavaScript; **API REST**, para la comunicación organizada entre frontend y backend mediante servicios eficientes; **Microservicios**, aplicando una arquitectura modular que facilita la escalabilidad y mantenimiento de sistemas; y **Serverless**, aprovechando servicios orientados a eventos para optimizar recursos e infraestructura. Estas arquitecturas forman parte de las herramientas que utilizo para diseñar soluciones adaptables a las necesidades de cada proyecto, buscando siempre buenas prácticas de desarrollo y una estructura profesional.";
            </p></div>
    ) };

    const dataArquitecturas = [
        {
            id: 1,
            name: "MERN",
            img: MERNs,
            level: 85,
            description: "Desarrollo aplicaciones full-stack completas, integrando de forma fluida el frontend con bases de datos NoSQL mediante un ecosistema unificado en JavaScript."
        },
        {
            id: 2,
            name: "API REST",
            img: JSONs,
            level: 95,
            description: "Diseño y consumo APIs RESTful escalables, garantizando una comunicación eficiente y estandarizada entre servicios de backend y clientes frontend."
        },
        {
            id: 3,
            name: "MicroServices",
            img: MICROSERVICESs,
            level: 95,
            description: "Estructuro sistemas complejos en servicios independientes y desacoplados, mejorando la mantenibilidad, escalabilidad y tolerancia a fallos."
        },
        {
            id: 4,
            name: "Serverless",
            img: lambda,
            level: 75,
            description: "Implemento lógica orientada a eventos en arquitecturas Serverless, optimizando costos y eliminando la gestión manual de infraestructura."
        },
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

    return (
        <div className="Arquitecture">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <Slide direction="up" triggerOnce={false}>
                <div className="Title-arq-container">
                    <h1 className="Title-arq">
                        Arquitecturas y Estructuras de Trabajo Dominantes
                    </h1>
                </div>
            </Slide>
            <Parraf/>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-arq">
                {dataArquitecturas.map((arquitecture) => (
                    <div className="Specify-arq" key={arquitecture.id}>
                        <div className="Specify-inner-arq">
                            <div className="Specify-front-arq">
                                <div className="sub-title-arq">{arquitecture.name}</div>
                                <img
                                    src={arquitecture.img}
                                    alt={arquitecture.name}
                                    style={{
                                        width: arquitecture.id === 1 ? "100%" : "50%",
                                        height: arquitecture.id === 1 ? "100%" : "50%",
                                        objectFit: "contain",
                                        padding: "10px",
                                        margin: "0 auto",
                                        display: "block"
                                    }}
                                />
                            </div>
                            <div className="Specify-back-arq">
                                <h3>{arquitecture.name}</h3>
                                <p>{arquitecture.description}</p>
                                <div className="porcentage-arq">
                                    <div className="progress-container-arq">
                                        <div
                                            className="progress-bar-arq"
                                            style={{
                                                "--progress": `${arquitecture.level}%`,
                                            }}
                                        ></div>

                                        <div className="progress-text-arq">
                                            {arquitecture.level}%
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

export default BataBaseRelationalAndNorRelationals;