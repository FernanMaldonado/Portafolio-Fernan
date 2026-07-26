import React from "react";
import { useEffect, useRef, useState } from "react";
import "../styles/DataBase.css";
import MySQL from "../../../assets/icons/MySQL.png";
import PostgreSQL from "../../../assets/icons/PostgreSQL.png";
import MongoDB from "../../../assets/icons/MongoDB.png";

const BataBaseRelationalAndNorRelationals = () => {
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const Parraf = () => {
    return (
        <div className="Parraf-container">
            <p>
                En el desarrollo de aplicaciones he trabajado con diferentes sistemas de 
                gestión de bases de datos que me permiten almacenar, organizar y administrar 
                información de manera eficiente y segura. Cuento con experiencia utilizando 
                <strong> MySQL</strong>, para el diseño de bases de datos relacionales, 
                creación de estructuras optimizadas y gestión de información empresarial; 
                <strong> PostgreSQL</strong>, aprovechando sus capacidades avanzadas para 
                manejar transacciones, consultas complejas y sistemas que requieren mayor 
                robustez; y <strong>MongoDB</strong>, orientado al manejo de bases de datos 
                NoSQL con estructuras flexibles y escalables para aplicaciones modernas. 
                Estas tecnologías forman parte de las herramientas que utilizo para diseñar 
                soluciones basadas en datos, garantizando integridad, rendimiento y una 
                correcta organización de la información dentro de cada proyecto.
            </p>
        </div>
    )
};

    const dataBases = [
    {
        id: 1,
        name: "MySQL",
        img: MySQL,
        level: 85,
        description: "Diseño y administro bases de datos relacionales, creando estructuras optimizadas, consultas eficientes y modelos enfocados en la integridad de la información."
    },
    {
        id: 2,
        name: "PostgreSQL",
        img: PostgreSQL,
        level: 65,
        description: "Trabajo con bases de datos avanzadas mediante consultas complejas, manejo de transacciones y estructuras preparadas para sistemas escalables."
    },
    {
        id: 3,
        name: "MongoDB",
        img: MongoDB,
        level: 85,
        description: "Gestiono bases de datos NoSQL con modelos flexibles, optimizando almacenamiento, escalabilidad y rendimiento para aplicaciones modernas."
    },
];

    return (
        <div className="DataBase">
            {/* AQUÍ ESTÁ TU TÍTULO */}
            <div ref={ref} className="Title-container">
                {/* Escritorio */}
                <h1 className={`Title-db ${animate ? "animate" : ""}`}>
                    Base de datos Especializadas
                </h1>

                {/* Responsive */}
                <h1 className={`Title-db-Response ${animate ? "animate" : ""}`}>
                    <span data-text="Base de datos">Base de datos</span>
                    <span data-text="Especializadas">Especializadas</span>
                </h1>
            </div>
            <Parraf/>

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