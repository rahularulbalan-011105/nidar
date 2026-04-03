import { Routes, Route, Navigate } from "react-router-dom";

// Sections
import Home from "./sections/Home";
import Team from "./sections/Team";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Gallery from "./sections/Gallery";
import Sponsors from "./sections/Sponsors";
import Contact from "./sections/Contact";

function ClubRouter() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="home" />} />

      {/* Pages */}
      <Route path="home" element={<Home />} />
      <Route path="team" element={<Team />} />
      <Route path="projects" element={<Projects />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default ClubRouter;