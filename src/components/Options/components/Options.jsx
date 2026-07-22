import React from "react";
import { useState } from "react";
import "../styles/Options.css"
import { HouseIcon } from "@animateicons/react/lucide";
import { CodeIcon } from "@animateicons/react/lucide";
import { CodeXmlIcon } from "@animateicons/react/lucide";
import { KeyRoundIcon } from "@animateicons/react/lucide";
import { GitBranchIcon } from "@animateicons/react/lucide";
import { ArrowUp01Icon } from "@animateicons/react/lucide";
import { ChevronsRightIcon } from "@animateicons/react/lucide";
import { ChevronsLeftIcon } from "@animateicons/react/lucide";



const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

const Options = () => {
    return (
        <div className="Options">
            <div className="arquitecture" onClick={() => scrollTo("inicio")}>
                <HouseIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Inicio</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("frameworks")}>
                <CodeIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Frameworks</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("database")}>
                <KeyRoundIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Base de Datos</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("lenguajes")}>
                <CodeXmlIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Lenguages</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("devOps")}>
                <GitBranchIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Herramientas</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("arquitecture")}>
                <ArrowUp01Icon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Arquitecturas</span>
            </div>
        </div>
    )
};

const OptionsSecond = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="Options-Second"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ChevronsLeftIcon /> : <ChevronsRightIcon />}
            </div>
            <OptionsList isOpen={isOpen} />
        </>
    );
};

const OptionsList = ({isOpen}) => {
    return (
        <div className={`OptionsList ${isOpen ? "open" : ""}`}>
            <div className="arquitecture" onClick={() => scrollTo("inicio")}>
                <HouseIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Inicio</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("frameworks")}>
                <CodeIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Frameworks</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("database")}>
                <KeyRoundIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Base de Datos</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("lenguajes")}>
                <CodeXmlIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Lenguages</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("devOps")}>
                <GitBranchIcon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Herramientas</span>
            </div>
            <div className="arquitecture" onClick={() => scrollTo("arquitecture")}>
                <ArrowUp01Icon
                    className="icons"
                    duration={1.5} />
                <span className="tooltip">Arquitecturas</span>
            </div>
        </div>
    )
};

export default Options;
export { OptionsSecond };