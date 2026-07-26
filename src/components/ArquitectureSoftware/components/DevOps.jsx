import React from "react";
import { Slide } from "react-awesome-reveal";
import "../styles/DevOps.css";
import Docker from "../../../assets/icons/Docker.png";
import Git from "../../../assets/icons/Git.png";
import Github from "../../../assets/icons/Github.png";
import Cloudinary from "../../../assets/icons/Cloudinary.png";

const DevOps = () => {

    const Parraf = () => {
    return (
        <div className="Parraf-container">
            <p>
                A lo largo de mi formación como desarrollador he trabajado con diferentes 
                herramientas que me permiten mejorar la calidad, organización y eficiencia 
                en el ciclo de desarrollo de software. Manejo tecnologías como 
                <strong> Docker</strong>, utilizada para la creación de entornos 
                contenerizados y despliegues consistentes; <strong>Git</strong>, para el 
                control de versiones y administración eficiente del código fuente; 
                <strong> GitHub</strong>, como plataforma para gestionar repositorios, 
                colaborar en proyectos y aplicar flujos de trabajo profesionales; y 
                <strong> Cloudinary</strong>, para la gestión, optimización y distribución 
                de recursos multimedia dentro de aplicaciones modernas. Estas herramientas 
                forman parte de mi flujo de trabajo diario, permitiéndome desarrollar 
                proyectos más organizados, escalables y preparados para entornos reales de 
                producción.
            </p>
        </div>
    )
};

const dataHerramientas = [
    {
        id: 1,
        name: "Docker",
        img: Docker,
        level: 75,
        description: "Implemento contenedores para crear entornos de desarrollo reproducibles, facilitando la configuración, despliegue y escalabilidad de aplicaciones."
    },
    {
        id: 2,
        name: "Git",
        img: Git,
        level: 90,
        description: "Gestiono el control de versiones mediante buenas prácticas, permitiendo organizar cambios, mantener historial y trabajar de forma colaborativa."
    },
    {
        id: 3,
        name: "GitHub",
        img: Github,
        level: 85,
        description: "Administro repositorios de código aplicando flujos colaborativos, documentación técnica e integración con herramientas modernas de desarrollo."
    },
    {
        id: 4,
        name: "Cloudinary",
        img: Cloudinary,
        level: 75,
        description: "Gestiono recursos multimedia en la nube, optimizando imágenes y archivos para mejorar el rendimiento y experiencia de usuario en aplicaciones web."
    },
];

    return (
        <div className="DevOps">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <Slide direction="up" triggerOnce={false}>
                <h1 className="Title-dev">Herramientas de Infraestructura y DevOps</h1>
            </Slide>
            <Parraf/>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-dev">
                {dataHerramientas.map((devOps) => (
                    <div className="Specify-dev" key={devOps.id}>
                        <div className="Specify-inner-dev">
                            <div className="Specify-front-dev">
                                <div className="sub-title-dev">{devOps.name}</div>
                                <img style={{ width: "50%", height: "50%" }} src={devOps.img} alt={devOps.name} />
                            </div>
                            <div className="Specify-back-dev">
                                <h3>{devOps.name}</h3>
                                <p>{devOps.description}</p>
                                <div className="porcentage-dev">
                                    <div className="progress-container-dev">
                                        <div
                                            className="progress-bar-dev"
                                            style={{
                                                "--progress": `${devOps.level}%`,
                                            }}
                                        ></div>

                                        <div className="progress-text-dev">
                                            {devOps.level}%
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

export default DevOps;