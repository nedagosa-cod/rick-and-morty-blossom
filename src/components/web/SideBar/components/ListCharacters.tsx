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
          <h2 className="my-4 text-sm md: text-md text-slate-600">
            STARRED CHARACTERS ({filteredFavorites.length})
          </h2>
          <div
            className="flex flex-col overflow-y-auto max-h-54 md:max-h-84"
            style={{ scrollbarWidth: "none" }}
          >
            {sortCards(filteredFavorites).map((character) => {
              return (
                <div key={character.id}>
                  <Separator className="block md:hidden" />
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
          <div className="flex items-center justify-between md:hidden">
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
          <Separator className="block my-4 md:hidden" />
          <div className="flex items-center justify-between mb-4 md:px-6">
            <span className="text-sm font-bold text-blue-600">
              {filter.character === "other"
                ? nonFavoriteCharacters.length
                : filter.character === "starred"
                ? filteredFavorites.length
                : nonFavoriteCharacters.length + filteredFavorites.length}{" "}
              Results
            </span>
            <div className="w-20 p-1 text-sm font-bold text-center text-green-600 rounded-full bg-primary/20">
              {countDifferentFromAll} Filter
            </div>
          </div>
          {/* responsive title starred */}
          <Separator className="block md:hidden" />
          <h2 className="my-4 text-sm md:hidden text-md text-slate-600">
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
                    <Separator className="block md:hidden" />
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
          <h2 className="my-4 text-sm md: text-md text-slate-600">
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
        <h2 className="my-4 text-sm md: text-md text-slate-600">
          CHARACTERS (0)
        </h2>
      )}
    </div>
  );
}

export default ListCharacters;
