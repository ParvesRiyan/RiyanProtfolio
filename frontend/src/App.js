import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Component/Home/Home.jsx"
import About from "./Component/About/About.jsx"
import Skills from "./Component/Skills/Skills.jsx"
import Services from "./Component/Services/Services.jsx"
import Project from "./Component/Project/Project.jsx"
import Contact from "./Component/Contact/Contact.jsx"
import Header from "./Component/Header/Header.jsx"
import Footer from "./Component/Footer/Footer.jsx"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
