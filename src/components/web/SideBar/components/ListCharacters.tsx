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

function ListCharacters({ characters }: { characters: Character[] }) {
  const { favorites } = useGlobal();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const nonFavoriteCharacters = characters.filter(
    (char) => !favorites.some((fav) => fav.id === char.id)
  );

  return (
    <div className="flex flex-col flex-1 overflow-y-auto h-80">
      {favorites.length > 0 && (
        <>
          <h2 className="text-md text-stone-600 my-4">
            STARRED CHARACTERS ({favorites.length})
          </h2>
          {favorites.map((character) => (
            <CardCharacter
              key={character.id}
              character={character}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
          <Separator />
        </>
      )}

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
    </div>
  );
}

export default ListCharacters;
