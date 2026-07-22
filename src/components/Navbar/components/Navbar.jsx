import { useState } from "react";
import { Link } from 'react-router-dom';
import "../style/Navbar.css";
import ProfilePic from "../../../assets/images/perfil.jpg"
import { MenuIcon } from "@animateicons/react/lucide";
import { XIcon } from "@animateicons/react/lucide";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="logo">
                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={ProfilePic} alt="Profile" />
                <h2>Fernando Maldonado</h2>
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XIcon/> : <MenuIcon/>}
            </button>

            {/* Menú: le añadimos la clase 'open' si isOpen es true */}
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><Link to="/Inicio" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>Sobre mí</Link></li>
                <li><a href="#skills" onClick={() => setIsOpen(false)}>Habilidades</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;