import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import HelloWord from "./components/HelloWord"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { domAnimation } from "framer-motion"





function App() {
  
  
  return (
    
    <div className="App">
  
      <NavBar/>
      <div className="Main">
        <HelloWord />
        <AboutMe />
        <Experience />
        <Projects/>
        <Contact />
        
        </div>
        <Footer/>
    </div>
  )
}

export default App
