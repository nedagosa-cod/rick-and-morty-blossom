import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ArrowLeft, Dna, Heart, User } from "lucide-react";
import { useGlobal } from "@/context/GlobalPrivider";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import CharacterSkeleton from "./components/CharacterSkeleton";
import { GET_CHARACTER_BY_ID } from "@/queries/queries";

function Character() {
  const { id } = useParams();
  const {
    toggleFavorite,
    isFavorite,
    viewPageCharacter,
    setViewPageCharacter,
  } = useGlobal();

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  return (
    <div
      className={cn(
        "container flex-col p-8 md:p-20 mx-auto w-full md:w-3/4 h-dvh bg-contain bg-center bg-no-repeat overflow-y-hidden ",
        viewPageCharacter ? "flex" : "hidden"
      )}
    >
      <div className="w-full my-4 md:hidden">
        <button
          onClick={() => {
            setViewPageCharacter(false);
          }}
        >
          <ArrowLeft className="w-8 h-8 text-secondary" />
        </button>
      </div>
      {loading ? (
        <CharacterSkeleton />
      ) : (
        <>
          <header className="flex items-center w-full h-40 gap-4">
            <div className="w-11/12 space-y-4">
              <div className="relative w-fit">
                <figure className="w-20 h-20 overflow-hidden rounded-full">
                  <img
                    src={data?.character.image}
                    alt={data?.character.name}
                    className="object-cover w-full h-full"
                  />
                </figure>

                <button
                  className="absolute z-10 p-2 bg-white rounded-full cursor-pointer -bottom-1 -right-1"
                  onClick={(e) => {
                    e.preventDefault();
                    if (data?.character) toggleFavorite(data.character);
                  }}
                >
                  <Heart
                    className={cn(
                      "w-6 h-6 text-stone-300",
                      isFavorite(id || "") &&
                        "text-primary fill-primary ring-6 ring-white bg-white rounded-full"
                    )}
                    strokeWidth={2.5}
                  />
                </button>
              </div>
              <span className="text-xl font-bold">{data?.character.name}</span>
            </div>
          </header>
          <section className="relative flex flex-col w-full h-full mt-8 space-y-4">
            {/* Información del personaje */}
            <div className="flex flex-col flex-1 space-y-1">
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
              <p className="text-xs text-center text-gray-400">
                Rick and Morty Character
              </p>
            </div>
            <figure className="absolute bottom-0 right-0 w-40 md:w-80 bg-red-500 rounded-full overflow-hidden scale-x-[-1] opacity-30 inset-shadow-sm inset-shadow-indigo-500 ring-8 ring-primary/20">
              <img
                src={data?.character.image}
                alt={data?.character.name}
                className="object-cover w-full h-full"
              />
            </figure>
          </section>
        </>
      )}
      {error && (
        <div className="flex flex-col items-center justify-center h-dvh text-stone-600">
          <h2 className="text-2xl font-bold">
            Error: the character could not be loaded
          </h2>
        </div>
      )}
    </div>
  );
}

export default Character;
