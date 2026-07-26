import React, { useState } from "react";
import "./Contact.css";

import Me from "../../assets/images/Perfil.png";

import {
    FaEnvelope,
    FaWhatsapp,
    FaUser,
    FaPaperPlane
} from "react-icons/fa";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = () => {

        const subject = encodeURIComponent(
            `Nuevo mensaje de ${form.name}`
        );

        const body = encodeURIComponent(
            `Nombre: ${form.name}

Correo: ${form.email}

Mensaje:
${form.message}`
        );

        window.location.href =
            `mailto:fernanmaldonado01@gmail.com?subject=${subject}&body=${body}`;
    };

    const sendWhatsApp = () => {

        const text = encodeURIComponent(
            `Hola Fernando.

Mi nombre es ${form.name}

Mi correo es:
${form.email}

${form.message}`
        );

        window.open(
            `https://wa.me/50243850824?text=${text}`,
            "_blank"
        );
    };

    return (
        <div className="wrapperc">
            <section className="contact">

                <div className="contact-container">

                    {/* Imagen */}

                    <div className="contact-image">

                        <img
                            src={Me}
                            alt="Fernando Maldonado"
                        />

                    </div>

                    {/* Formulario */}

                    <div className="contact-form">

                        <h1>Contáctame</h1>

                        <p>
                            ¿Tienes alguna propuesta, proyecto o deseas
                            comunicarte conmigo?
                            Será un gusto responderte.
                        </p>
                        <div className="input-row">
                            <div className="input-group">

                                <FaUser />

                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="input-group">

                                <FaEnvelope />

                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                            </div></div>

                        <textarea
                            placeholder="      
  Escribe tu mensaje  ..."
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        />

                        <div className="contact-buttons">

                            <button
                                onClick={sendEmail}
                                className="email-btn"
                            >
                                <FaPaperPlane />
                                Enviar Correo
                            </button>

                            <button
                                onClick={sendWhatsApp}
                                className="whatsapp-btn"
                            >
                                <FaWhatsapp />
                                WhatsApp
                            </button>
                            <div className="contact-info">

                                <div>
                                    <h4>📧 Correo</h4>
                                    <span>fernanmaldonado01@gmail.com</span>
                                </div>

                                <div>
                                    <h4>📱 WhatsApp</h4>
                                    <span>Disponible</span>
                                </div>

                                <div>
                                    <h4>⏱ Tiempo de respuesta</h4>
                                    <span>Menos de 24 horas</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section></div>

    );
}   