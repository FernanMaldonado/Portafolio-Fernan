import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/components/Navbar";
import Hero from "./components/Hero/components/Hero";
import Me from "./components/Hero/components/Me.jsx";
import Footer from "./components/Footer/components/Footer";
import Lenguages from "./components/ArquitectureSoftware/components/Lenguages.jsx"
import Frameworks from "./components/ArquitectureSoftware/components/Frameworks.jsx"
import BataBaseRelationalAndNorRelationals from "./components/ArquitectureSoftware/components/DataBase.jsx"
import DevOps from "./components/ArquitectureSoftware/components/DevOps.jsx"
import Arquitecture from "./components/ArquitectureSoftware/components/Arquitecture.jsx"
import About from "./components/About/components/About.jsx";
import DegradientUno from "./components/Degradient/components/Degradient.jsx";
import { DegradientDos } from "./components/Degradient/components/Degradient.jsx";
import { DegradientTres } from "./components/Degradient/components/Degradient.jsx";
import { DegradientCuatro } from "./components/Degradient/components/Degradient.jsx";
import { DegradientCinco } from "./components/Degradient/components/Degradient.jsx";
import { DegradientSeis } from "./components/Degradient/components/Degradient.jsx";
import GitHubProjects from "./components/Projects/components/GitHubProjects.jsx"
import  Skills  from "./components/Habilities/components/Habilities.jsx"
import  Contact from "./components/Contact/Contact.jsx"
import "./App.css";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, [pathname]);

    return null;
}


function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar /> 

            <Routes>
                <Route path="/" element={<Navigate to="/inicio" replace />} />
                <Route
                    path="/About"
                    element={
                        <>
                            <div id="about">
                                <About />
                            </div>
                            <DegradientUno/>

                            <div id="frameworks">
                                <Frameworks />
                            </div>
                            <DegradientDos/>

                            <div id="database">
                                <BataBaseRelationalAndNorRelationals />
                            </div>

                            <DegradientTres/>

                            <div id="lenguajes">
                                <Lenguages />
                            </div>

                            <DegradientCuatro/>

                            <div id="devOps">
                                <DevOps />
                            </div>

                            <DegradientCinco/>

                            <div id="arquitecture">
                                <Arquitecture />
                            </div>

                            <DegradientSeis/>
                        </>
                    }
                />

                <Route path="/inicio" element={<><Hero />
                    <Me/></>
                    } />
                <Route path="/Projects" element={<><GitHubProjects />
                    </>
                    } />
                <Route path="/Skills" element={<><Skills />
                    </>
                    } />
                <Route path="/Contact" element={<><Contact />
                    </>
                    } />
            </Routes>

            <Footer /> 
        </Router>
    );
}

export default App;