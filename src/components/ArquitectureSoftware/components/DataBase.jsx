import React from "react";
import "../styles/DataBase.css";
import MySQL from "../../../assets/icons/MySQL.png";
import PostgreSQL from "../../../assets/icons/PostgreSQL.png";
import MongoDB from "../../../assets/icons/MongoDB.png";

const BataBaseRelationalAndNorRelationals = () => {
    const dataBases = [
        {
            id: 1,
            name: "MySQL",
            img: MySQL,
            description: "Diseño esquemas relacionales sólidos para garantizar la integridad y consistencia en sistemas de gestión empresarial."
        },
        {
            id: 2,
            name: "PostgreSQL",
            img: PostgreSQL,
            description: "Implemento bases de datos avanzadas, utilizando características de extensibilidad y transacciones complejas para aplicaciones críticas."
        },
        {
            id: 3,
            name: "MongoDB",
            img: MongoDB,
            description: "Gestiono datos no estructurados con modelos flexibles, optimizando la escalabilidad y el rendimiento en aplicaciones de alto tráfico."
        },
    ];

    return (
        <div className="DataBase">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-db"> Base de datos Especializadas </div>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-db">
                {dataBases.map((lenguaje) => (
                    <div className="Specify-db" key={lenguaje.id}>
                        <div className="Specify-inner-db">
                            <div className="Specify-front-db">
                                <div className="sub-title-db">{lenguaje.name}</div>
                                <img style={{ width: "50%", height: "50%" }} src={lenguaje.img} alt={lenguaje.name} />
                            </div>
                            <div className="Specify-back-db">
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