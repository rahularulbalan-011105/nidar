import { useNavigate } from "react-router-dom";

function ClubCard({ club }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
      
      <img
        src={club.image}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h3 className="text-xl mt-4 text-cyan-300">{club.name}</h3>

      <p className="text-gray-400 text-sm mt-2">
        {club.description}
      </p>

      <button
        onClick={() => navigate(`/${club.id}/home`)}
        className="mt-4 w-full py-2 bg-gray-800 text-cyan-400 rounded"
      >
        Explore Team →
      </button>
    </div>
  );
}

export default ClubCard;