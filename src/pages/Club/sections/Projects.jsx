import AxisNavbar from "../../../components/clubs/AxisNavbar";
import project1 from "../../../assets/clubs/axis/project1.png";

function Projects() {
  return (
    <div className="bg-[#111318] text-white min-h-screen overflow-x-hidden">

      {/* Sidebar */}
      <AxisNavbar />

      <main className="lg:ml-64 pt-28 pb-20 px-8">

        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4">
            AXIS PROJECTS
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Showcasing the technical capabilities of Team AXIS in autonomous systems,
            defence applications, and precision engineering.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* BIG CARD */}
          <div className="relative md:col-span-2 rounded-xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1">

            {/* IMAGE */}
            <div className="relative h-64">
              <img
                src={project1}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 relative">
              <h2 className="text-2xl font-bold mb-3">
                Autonomous Navigation System
              </h2>

              <p className="text-gray-400 mb-6">
                Advanced autonomous drone system designed for real-time navigation,
                obstacle avoidance, and mission-critical deployments.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 text-center border-t border-gray-800 pt-4">
                <div>
                  <p className="text-cyan-400 text-xl font-bold">0.04s</p>
                  <p className="text-xs text-gray-500">Latency</p>
                </div>
                <div>
                  <p className="text-cyan-400 text-xl font-bold">98%</p>
                  <p className="text-xs text-gray-500">Accuracy</p>
                </div>
                <div>
                  <p className="text-cyan-400 text-xl font-bold">14km</p>
                  <p className="text-xs text-gray-500">Range</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)] hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-3">
              Defence Surveillance Drone
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Built for hostile environments with real-time monitoring and secure
              communication systems.
            </p>

            <button className="w-full py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition">
              View Details
            </button>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-2">
              Precision Agriculture Drone
            </h3>
            <p className="text-gray-400 text-sm">
              Crop monitoring, smart spraying, and AI-based analysis to improve yield.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-2">
              Disaster Response System
            </h3>
            <p className="text-gray-400 text-sm">
              Autonomous drones capable of mapping disaster zones and delivering aid.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Projects;