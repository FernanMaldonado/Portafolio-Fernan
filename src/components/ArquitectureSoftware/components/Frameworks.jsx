import React from "react";
import "../styles/Frameworks.css";
import Reacts from "../../../assets/icons/React.png";
import Nodejs from "../../../assets/icons/Nodejs.png";
import NETs from "../../../assets/icons/NET.png";
import SpringBoot from "../../../assets/icons/SpringBoot.png";
import ReactNative from "../../../assets/icons/ReactNative.png";

const Frameworks = () => {
    const dataLenguajes = [
        { 
            id: 1, 
            name: "React", 
            img: Reacts, 
            description: "Desarrollo interfaces web interactivas y escalables mediante una arquitectura basada en componentes, optimizando la experiencia de usuario." 
        },
        { 
            id: 2, 
            name: "Node.js", 
            img: Nodejs, 
            description: "Construyo servicios backend eficientes y de alto tráfico, utilizando arquitectura asíncrona para APIs en tiempo real." 
        },
        { 
            id: 3, 
            name: ".NET", 
            img: NETs, 
            description: "Diseño e implemento soluciones empresariales robustas y seguras, aprovechando la potencia del ecosistema .NET para backend." 
        },
        { 
            id: 4, 
            name: "Spring Boot", 
            img: SpringBoot, 
            description: "Desarrollo microservicios modulares y de despliegue rápido, garantizando mantenibilidad y escalabilidad en sistemas Java." 
        },
        { 
            id: 5, 
            name: "React - Native", 
            img: ReactNative, 
            description: "Implemento aplicaciones móviles nativas multiplataforma desde un único código base, garantizando rendimiento y consistencia." 
        },
    ];

    return (
        <div className="Frameworks">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-fr">Frameworks Especializados</div>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-fr">
                {dataLenguajes.map((lenguaje) => (
                    <div className="Specify-fr" key={lenguaje.id}> 
                        <div className="Specify-inner-fr">
                            <div className="Specify-front-fr">
                                <div className="sub-title-fr">{lenguaje.name}</div>
                                <img style={{ width: "50%", height: "50%"}} src={lenguaje.img} alt={lenguaje.name} />
                            </div>
                            <div className="Specify-back-fr">
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

export default Frameworks;