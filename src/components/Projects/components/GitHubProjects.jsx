import React, { useState } from "react";
import "../styles/GitHubProjects.css";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaJava,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiMongodb,
    SiMysql,
    SiDotnet,
} from "react-icons/si";
import { BsBarChartFill } from "react-icons/bs";
import ReservacionesVideo from "../../../assets/Video/ProyectoRestaurante.mp4"
import ToDoListVideo from "../../../assets/Video/ToDoList.mp4"
import AuthServiceRestauranteVideo from "../../../assets/Video/AuthServiceRestaurante.mp4"
import BackendBancoImg from "../../../assets/images/BackendBancos.png"
import GestionDeBancoImg from "../../../assets/images/GestionDeBanco.png"
import InterfazUsuarioImg from "../../../assets/images/InterfazUsuario.png"
import InterfazUsuarioVideo from "../../../assets/images/ReactNativeRestaurante.jpeg"
import UsuarioBancoVideo from "../../../assets/Video/UsuarioBanco.mp4"

const projects = [
  {
    id: 1,
    title: "Sistema De Gestion de Restaurante",
    media: ReservacionesVideo,
    type: "video",
    description: "Este fue un Proyecto en Equipo en que desarrollariamos una Gestion de Restaurante para ciertas funciones Como gestionar Reservaciones, Mesas, Inventario y Pedidos por decir algunas",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Pasto-Kinaliani",
    demo: "https://pasto-kinaliani-admin.web.app/",
    featured: true,
    category: "React",
  },
  {
    id: 2,
    title: "ToDoList",
    media: ToDoListVideo,
    type: "video",
    description: " Primer Proyecto React, Node.js, MongoDB y Desplegado qeu he hecho basado en una agenda de queaceres, asiganar Contactos y Dar prioridad a tareas",
    technologies: ["React", "CSS","Node.js","MongoDB"],
    github: "https://github.com/FernanMaldonado/Agenda_Web.git",
    demo: "https://fernanmaldonado.github.io/Agenda_Web/",
    featured: false,
    category: "React",
  },
  {
    id: 3,
    title: "Servicio de Authentication de Restaurante",
    media: AuthServiceRestauranteVideo,
    type: "video",
    description: "Es un servicio de authentication para todo tipos de usuarios basados en un Role USER or ADMIN, con funciones de Login, Register, Verify-email y Resend-Password",
    technologies: ["C#", "PostgreSQL"],
    github: "https://github.com/Pasto-Kinaliani/auth-service-restaurantes.git",
    demo: "",
    featured: false,
    category: ".NET",
  },
  {
    id: 4,
    title: "Sistema de Ventas Online de Funkos",
    media: ReservacionesVideo,
    type: "video",
    description: "Realizamos una pagina web guiada para la compara en linea de juguetes Funkos con sistema de Envio adomicilio",
    technologies: ["Java","SQL","JSF"],
    github: "https://github.com/azacarias-dev/Funkinal.git",
    demo: "",
    featured: false,
    category: "Power BI",
  },
   {
    id: 5,
    title: "Sistema Gestion de Bancos Backend",
    media: BackendBancoImg,
    type: "image",
    description: "Backend de sistema de Gestion de Bancos para Coleccion en Base de Datos MongoDB y validaciones (Middleware)",
    technologies: ["JavaScript","MONGODB"],
    github: "https://github.com/Ban-K-GT/Gestion-de-Bancos-Ban-k.git",
    demo: "",
    featured: false,
    category: "Power BI",
  },
  {
    id: 6,
    title: "Sistema Gestion de Bancos Interfaz",
    media: GestionDeBancoImg,
    type: "image",
    description: "Intefaz de sistema de Gestion de Bancos para Coleccion en Base de Datos MongoDB y validaciones (Middleware) via interraccion visual",
    technologies: ["JavaScript","MONGODB","React"],
    github: "https://github.com/Ban-K-GT/client-admin-ban-k.git",
    demo: "https://ban-k-admin.web.app/",
    featured: false,
    category: "Power BI",
  },
  {
    id: 7,
    title: "Sistema Gestion de Restaurantes Usuario",
    media: InterfazUsuarioImg,
    type: "image",
    description: "Intefaz de sistema de Gestion de Restaurantes  hacia logica del cliente con funciones de reservar y realizar pedidos   ",
    technologies: ["JavaScript","MONGODB","React"],
    github: "https://github.com/Pasto-Kinaliani/client-user-movil-restaurant.git",
    demo: "https://pasto-kinaliani.web.app/",
    featured: false,
    category: "React",
  },
  {
    id: 8,
    title: "Sistema Gestion de Restaurantes Usuario Movil",
    media: InterfazUsuarioVideo,
    type: "image",
    description: "Intefaz de sistema de Gestion de Restaurantes  hacia logica del cliente con funciones de reservar y realizar pedidos desde su movil   ",
    technologies: ["JavaScript","MONGODB","React Native"],
    github: "https://github.com/Pasto-Kinaliani/client-user-movil-restaurant.git",
    demo: "",
    featured: false,
    category: "React Native",
  },
    {
    id: 9,
    title: "Sistema Gestion de Bancos Usuario Web",
    media: UsuarioBancoVideo,
    type: "video",
    description: "Intefaz de sistema de Gestion de Bancos Usuario para funciones de ver cuentas, trasferencias y depositos",
    technologies: ["JavaScript","MONGODB","React"],
    github: "https://github.com/Ban-K-GT/client-user-Ban-k.git",
    demo: "https://ban-k-23ade.web.app/",
    featured: false,
    category: "React",
  },
];

export default function GitHubProjects() {
    const [filter, setFilter] = useState("Todos");

    const filtered =
        filter === "Todos"
            ? projects
            : projects.filter((p) => p.category === filter);

    return (
        <div className="wrapper">
        <section className="github-projects">
            <div className="hero">
                <h1>Mis Proyectos</h1>
                <p>
                    Una colección de los proyectos que he desarrollado durante mi
                    formación como Técnico en Informática.
                </p>
                <div className="stats">
                    <div>
                        <h2>{projects.length}</h2>
                        <span>Proyectos</span>
                    </div>
                    <div>
                        <h2>10+</h2>
                        <span>Tecnologías</span>
                    </div>
                    <div>
                        <h2>2024-2026</h2>
                        <span>Experiencia</span>
                    </div>
                </div>
            </div>

            <div className="filters">
                {[
                    "Todos",
                    "React",
                    "React Native",
                    ".NET",
                    "Power BI",
                ].map((item) => (
                    <button
                        key={item}
                        className={filter === item ? "active" : ""}
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>
                ))}

            </div>

            <div className="tech-stack">
                <FaReact />
                <FaJava />
                <FaNodeJs />
                <SiDotnet />
                <SiMysql />
                <SiMongodb />
                <BsBarChartFill />
            </div>
            <div className="cardsf">
                {filtered.map((project) => (
                    <div
                        className={`cardf ${project.featured ? "featured" : ""}`}
                        key={project.id}
                    >

                        <div className="media-container">

                            {project.type === "video" ? (
                                <video
                                    className="project-media"
                                    src={project.media}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img
                                    className="project-media"
                                    src={project.media}
                                    alt={project.title}
                                />
                            )}

                        </div>

                        <div className="contentf">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="tags">

                                {project.technologies.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}

                            </div>
                            <div className="buttons">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                )}

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            <div className="timeline">
                <h2>Mi evolución</h2>
                <div className="line">
                    <div>
                        <h3>2024</h3>
                        <p>Java • JavaFX • MySQL</p>
                    </div>

                    <div>
                        <h3>2025</h3>
                        <p>React • React Native • APIs</p>
                    </div>

                    <div>
                        <h3>2026</h3>
                        <p>ASP.NET • MongoDB • Power BI</p>
                    </div>
                </div>

            </div>

        </section>
        </div>
    );
}