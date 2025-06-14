import React from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "@/context/GlobalPrivider";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

function CardCharacter({ character }: { character: Character }) {
  const { toggleFavorite, isFavorite } = useGlobal();
  return (
    <NavLink
      to={`/character/${character.id}`}
      className="flex items-center gap-4  p-5 rounded-md cursor-pointer hover:bg-secondary/10 transition-all duration-300"
    >
      <figure className="w-10 h-10 rounded-full overflow-hidden ">
        <img src={character.image} alt="character" />
      </figure>
      <div className="flex flex-col flex-1">
        <h3 className="text-md font-bold">{character.name}</h3>
        <span className="text-sm text-stone-400">{character.species}</span>
      </div>
      {/* button to set favorite */}
      <button
        className="p-2 rounded-full cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(character);
        }}
      >
        <Heart
          className={`w-6 h-6 text-stone-300 ${
            isFavorite(character.id) ? "text-red-500" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>
    </NavLink>
  );
}

export default CardCharacter;
