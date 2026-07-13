import React from "react";
import "../styles/Frameworks.css";
import Reacts from "../../../assets/icons/React.png";
import Nodejs from "../../../assets/icons/Nodejs.png";
import NETs from "../../../assets/icons/NET.png";
import SpringBoot from "../../../assets/icons/SpringBoot.png";
import ReactNative from "../../../assets/icons/ReactNative.png";

const Frameworks = () => {
    const dataLenguajes = [
        { id: 1, name: "React", img: Reacts, description: "Lenguaje orientado a objetos, ideal para backend." },
        { id: 2, name: "Node.js", img: Nodejs, description: "El rey de la web, interactividad y dinamismo." },
        { id: 3, name: ".NET", img: NETs, description: "Sintaxis limpia, excelente para IA y análisis de datos." },
        { id: 4, name: "Spring Boot", img: SpringBoot, description: "Lenguaje estándar para bases de datos relacionales." },
        { id: 5, name: "React - Native", img: ReactNative, description: "Desarrollo de videojuegos en Unity y aplicaciones empresariales." },
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