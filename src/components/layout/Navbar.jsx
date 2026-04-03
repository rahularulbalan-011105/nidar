import { Link } from "react-router-dom";

const clubs = ["aerospace", "axis", "vayuputra"];

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111318]/40 backdrop-blur-xl px-8 h-20 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#C3F5FF]">
        PSG iTech Drones
      </div>

      <div className="hidden md:flex gap-8 text-sm uppercase">
        <Link to="/" className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1">
          Main
        </Link>

        {clubs.map((club) => (
          <Link
            key={club}
            to={`/${club}/home`}
            className="text-gray-400 hover:text-white"
          >
            {club}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;