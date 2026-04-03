import { clubs } from "../../data/index.js";
import ClubCard from "./ClubCard";

function ClubGrid() {
  return (
    <section className="py-20 px-8 bg-[#1a1c20]">
      
      <h2 className="text-3xl text-white mb-10">
        The Squadrons
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </section>
  );
}

export default ClubGrid;