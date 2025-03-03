import Header from "./components/Header.js";
import About from "./components/About.js";
import Expertise from "./components/Experties.js";
import Projects from  "./components/Projects.js";
import Contact from "./components/Contact.js";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header />
      <About />
      <Expertise /> 
      <Projects />
      <Contact />
      
    </>
  );
}

export default App;
