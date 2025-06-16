import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import CardCharacter from "./CardCharacter";
import { useGlobal } from "@/context/GlobalPrivider";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Character, ListCharactersProps } from "@/types/props";

function ListCharacters({
  characters,
  filter,
  filteredFavorites,
  setFilter,
}: ListCharactersProps) {
  const { favorites } = useGlobal();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // extract the characters that are not favorites
  const nonFavoriteCharacters = characters.filter(
    (char) => !favorites.some((fav) => fav.id === char.id)
  );
  // count the filters applied
  const countDifferentFromAll = Object.values(filter).filter(
    (value) => value !== "all"
  ).length;

  // sort the characters to asc or desc by name
  const sortCards = (characters: Character[]) => {
    if (filter.sort === "asc") {
      return characters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter.sort === "desc") {
      return characters.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return characters;
    }
  };

  return (
    <div className="flex flex-col flex-1 h-80 ">
      {/* if there are no filters applied, show the normal cards */}
      {countDifferentFromAll === 0 ? (
        <>
          <h2 className="text-sm md: text-md text-slate-600 my-4">
            STARRED CHARACTERS ({filteredFavorites.length})
          </h2>
          <div
            className="flex flex-col max-h-54 md:max-h-84 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {sortCards(filteredFavorites).map((character) => {
              return (
                <div key={character.id}>
                  <Separator className="md:hidden block" />
                  <CardCharacter
                    character={character}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {/* responsive advanced search */}
          <div className="flex md:hidden justify-between items-center">
            <button
              onClick={() =>
                setFilter({ character: "all", specie: "all", sort: "all" })
              }
            >
              <ArrowLeft className="w-8 h-8 text-secondary" />
            </button>
            <span>Advanced Search</span>
            <button
              className="text-secondary"
              onClick={() =>
                setFilter({ character: "all", specie: "all", sort: "all" })
              }
            >
              Done
            </button>
          </div>
          {/* filters applied */}
          <Separator className="md:hidden block my-4" />
          <div className="flex justify-between items-center md:px-6 mb-4">
            <span className="text-sm text-blue-600 font-bold">
              {filter.character === "other"
                ? nonFavoriteCharacters.length
                : filter.character === "starred"
                ? filteredFavorites.length
                : nonFavoriteCharacters.length + filteredFavorites.length}{" "}
              Results
            </span>
            <div className="text-sm text-green-600 font-bold bg-primary/20 rounded-full p-1 w-20 text-center">
              {countDifferentFromAll} Filter
            </div>
          </div>
          {/* responsive title starred */}
          <Separator className="md:hidden block" />
          <h2 className="text-sm md:hidden text-md text-slate-600 my-4">
            STARRED CHARACTERS ({filteredFavorites.length})
          </h2>

          {/* just show the favorites section if has the conditions */}
          {(filter.character === "starred" || filter.character === "all") && (
            <div
              className={cn(
                `flex flex-col ${
                  filter.character === "starred"
                    ? "h-full"
                    : "max-h-54 md:max-h-84"
                } overflow-y-auto`
              )}
              style={{ scrollbarWidth: "none" }}
            >
              {sortCards(filteredFavorites).map((character) => {
                return (
                  <>
                    <Separator className="md:hidden block" />
                    <CardCharacter
                      key={character.id}
                      character={character}
                      activeCard={activeCard}
                      setActiveCard={setActiveCard}
                    />
                  </>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* if the filter is other or all, show the non favorite characters */}
      {filter.character === "other" || filter.character === "all" ? (
        <>
          <h2 className="text-sm md: text-md text-slate-600 my-4">
            CHARACTERS ({sortCards(nonFavoriteCharacters).length})
          </h2>
          <div
            className="flex flex-col flex-1 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {sortCards(nonFavoriteCharacters).map((character) => (
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
        <h2 className="text-sm md: text-md text-slate-600 my-4">
          CHARACTERS (0)
        </h2>
      )}
    </div>
  );
}

export default ListCharacters;
