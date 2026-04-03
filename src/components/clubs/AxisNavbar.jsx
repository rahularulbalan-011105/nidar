import { useNavigate } from "react-router-dom";

function AxisNavbar() {
  const navigate = useNavigate();

  const menu = [
    { name: "Home", key: "home" },
    { name: "Team", key: "team" },
    { name: "Projects", key: "projects" },
    { name: "Achievements", key: "achievements" },
    { name: "Gallery", key: "gallery" },
    { name: "Sponsors", key: "sponsors" },
    { name: "Contact", key: "contact" },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-[#1A1C20]/70 backdrop-blur-xl border-r border-white/10 flex-col py-24 px-4">

      <div className="px-4 mb-8">
        <h2 className="text-xl text-cyan-400 font-bold">Team AXIS</h2>
        <p className="text-xs text-gray-400 mt-1 tracking-widest">
          AUTONOMOUS SYSTEMS
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {menu.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(`/axis/${item.key}`)}
            className="text-left px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-all duration-300 hover:translate-x-1"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default AxisNavbar;