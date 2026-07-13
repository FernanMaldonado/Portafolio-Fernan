import Navbar from "./components/Navbar/components/Navbar";
import Hero from "./components/Hero/components/Hero";
import Footer from "./components/Footer/components/Footer";
import Lenguages from "./components/ArquitectureSoftware/components/Lenguages.jsx"
import Frameworks from "./components/ArquitectureSoftware/components/Frameworks.jsx"
import BataBaseRelationalAndNorRelationals from "./components/ArquitectureSoftware/components/DataBase.jsx"
import DevOps from "./components/ArquitectureSoftware/components/DevOps.jsx"
import Arquitecture from "./components/ArquitectureSoftware/components/Arquitecture.jsx"
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Lenguages/>
            <Frameworks/>
            <BataBaseRelationalAndNorRelationals/>
            <DevOps/>
            <Arquitecture/>
            <Footer/>   
            
        </>
    );
}

export default App;