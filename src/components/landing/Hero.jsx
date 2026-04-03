import heroImg from "../../assets/landing/hero.png";

function Hero({ onExploreClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY (CRITICAL FIX) */}
      {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* GRADIENT FOR DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl space-y-6">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Drone Innovation <br />
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            Teams of PSG iTech
          </span>
        </h1>

        <p className="text-gray-300">
          Advancing autonomous aerial systems through rigorous engineering.
        </p>

        <div className="flex justify-center">
          <button
            onClick={onExploreClick}
            className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-md 
                       hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition"
          >
            View Ecosystem
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;