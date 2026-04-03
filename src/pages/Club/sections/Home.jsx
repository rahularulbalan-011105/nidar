import { useRef } from "react";
import { axisData } from "../../../data/clubs/axisData";
import heroImg from "../../../assets/clubs/axis/hero.png";
import AxisNavbar from "../../../components/clubs/AxisNavbar";

function AxisHome() {
  const aboutRef = useRef(null);
  

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTo = (section) => {
    const map = {
      home: homeRef,
      about: aboutRef,
    };

    map[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#111318] text-white">

      {/* ✅ AXIS SIDEBAR */}
      <AxisNavbar scrollTo={scrollTo} />

      {/* ✅ MAIN CONTENT SHIFTED RIGHT */}
      <main className="lg:ml-64">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-10">

          {/* BG IMAGE */}
          <img
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

          <div className="relative z-10 max-w-3xl">

            <h1 className="text-6xl font-bold mb-6">
              TEAM <span className="text-cyan-400">AXIS</span>
            </h1>

            <p className="text-gray-300 mb-10">
              {axisData.hero.subtitle}
            </p>

            <div className="flex gap-4">
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 bg-cyan-400 text-black rounded"
              >
                ABOUT US
              </button>

              <button
                onClick={scrollToAbout}
                className="px-6 py-3 border border-gray-500"
              >
                OUR TEAM
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          ref={aboutRef}
          className="px-10 py-20 bg-[#0f1115]"
        >
          <h2 className="text-3xl font-bold mb-12">
            About Team AXIS
          </h2>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 
           hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] 
           transition-all duration-300 hover:-translate-y-1">
            {axisData.about.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1d22] p-6 rounded-xl border border-gray-800 hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default AxisHome;