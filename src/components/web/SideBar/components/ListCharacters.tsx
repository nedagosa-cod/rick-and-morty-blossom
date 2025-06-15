import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import CardCharacter from "./CardCharacter";
import { useGlobal } from "@/context/GlobalPrivider";

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

function ListCharacters({
  characters,
  filter,
  filteredFavorites,
}: {
  characters: Character[];
  filter: { character: string; specie: string };
  filteredFavorites: Character[];
}) {
  const { favorites } = useGlobal();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const nonFavoriteCharacters = characters.filter(
    (char) => !favorites.some((fav) => fav.id === char.id)
  );
  const countDifferentFromAll = Object.values(filter).filter(
    (value) => value !== "all"
  ).length;
  return (
    <div className="flex flex-col flex-1 h-80 ">
      {/* if the filter is all, show the favorites */}
      {countDifferentFromAll === 0 ? (
        <>
          <h2 className="text-md text-stone-600 my-4">
            STARRED CHARACTERS ({filteredFavorites.length})
          </h2>
          <div
            className="flex flex-col max-h-84 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {filteredFavorites.map((character) => {
              return (
                <CardCharacter
                  key={character.id}
                  character={character}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          {/* show the results and the filter */}
          <div className="flex justify-between items-center px-6 mb-4">
            <span className="text-sm text-blue-600 font-bold">
              {filter.character === "other"
                ? nonFavoriteCharacters.length
                : filter.character === "starred"
                ? filteredFavorites.length
                : nonFavoriteCharacters.length + filteredFavorites.length}{" "}
              Results
            </span>
            <div className="text-sm text-green-900 font-bold bg-primary/20 rounded-full p-1 w-20 text-center">
              {countDifferentFromAll} Filter
            </div>
          </div>
          {/* just show the favorites if the filter is starred */}
          {filter.character !== "other" && (
            <>
              {filteredFavorites.map((character) => {
                return (
                  <CardCharacter
                    key={character.id}
                    character={character}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                );
              })}
            </>
          )}
        </>
      )}
      {/* if the filter is other or all, show the non favorite characters */}
      {filter.character === "other" || filter.character === "all" ? (
        <>
          <h2 className="text-md text-stone-600 my-4">
            CHARACTERS ({nonFavoriteCharacters.length})
          </h2>
          <div
            className="flex flex-col flex-1 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {nonFavoriteCharacters.map((character) => (
              <div key={character.id}>
                <CardCharacter
                  character={character}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
                <Separator />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-md text-stone-600 my-4">CHARACTERS (0)</h2>
      )}
    </div>
  );
}

export default ListCharacters;
