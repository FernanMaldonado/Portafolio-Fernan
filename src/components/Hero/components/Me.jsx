import React, { useState } from "react";
import Mee from "../../../assets/images/About.png";
import "../style/Me.css";
import InstagramVideo from "../../../assets/Video/Instagram.mp4"
import ThreadsVideo from "../../../assets/Video/Threads.mp4"
import FacebookVideo from "../../../assets/Video/Facebook.mp4";
import GitHubVideo from "../../../assets/Video/GitHub.mp4"
import CCNAPdf from "../../../assets/pdf/CCNA.pdf";
import ITPdf from "../../../assets/pdf/IT.pdf";
import PowerBiPdf from "../../../assets/pdf/PowerBI.pdf";

const Me = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeModal, setActiveModal] = useState(null);

    const menuItems = [
        {
            id: "skills",
            label: "Conocimientos",
            icon: "⚡",
            positionClass: "skills-item",
            dir: "branch-right", // Se despliega hacia la derecha
            subItems: [
                { id: "frontend", title: "Frontend", desc: "Creación de interfaces modernas y responsivas utilizando React, CSS avanzado y JavaScript." },
                { id: "backend", title: "Backend", desc: "Desarrollo de lógica de servidores y APIs eficientes con Java, Node.js y Spring Boot." },
                { id: "database", title: "Base de Datos", desc: "Gestión de estructuras de datos relacionales y no relacionales usando MySQL y MongoDB." }
            ]
        },
        {
            id: "projects",
            label: "Proyectos",
            icon: "💻",
            positionClass: "projects-item",
            dir: "branch-right", // Se despliega hacia la derecha
            subItems: [
                { id: "portfolio", title: "Portafolio Web", desc: "Sitio personal interactivo diseñado con componentes de React y animaciones fluidas." },
                { id: "seminar", title: "Seminario Kinal", desc: "Investigación y aplicación tecnológica enfocada en la prevención del bullying escolar." }
            ]
        },
        {
            id: "contact",
            label: "Contacto  ",
            icon: "📬",
            positionClass: "contact-item",
            dir: "branch-left-con", // Se despliega hacia la izquierda
            subItems: [
                {
                    id: "Instagram",
                    title: "Instagram",
                    desc: "Conoce un poco más sobre mi día a día, proyectos, logros y contenido relacionado con mi trayectoria profesional.",
                    video: InstagramVideo,
                    link: "https://www.instagram.com/_fernan.1?igsh=MW9lMDE5c2RyaXhsdg=="
                },
                {
                    id: "Threads",
                    title: "Threads",
                    desc: "Comparte ideas conmigo, descubre reflexiones sobre tecnología y participa en conversaciones sobre desarrollo de software.",
                    video: ThreadsVideo,
                    link: "https://www.threads.com/@_fernan.1"
                },
                {
                    id: "Facebook",
                    title: "Facebook",
                    desc: "Mantente al tanto de mis publicaciones, proyectos, eventos y novedades a través de mi página de Facebook.",
                    video: FacebookVideo,
                    link: "https://www.facebook.com/share/1HRByTEZZm/"
                },
                {
                    id: "GitHub",
                    title: "GitHub",
                    desc: "Explora mis repositorios, revisa el código de mis proyectos y conoce las tecnologías con las que trabajo.",
                    video: GitHubVideo,
                    link: "https://github.com/FernanMaldonado"
                }
            ]
        },
        {
            id: "habilidades",
            label: "Habilidades",
            icon: "📬",
            positionClass: "habilities-item",
            dir: "branch-left",
            subItems: [
                {
                    id: "CCNA",
                    title: "CCNA",
                    desc: "Certificados de cursos sobre direccionamiento IP, redes y administración de servidores.",
                    pdf: CCNAPdf
                },
                {
                    id: "IT",
                    title: "IT",
                    desc: "Certificado de mantenimiento preventivo y correctivo de equipos de cómputo.",
                    pdf: ITPdf
                },
                {
                    id: "PowerBi",
                    title: "Power BI",
                    desc: "Certificado de análisis y visualización de datos utilizando Microsoft Power BI.",
                    pdf: PowerBiPdf
                },
            ]
        },
        {
            id: "frameworks",
            label: "Frameworks",
            icon: "⚡",
            positionClass: "fra-item",
            dir: "branch-right", // Se despliega hacia la derecha
            subItems: [
                { id: "fw1", title: "React", desc: "Desarrollo interfaces web interactivas y escalables mediante una arquitectura basada en componentes, optimizando la experiencia de usuario." },
                { id: "fw2", title: "Node.js", desc: "Construyo servicios backend eficientes y de alto tráfico, utilizando arquitectura asíncrona para APIs en tiempo real." },
                { id: "fw3", title: ".NET", desc: "Diseño e implemento soluciones empresariales robustas y seguras, aprovechando la potencia del ecosistema .NET para backend." }
                // Puedes agregar Spring Boot y React Native en sub-3 y sub-4 en tu CSS
            ]
        },
        {
            id: "lenguajes",
            label: "Lenguajes",
            icon: "💻",
            positionClass: "lengua-item",
            dir: "branch-right",
            subItems: [
                { id: "ln1", title: "JavaScript", desc: "Dominio avanzado de ecosistemas web modernos (ES6+), enfocado en la creación de interfaces dinámicas y lógica asíncrona de alto impacto." },
                { id: "ln2", title: "Java", desc: "Especialista en desarrollo backend robusto y escalable, aplicando patrones de diseño para sistemas empresariales de alto rendimiento." },
                { id: "ln3", title: "SQL", desc: "Experto en el diseño y optimización de bases de datos relacionales, garantizando la integridad de datos y consultas de alto rendimiento." }
            ]
        },
        {
            id: "bases",
            label: "DB",
            icon: "🗄️",
            positionClass: "base-item",
            dir: "branch-left", // Se despliega hacia la izquierda
            subItems: [
                { id: "db1", title: "MySQL", desc: "Diseño esquemas relacionales sólidos para garantizar la integridad y consistencia en sistemas de gestión empresarial." },
                { id: "db2", title: "MongoDB", desc: "Gestiono datos no estructurados con modelos flexibles, optimizando la escalabilidad y el rendimiento en aplicaciones de alto tráfico." },
                { id: "db3", title: "PostgreSQL", desc: "Implemento bases de datos avanzadas, utilizando características de extensibilidad y transacciones complejas para aplicaciones críticas." }
            ]
        },
        {
            id: "arquitectura",
            label: "Estructuras & Herramientas",
            icon: "🛠️",
            positionClass: "arch-item", // Asegúrate de crear esta clase en tu CSS para posicionar la cápsula
            dir: "branch-left-ar", // O branch-left, dependiendo de dónde la ubiques en pantalla
            subItems: [
                { id: "arch1", title: "MERN", desc: "Desarrollo aplicaciones full-stack completas, integrando de forma fluida el frontend con bases de datos NoSQL mediante un ecosistema unificado en JavaScript." },
                { id: "arch2", title: "API REST", desc: "Diseño y consumo APIs RESTful escalables, garantizando una comunicación eficiente y estandarizada entre servicios de backend y clientes frontend." },
                { id: "arch3", title: "MicroServices", desc: "Estructuro sistemas complejos en servicios independientes y desacoplados, mejorando la mantenibilidad, escalabilidad y tolerancia a fallos." },
                { id: "arch4", title: "Serverless", desc: "Implemento lógica orientada a eventos en arquitecturas Serverless, optimizando costos y eliminando la gestión manual de infraestructura." },
                { id: "tool1", title: "Docker", desc: "Contenerizo mis aplicaciones para garantizar entornos de desarrollo consistentes, facilitando su despliegue en cualquier servidor." },
                { id: "tool2", title: "Cloudinary", desc: "Optimizo y gestiono la entrega de activos multimedia, mejorando la velocidad de carga y la eficiencia de mis aplicaciones." }
            ]
        }
    ];

    const toggleSection = (id) => {
        setActiveSection(prevSection => (prevSection === id ? null : id));
    };

    return (
        <div className="Me">
            <div className="detras"> Detras del Codigo </div>
            {menuItems.map((item) => {
                const isOpen = activeSection === item.id;
                return (
                    <div
                        className={`floating-item ${item.positionClass} ${activeSection === item.id ? "active" : ""}`}
                    >


                        {/* Botón Principal */}
                        {/* 👇 AHORA REACCIONA AL CLIC */}
                        <div className="main-pill" onClick={() => toggleSection(item.id)}>
                            <span className="item-icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>

                        {/* Elementos secundarios dispersos conectados */}
                        {isOpen && (
                            <div className={`subitems-wrapper ${item.dir}`}>
                                {item.subItems.map((sub, index) => (
                                    <div key={sub.id} className={`subitem-group sub-${index}`}>
                                        {/* Línea animada */}
                                        <div className="line-wrapper">
                                            <div className="line-fill"></div>
                                        </div>

                                        {/* Cuadrito secundario */}
                                        <div
                                            className="subitem-box"
                                            onClick={() => setActiveModal(sub)}
                                        >
                                            <span>{sub.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}

            {/* Imagen Central */}
            <img className="Mee" src={Mee} alt="Mee" />

            {/* Ventana Modal Grande */}
            {activeModal && (
                <div className="info-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setActiveModal(null)}>×</button>
                        <h2>{activeModal.title}</h2>

                        {activeModal.video && (
                            <video
                                className="modal-video"
                                src={activeModal.video}
                                autoPlay
                                muted
                                loop
                                controls
                                playsInline
                            />
                        )}

                        <p>{activeModal.desc}</p>

                        {activeModal.link && (
                            <a
                                href={activeModal.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                Conoceme en mis redes
                            </a>
                        )}

                        {activeModal.pdf && (
                            <a
                                href={activeModal.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                📄 Ver certificado (PDF)
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Me;