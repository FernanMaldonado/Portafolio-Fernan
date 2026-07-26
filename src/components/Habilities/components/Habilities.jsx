import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaCertificate,
  FaArrowRight,
  FaFilePdf,
  FaNetworkWired,
} from "react-icons/fa";
import PowerBIImg from "../../../assets/images/ECOCredGT.png";

import "../styles/Habilities.css";

// Importa tus certificados
import CCNA from "../../../assets/pdf/CCNA.pdf";
import IT from "../../../assets/pdf/IT.pdf";
import PowerBI from "../../../assets/pdf/PowerBI.pdf";

const certificates = [
    {
        title: "CCNA",
        description:
            "Fundamentos de redes, direccionamiento IP, configuración de dispositivos y conectividad.",
        pdf: CCNA,
        icon: <FaNetworkWired />,
        type: "icon",
    },
    {
        title: "IT Essentials",
        description:
            "Mantenimiento preventivo y correctivo de computadoras, hardware y software.",
        pdf: IT,
        icon: <FaNetworkWired />,
        type: "icon",
    },
    {
        title: "Power BI",
        description:
            "Análisis y visualización de datos mediante dashboards interactivos.",
        pdf: PowerBI,
        image: PowerBIImg,
        type: "image",
    },
];

export default function Skills() {
    return (
        <div className="wrapperH">
            <section className="skills-section">

                <div className="skills-header">
                    <h1>Habilidades y Formación</h1>

                    <p>
                        Mi preparación académica y las certificaciones que respaldan mis
                        conocimientos en desarrollo de software, redes y análisis de datos.
                    </p>
                </div>

                {/* Formación */}
                <div className="education-card">

                    <div className="education-icon">
                        <FaGraduationCap />
                    </div>

                    <div>
                        <h2>Instituto Técnico Laboral Kinal</h2>

                        <h3>Técnico en Informática</h3>

                        <p>
                            Formación enfocada en desarrollo de software, bases de datos,
                            programación, redes, desarrollo web, aplicaciones móviles y
                            administración de sistemas.
                        </p>
                    </div>

                </div>

                {/* Certificados */}

                <h2 className="section-title">
                    <FaCertificate />
                    Certificaciones
                </h2>

                <div className="certificates-grid">

                    {certificates.map((item) => (
                        <div className="certificate-card" key={item.title}>

                            {item.type === "icon" ? (
                                <div className="certificate-icon">
                                    {item.icon}
                                </div>
                            ) : (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="certificate-image"
                                />
                            )}

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <a
                                href={item.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-button"
                            >
                                <FaFilePdf />
                                Ver Certificado
                            </a>

                        </div>
                    ))}

                </div>

                {/* Ir a proyectos */}

                <div className="projects-card">

                    <h2>¿Quieres ver estos conocimientos aplicados?</h2>

                    <p>
                        Explora mi colección de proyectos desarrollados con distintas
                        tecnologías y conoce cómo aplico estas habilidades en casos reales.
                    </p>

                    <Link to="/Projects" className="projects-button">
                        Ver Proyectos
                        <FaArrowRight />
                    </Link>

                </div>

            </section></div>
    );
}