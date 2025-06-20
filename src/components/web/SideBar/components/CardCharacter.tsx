import React from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "@/context/GlobalPrivider";
import { cn } from "@/lib/utils";
import type { CardCharacterProps } from "@/types/props";

export default function CardCharacter({
  character,
  activeCard,
  setActiveCard,
}: CardCharacterProps) {
  const { toggleFavorite, isFavorite, setViewPageCharacter } = useGlobal();

  const setFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(character);
  };
  return (
    <NavLink
      to={`/character/${character.id}`}
      className={cn(
        "flex items-center gap-4 py-4 md:py-5 px-5 rounded-md cursor-default transition-all duration-300",
        activeCard === character.id
          ? "bg-secondary/20"
          : "hover:bg-linear-to-bl from-secondary/10 to-secondary/20"
      )}
      onClick={() => {
        setActiveCard(character.id);
        setViewPageCharacter(true);
      }}
    >
      <figure className="w-10 h-10 overflow-hidden rounded-full ">
        <img src={character.image} alt="character" />
      </figure>
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-bold md:text-md">{character.name}</h3>
        <span className="text-sm text-slate-400">{character.species}</span>
      </div>
      {/* button to set favorite */}
      <button className="p-2 rounded-full cursor-pointer" onClick={setFavorite}>
        <Heart
          className={cn(
            "w-6 h-6 text-slate-300",
            isFavorite(character.id) &&
              "text-primary fill-primary ring-6 ring-white bg-white rounded-full"
          )}
          strokeWidth={2.5}
        />
      </button>
    </NavLink>
  );
}
