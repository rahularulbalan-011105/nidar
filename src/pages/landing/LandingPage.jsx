import { useRef } from "react";
import Navbar from "../../components/layout/navbar";
import Hero from "../../components/landing/Hero";
import ClubGrid from "../../components/landing/ClubGrid";
import Footer from "../../components/layout/Footer";

function LandingPage() {
  const squadRef = useRef(null);

  const scrollToSquads = () => {
    squadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Pass function */}
      <Hero onExploreClick={scrollToSquads} />

      {/* THIS IS IMPORTANT */}
      <div ref={squadRef}>
        <ClubGrid />
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;