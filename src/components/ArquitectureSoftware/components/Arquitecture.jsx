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
            description: "Desarrollo aplicaciones full-stack completas, integrando de forma fluida el frontend con bases de datos NoSQL mediante un ecosistema unificado en JavaScript."
        },
        {
            id: 2,
            name: "API REST",
            img: JSONs,
            description: "Diseño y consumo APIs RESTful escalables, garantizando una comunicación eficiente y estandarizada entre servicios de backend y clientes frontend."
        },
        {
            id: 3,
            name: "MicroServices",
            img: MICROSERVICESs,
            description: "Estructuro sistemas complejos en servicios independientes y desacoplados, mejorando la mantenibilidad, escalabilidad y tolerancia a fallos."
        },
        {
            id: 4,
            name: "Serverless",
            img: lambda,
            description: "Implemento lógica orientada a eventos en arquitecturas Serverless, optimizando costos y eliminando la gestión manual de infraestructura."
        },
    ];

    return (
        <div className="Arquitecture">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-arq"> Arquitecturas y Estructuras de Trabajo Dominantes </div>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-arq">
                {dataArquitecturas.map((lenguaje) => (
                    <div className="Specify-arq" key={lenguaje.id}>
                        <div className="Specify-inner-arq">
                            <div className="Specify-front-arq">
                                <div className="sub-title-arq">{lenguaje.name}</div>
                                <img
                                    src={lenguaje.img}
                                    alt={lenguaje.name}
                                    style={{
                                        width: lenguaje.id === 1 ? "100%" : "50%",
                                        height: lenguaje.id === 1 ? "100%" : "50%",
                                        objectFit: "contain",
                                        padding: "10px",
                                        margin: "0 auto",
                                        display: "block"
                                    }}
                                />
                            </div>
                            <div className="Specify-back-arq">
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

export default BataBaseRelationalAndNorRelationals;