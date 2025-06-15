import React, { useState } from "react";
import { cn } from "@/lib/utils";
import TopSideBar from "./components/TopSideBar";
import ListCharacters from "./components/ListCharacters";
import { gql, useQuery } from "@apollo/client";
import CardCharacterSkeleton from "./components/CardCharacterSkeleton";
import { useDebounce } from "@/hooks/useDebounce";

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $species: String) {
    characters(filter: { name: $name, species: $species }) {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

function SideBar({ className }: { className?: string }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    gender: "all",
    specie: "all",
  });
  const debouncedSearch = useDebounce(search, 500);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      name: debouncedSearch || undefined,
      species: filter.specie !== "all" ? filter.specie : undefined,
      gender: filter.gender !== "all" ? filter.gender : undefined,
    },
  });
  if (error) return <div>Error: {error.message}</div>;
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
      <ListCharacters characters={data?.characters.results || []} />
    </nav>
  );
}

export default SideBar;
