import React from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "@/context/GlobalPrivider";
import { cn } from "@/lib/utils";
import type { CardCharacterProps } from "@/types/props";

function CardCharacter({
  character,
  activeCard,
  setActiveCard,
}: CardCharacterProps) {
  const { toggleFavorite, isFavorite } = useGlobal();
  return (
    <NavLink
      to={`/character/${character.id}`}
      className={cn(
        "flex items-center gap-4  p-5 rounded-md cursor-default transition-all duration-300",
        activeCard === character.id
          ? "bg-secondary/20"
          : "hover:bg-secondary/10"
      )}
      onClick={() => {
        setActiveCard(character.id);
      }}
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
          className={cn(
            "w-6 h-6 text-stone-300",
            isFavorite(character.id) &&
              "text-primary fill-primary ring-6 ring-white bg-white rounded-full"
          )}
          strokeWidth={2.5}
        />
      </button>
    </NavLink>
  );
}

export default CardCharacter;
