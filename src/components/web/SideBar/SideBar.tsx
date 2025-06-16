import React, { useState } from "react";
import TopSideBar from "./components/TopSideBar";
import ListCharacters from "./components/ListCharacters";
import { useQuery } from "@apollo/client";
import CardCharacterSkeleton from "./components/CardCharacterSkeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { GET_CHARACTERS } from "@/queries/queries";
import { useGlobal } from "@/context/GlobalPrivider";
import { cn } from "@/lib/utils";

export default function SideBar() {
  const { favorites } = useGlobal();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    character: "all",
    specie: "all",
    sort: "all",
  });
  const debouncedSearch = useDebounce(search, 500);
  const { viewPageCharacter } = useGlobal();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      name: debouncedSearch || undefined,
      species: filter.specie !== "all" ? filter.specie : undefined,
    },
  });

  const filteredFavorites = favorites.filter((char) => {
    const matchesSpecie =
      filter.specie === "all" || char.species === filter.specie;
    const matchesSearch =
      !debouncedSearch ||
      [char.name, char.status, char.species, char.gender].some((field) =>
        field?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    return matchesSpecie && matchesSearch;
  });

  return (
    <nav
      className={cn(
        "flex flex-col gap-4 bg-white  md:shadow-[inset_0px_0px_30px_4px_rgba(0,0,0,0.1)] h-dvh overflow-y-hidden p-4 w-full md:max-w-96 min-w-80  md:w-1/3 absolute top-0 left-0 z-40 md:relative",
        viewPageCharacter && "hidden md:flex"
      )}
    >
      <TopSideBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      {loading ? (
        <CardCharacterSkeleton />
      ) : (
        <ListCharacters
          characters={data?.characters.results || []}
          filter={filter}
          filteredFavorites={filteredFavorites}
          setFilter={setFilter}
        />
      )}
      {error && (
        <div className="flex flex-col items-center justify-center h-dvh text-stone-600">
          <h2 className="text-2xl font-bold">
            Error: the characters could not be loaded
          </h2>
        </div>
      )}
    </nav>
  );
}
