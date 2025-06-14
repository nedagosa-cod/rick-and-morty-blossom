import React from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

function CardCharacter() {
  return (
    <NavLink
      to="/character/1"
      className="flex items-center gap-4  p-5 rounded-md cursor-pointer hover:bg-secondary/10 transition-all duration-300"
    >
      <figure className="w-10 h-10 rounded-full overflow-hidden ">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="character"
        />
      </figure>
      <div className="flex flex-col flex-1">
        <h3 className="text-md font-bold">Rick Sanchez</h3>
        <span className="text-sm text-stone-400">Human</span>
      </div>

      <button className="p-2 rounded-full cursor-pointer">
        <Heart className="w-6 h-6 text-stone-300" strokeWidth={2.5} />
      </button>
    </NavLink>
  );
}

export default CardCharacter;
