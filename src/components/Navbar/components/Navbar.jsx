import { useState } from "react";
import { Link } from 'react-router-dom';
import "../style/Navbar.css";
import ProfilePic from "../../../assets/images/Perfil.png"
import { InfoIcon, ContactIcon, BrainIcon, FolderOpenIcon, PlayIcon   } from "@animateicons/react/lucide";
import { MenuIcon } from "@animateicons/react/lucide";
import { XIcon } from "@animateicons/react/lucide";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="Container-navar">
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
                <li><Link to="/Inicio" onClick={() => setIsOpen(false)}><PlayIcon  size={25} duration={2} /><span>Inicio</span></Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}><InfoIcon size={25} duration={2} /><span>Sobre Mi</span></Link></li>
                <li><a href="/Projects" onClick={() => setIsOpen(false)}><FolderOpenIcon size={25} duration={2} /><span>Proyectos</span></a></li>
                <li><a href="/Skills" onClick={() => setIsOpen(false)}><BrainIcon size={25} duration={2} /><span>Habilidades</span></a></li>
                <li><a href="/Contact" onClick={() => setIsOpen(false)}><ContactIcon size={25} duration={2} /><span>Contacto</span></a></li>
            </ul>
        </nav></div>
    );
}

export default Navbar;