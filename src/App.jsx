import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/components/Navbar";
import Hero from "./components/Hero/components/Hero";
import Footer from "./components/Footer/components/Footer";
import Lenguages from "./components/ArquitectureSoftware/components/Lenguages.jsx"
import Frameworks from "./components/ArquitectureSoftware/components/Frameworks.jsx"
import BataBaseRelationalAndNorRelationals from "./components/ArquitectureSoftware/components/DataBase.jsx"
import DevOps from "./components/ArquitectureSoftware/components/DevOps.jsx"
import Arquitecture from "./components/ArquitectureSoftware/components/Arquitecture.jsx"
import About from "./components/About/components/About.jsx";
import Options, { OptionsSecond } from "./components/Options/components/Options.jsx"
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar /> 

            <Routes>
                <Route
                    path="/Inicio"
                    element={
                        <>
                            <div id="inicio">
                                <Hero />
                            </div>

                            <Options />
                            <OptionsSecond/>


                            <div id="frameworks">
                                <Frameworks />
                            </div>

                            <div id="database">
                                <BataBaseRelationalAndNorRelationals />
                            </div>

                            <div id="lenguajes">
                                <Lenguages />
                            </div>

                            <div id="devOps">
                                <DevOps />
                            </div>

                            <div id="arquitecture">
                                <Arquitecture />
                            </div>
                        </>
                    }
                />

                <Route path="/about" element={<About />} />
            </Routes>

            <Footer /> 
        </Router>
    );
}

export default App;