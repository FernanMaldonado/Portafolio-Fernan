import { useState } from "react";
import "../style/Navbar.css";
import ProfilePic from "../../../assets/images/perfil.jpg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="logo">
                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={ProfilePic} alt="Profile" />
                <h2>Fernando Maldonado</h2>
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Menú: le añadimos la clase 'open' si isOpen es true */}
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
                <li><a href="#skills" onClick={() => setIsOpen(false)}>Habilidades</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;