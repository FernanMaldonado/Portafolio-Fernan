import React from "react";
import { useEffect, useRef, useState } from "react";
import "../styles/Frameworks.css";
import Reacts from "../../../assets/icons/React.png";
import Nodejs from "../../../assets/icons/Nodejs.png";
import NETs from "../../../assets/icons/NET.png";
import SpringBoot from "../../../assets/icons/SpringBoot.png";
import ReactNative from "../../../assets/icons/ReactNative.png";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

const Frameworks = () => {

    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    const Parraf = () => {
    return (
        <div className="Parraf-container">
            <p>
                En mi desarrollo como programador he trabajado con diferentes frameworks 
                que me permiten construir aplicaciones modernas, escalables y eficientes. 
                A través de mi formación y proyectos he adquirido experiencia utilizando 
                tecnologías como <strong>React</strong>, para la creación de interfaces web 
                dinámicas basadas en componentes reutilizables; <strong>Node.js</strong>, 
                para el desarrollo de servicios backend rápidos y orientados a la creación 
                de APIs eficientes; <strong>.NET</strong>, enfocado en soluciones empresariales 
                robustas y seguras; <strong>Spring Boot</strong>, utilizado para diseñar 
                microservicios con arquitectura modular en el ecosistema Java; y 
                <strong> React Native</strong>, para el desarrollo de aplicaciones móviles 
                multiplataforma con alto rendimiento. Estos frameworks forman parte de las 
                herramientas que utilizo para transformar ideas en soluciones tecnológicas 
                funcionales, aplicando buenas prácticas de desarrollo, organización de código 
                y arquitecturas preparadas para crecer según las necesidades del proyecto.
            </p>
        </div>
    )
};

    const dataFrameworks = [
        {
            id: 1,
            name: "React",
            img: Reacts,
            level: 75,
            description: "Desarrollo interfaces web interactivas y escalables mediante una arquitectura basada en componentes, optimizando la experiencia de usuario."
        },
        {
            id: 2,
            name: "Node.js",
            img: Nodejs,
            level: 90,
            description: "Construyo servicios backend eficientes y de alto tráfico, utilizando arquitectura asíncrona para APIs en tiempo real."
        },
        {
            id: 3,
            name: ".NET",
            img: NETs,
            level: 95,
            description: "Diseño e implemento soluciones empresariales robustas y seguras, aprovechando la potencia del ecosistema .NET para backend."
        },
        {
            id: 4,
            name: "Spring Boot",
            img: SpringBoot,
            level: 85,
            description: "Desarrollo microservicios modulares y de despliegue rápido, garantizando mantenibilidad y escalabilidad en sistemas Java."
        },
        {
    id: 5,
    name: "React Native",
    img: ReactNative,
    level: 75,
    description: "Implemento aplicaciones móviles multiplataforma desde un único código base, garantizando rendimiento, experiencia nativa y una interfaz consistente."
}
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
        <div className="Frameworks">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div ref={ref} className="Title-container">
                {animate && (
                    <TypeAnimation
                        sequence={[
                            "Frameworks Capacitados",
                            2000,
                        ]}
                        speed={50}
                        cursor
                        repeat={0}
                        className="Title-fr"
                    />
                )}
            </div>
            <Parraf/>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-fr">
                {dataFrameworks.map((framework) => (
                    <div className="Specify-fr" key={framework.id}>
                        <div className="Specify-inner-fr">
                            <div className="Specify-front-fr">
                                <div className="sub-title-fr">{framework.name}</div>
                                <img style={{ width: "50%", height: "50%" }} src={framework.img} alt={framework.name} />
                            </div>
                            <div className="Specify-back-fr">
                                <h3>{framework.name}</h3>
                                <p>{framework.description}</p>
                                <div className="porcentage-fr">
                                    <div className="progress-container-fr">
                                        <div
                                            className="progress-bar-fr"
                                            style={{
                                                "--progress": `${framework.level}%`,
                                            }}
                                        ></div>

                                        <div className="progress-text-fr">
                                            {framework.level}%
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

export default Frameworks;