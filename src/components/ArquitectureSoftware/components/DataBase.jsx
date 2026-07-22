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
            level:85,
            description: "Diseño esquemas relacionales sólidos para garantizar la integridad y consistencia en sistemas de gestión empresarial."
        },
        {
            id: 2,
            name: "PostgreSQL",
            img: PostgreSQL,
            level:65,
            description: "Implemento bases de datos avanzadas, utilizando características de extensibilidad y transacciones complejas para aplicaciones críticas."
        },
        {
            id: 3,
            name: "MongoDB",
            img: MongoDB,
            level:85,
            description: "Gestiono datos no estructurados con modelos flexibles, optimizando la escalabilidad y el rendimiento en aplicaciones de alto tráfico."
        },
    ];

    return (
        <div className="DataBase">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div className="Title-db"> Base de datos Especializadas </div>

            {/* NUEVO CONTENEDOR SOLO PARA LAS CARTAS */}
            <div className="Cards-container-db">
                {dataBases.map((dataBase) => (
                    <div className="Specify-db" key={dataBase.id}>
                        <div className="Specify-inner-db">
                            <div className="Specify-front-db">
                                <div className="sub-title-db">{dataBase.name}</div>
                                <img style={{ width: "50%", height: "50%" }} src={dataBase.img} alt={dataBase.name} />
                            </div>
                            <div className="Specify-back-db">
                                <h3>{dataBase.name}</h3>
                                <p>{dataBase.description}</p>
                                <div className="porcentage-db">
                                    <div className="progress-container-db">
                                        <div
                                            className="progress-bar-db"
                                            style={{
                                                "--progress": `${dataBase.level}%`,
                                            }}
                                        ></div>

                                        <div className="progress-text-db">
                                            {dataBase.level}%
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