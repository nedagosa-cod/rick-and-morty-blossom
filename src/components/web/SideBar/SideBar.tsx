import React, { useState } from "react";
import { cn } from "@/lib/utils";
import TopSideBar from "./components/TopSideBar";
import ListCharacters from "./components/ListCharacters";
import { useQuery } from "@apollo/client";
import CardCharacterSkeleton from "./components/CardCharacterSkeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { GET_CHARACTERS } from "@/queries/queries";
import { useGlobal } from "@/context/GlobalPrivider";

function SideBar({ className }: { className?: string }) {
  const { favorites } = useGlobal();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    character: "all",
    specie: "all",
  });
  const debouncedSearch = useDebounce(search, 500);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      name: debouncedSearch || undefined,
      species: filter.specie !== "all" ? filter.specie : undefined,
    },
  });
  if (error) return <div>Error: {error.message}</div>;

  const filteredFavorites = favorites.filter((char) => {
    const matchesSpecie =
      filter.specie === "all" || char.species === filter.specie;
    const matchesSearch =
      !debouncedSearch ||
      char.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesSpecie && matchesSearch;
  });

  return (
    <nav
      className={cn(
        "flex flex-col gap-4 bg-stone-100 h-dvh overflow-y-hidden p-4",
        className
      )}
    >
      <TopSideBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      {loading && <CardCharacterSkeleton />}
      <ListCharacters
        characters={data?.characters.results || []}
        filter={filter.character}
        filteredFavorites={filteredFavorites}
      />
    </nav>
  );
}

export default SideBar;
