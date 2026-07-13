import React from "react";
import "../styles/DevOps.css";
import Docker from "../../../assets/icons/Docker.png";
import Git from "../../../assets/icons/Git.png";
import Github from "../../../assets/icons/Github.png";
import Cloudinary from "../../../assets/icons/Cloudinary.png";

const DevOps = () => {
    const dataHerramientas = [
        {
            id: 1,
            name: "Docker",
            img: Docker,
            description: "Contenerizo mis aplicaciones para garantizar entornos de desarrollo consistentes, facilitando su despliegue en cualquier servidor."
        },
        {
            id: 2,
            name: "Git",
            img: Git,
            description: "Gestiono el control de versiones de mi código, permitiéndome un flujo de trabajo organizado y colaborativo en todos mis proyectos."
        },
        {
            id: 3,
            name: "Github",
            img: Github,
            description: "Documento y almaceno mis repositorios, facilitando la integración continua y el trabajo en equipo con estándares de la industria."
        },
        {
            id: 4,
            name: "Cloudinary",
            img: Cloudinary,
            description: "Optimizo y gestiono la entrega de activos multimedia, mejorando la velocidad de carga y la eficiencia de mis aplicaciones."
        },
    ];

    return (
        <div className="DevOps">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-dev">Herramientas de Infraestructura y DevOps</div>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-dev">
                {dataHerramientas.map((lenguaje) => (
                    <div className="Specify-dev" key={lenguaje.id}>
                        <div className="Specify-inner-dev">
                            <div className="Specify-front-dev">
                                <div className="sub-title-dev">{lenguaje.name}</div>
                                <img style={{ width: "50%", height: "50%" }} src={lenguaje.img} alt={lenguaje.name} />
                            </div>
                            <div className="Specify-back-dev">
                                <h3>{lenguaje.name}</h3>
                                <p>{lenguaje.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DevOps;