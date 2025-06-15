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
  filter: string;
  filteredFavorites: Character[];
}) {
  const { favorites } = useGlobal();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const nonFavoriteCharacters = characters.filter(
    (char) => !favorites.some((fav) => fav.id === char.id)
  );

  return (
    <div className="flex flex-col flex-1 overflow-y-auto h-80">
      {filter === "starred" || filter === "all" ? (
        <>
          <h2 className="text-md text-stone-600 my-4">
            STARRED CHARACTERS ({filteredFavorites.length})
          </h2>
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
      ) : (
        <h2 className="text-md text-stone-600 my-4">STARRED CHARACTERS (0)</h2>
      )}

      {filter === "other" || filter === "all" ? (
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
