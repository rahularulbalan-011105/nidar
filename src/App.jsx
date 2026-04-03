import {  HashRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage";
import ClubRouter from "./pages/Club/ClubRouter";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Club routes */}
        <Route path="/axis/*" element={<ClubRouter />} />
        <Route path="/aerospace/*" element={<ClubRouter />} />
        <Route path="/vayuputra/*" element={<ClubRouter />} />
      </Routes>
    </Router>
  );
}

export default App;