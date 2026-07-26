import React, { useEffect, useRef, useState } from "react";
import Options, { OptionsSecond } from "../../Options/components/Options.jsx"
import { TypeAnimation } from "react-type-animation";
import "../style/About.css";
import Spline from '@splinetool/react-spline';

const About = () => {

    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="About">
            <div ref={ref} className="About-title">
                  <Options />
            <OptionsSecond/>
                {animate && (
                    <TypeAnimation
                        sequence={[
                            "Sobre Mí",
                            2000,
                        ]}
                        speed={50}
                        cursor
                        repeat={0}
                        className="Title-ab"
                    />
                )}
                <div className="parraf">
                    <p>
                        Soy estudiante de programación con certificaciones en tecnologías de la información (IT) y fundamentos de redes, enfocado en el desarrollo de soluciones tecnológicas modernas.
                    </p>
                </div>

                <div className="parraf">
                    <p>
                        Cuento con experiencia en más de cuatro lenguajes de programación, aplicados al desarrollo de sitios web, aplicaciones web y aplicaciones móviles multiplataforma.
                    </p>
                </div>

                <div className="parraf">
                    <p>
                        Poseo conocimientos en las diferentes capas de una aplicación, desde el diseño de interfaces hasta la integración con bases de datos relacionales y NoSQL.
                    </p>
                </div>

                <div className="parraf">
                    <p>
                        Tengo experiencia desarrollando sistemas completos de autenticación y gestión de usuarios, incluyendo inicio de sesión, registro, verificación de cuentas y restablecimiento de contraseñas, utilizando PostgreSQL como sistema gestor de base de datos.
                    </p>
                </div>

                <div className="parraf">
                    <p>
                        Domino el diseño, modelado y administración de bases de datos NoSQL, especialmente MongoDB, implementando estructuras de datos eficientes y escalables.
                    </p>
                </div>

                <div className="parraf">
                    <p>
                        Cuento con experiencia en el diseño y consumo de APIs REST, utilizando JSON como formato de intercambio de información y aplicando correctamente los métodos HTTP GET, POST, PUT, PATCH y DELETE.
                    </p>
                </div>

                <div className="parraf">
                    <p>
                        Implemento estrategias de manejo de excepciones y control de errores tanto en el cliente como en el servidor, garantizando una respuesta adecuada ante fallos y códigos de estado HTTP, como los errores 500.
                    </p>
                </div>
            </div>

            <div className="Spline-container">
                <Spline className="spline" scene="https://prod.spline.design/zvCkQCnoiuyNjsjv/scene.splinecode" />
                <div className="cont"></div>
            </div>
        </div>
    );
};

export default About;