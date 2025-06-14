import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Dna, Heart, User } from "lucide-react";
import { useGlobal } from "@/context/GlobalPrivider";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface Character {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  };
}

function Character() {
  const { toggleFavorite, isFavorite } = useGlobal();
  const { id } = useParams();
  const GET_CHARACTERS = gql`
      query {
        character(id: ${id}) {
        id
          name
          status
          species
          gender
          image
        }
      }
    `;
  const { loading, error, data } = useQuery<Character>(GET_CHARACTERS);
  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container flex flex-col p-20 mx-auto w-full h-dvh bg-contain bg-center bg-no-repeat overflow-y-hidden ">
      <header className="w-full flex items-center justify-center h-40 gap-4">
        <div className="w-11/12 space-y-4">
          <div className="relative w-fit">
            <figure className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={data?.character.image}
                alt={data?.character.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <button
              className="p-2 rounded-full cursor-pointer absolute -bottom-1 -right-1 bg-white z-10"
              onClick={(e) => {
                e.preventDefault();
                if (data?.character) toggleFavorite(data.character);
              }}
            >
              <Heart
                className={cn(
                  "w-4 h-4 text-stone-300",
                  isFavorite(Number(id)) &&
                    "text-primary fill-primary p-1 ring-white bg-white rounded-full"
                )}
                strokeWidth={2.5}
              />
            </button>
          </div>
          <span className="text-xl font-bold">{data?.character.name}</span>
        </div>
      </header>
      <section className="w-full h-full flex flex-col space-y-4 mt-8 relative">
        {/* Información del personaje */}
        <div className="space-y-1 flex flex-col  flex-1">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-100 backdrop-blur-sm">
            <Dna className="w-5 h-5 text-green-400" />
            <div>
              <p className="text-sm text-gray-300">Especie</p>
              <p className="font-semibold">{data?.character.species}</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-100 backdrop-blur-sm">
            <User className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Género</p>
              <p className="font-semibold">{data?.character.gender}</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-100 backdrop-blur-sm">
            <Heart className="w-5 h-5 text-red-400" />
            <div>
              <p className="text-sm text-gray-300">Estado</p>
              <p className="font-semibold">{data?.character.status}</p>
            </div>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-center text-xs text-gray-400">
            Rick and Morty Character
          </p>
        </div>
        <figure className="absolute bottom-0 right-0 w-1/3 bg-red-500 rounded-full overflow-hidden scale-x-[-1] opacity-30 inset-shadow-sm inset-shadow-indigo-500 ring-8 ring-primary/20">
          <img
            src={data?.character.image}
            alt={data?.character.name}
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
    </div>
  );
}

export default Character;
