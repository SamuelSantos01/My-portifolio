import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import About from './Components/About/About.jsx'
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Habilidades from "./Components/Habilidade/Habilidades.jsx";



export default function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Habilidades/>
      <hr />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}