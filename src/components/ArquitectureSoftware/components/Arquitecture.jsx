import React from "react";
import "../styles/Arquitecture.css";
import MERNs from "../../../assets/icons/MERN.png";
import JSONs from "../../../assets/icons/JSON.png";
import MICROSERVICESs from "../../../assets/icons/MICROSERVICES.png";
import lambda from "../../../assets/icons/lambda.png";

const BataBaseRelationalAndNorRelationals = () => {
    const dataArquitecturas = [
        {
            id: 1,
            name: "MERN",
            img: MERNs,
            level:85,
            description: "Desarrollo aplicaciones full-stack completas, integrando de forma fluida el frontend con bases de datos NoSQL mediante un ecosistema unificado en JavaScript."
        },
        {
            id: 2,
            name: "API REST",
            img: JSONs,
            level:95,
            description: "Diseño y consumo APIs RESTful escalables, garantizando una comunicación eficiente y estandarizada entre servicios de backend y clientes frontend."
        },
        {
            id: 3,
            name: "MicroServices",
            img: MICROSERVICESs,
            level:95,
            description: "Estructuro sistemas complejos en servicios independientes y desacoplados, mejorando la mantenibilidad, escalabilidad y tolerancia a fallos."
        },
        {
            id: 4,
            name: "Serverless",
            img: lambda,
            level:75,
            description: "Implemento lógica orientada a eventos en arquitecturas Serverless, optimizando costos y eliminando la gestión manual de infraestructura."
        },
    ];

    return (
        <div className="Arquitecture">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-arq"> Arquitecturas y Estructuras de Trabajo Dominantes </div>

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