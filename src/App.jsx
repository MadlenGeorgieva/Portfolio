import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/AboutPage";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Contact from "./Pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/botanical-garden" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
