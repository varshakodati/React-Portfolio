import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/contact.css"


function App() {
  return (
    <>
    <div className="portfolio-title">
      <h1>Welcome to my Portfolio</h1>
    </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
