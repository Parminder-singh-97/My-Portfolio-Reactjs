import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
function App() {
 

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
