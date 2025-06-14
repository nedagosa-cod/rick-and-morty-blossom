import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import TopSideBar from "./components/TopSideBar";
import ListCharacters from "./components/ListCharacters";
import { gql, useQuery } from "@apollo/client";
import CardCharacterSkeleton from "./components/CardCharacterSkeleton";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
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

type CharactersData = {
  characters: {
    info: {
      count: number;
    };
    results: Character[];
  };
};

function SideBar({ className }: { className?: string }) {
  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);
  if (error) return <div>Error: {error.message}</div>;
  return (
    <nav
      className={cn(
        "flex flex-col gap-4 bg-stone-100 h-dvh overflow-y-hidden p-4",
        className
      )}
    >
      <TopSideBar />
      {loading && <CardCharacterSkeleton />}
      <ListCharacters characters={data?.characters.results || []} />
    </nav>
  );
}

export default SideBar;
