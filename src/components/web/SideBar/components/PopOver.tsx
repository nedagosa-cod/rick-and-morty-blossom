import React, { useRef, useState } from "react";
import type { PopOverProps } from "@/types/props";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

function PopOver({ open, setOpen, filter, setFilter }: PopOverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [character, setCharacter] = useState<string>(filter.character);
  const [specie, setSpecie] = useState<string>(filter.specie);
  const [sort, setSort] = useState<string>(filter.sort);

  const handleFilter = () => {
    setFilter({ character, specie, sort });
    setOpen(false);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, popoverRef]);

  return (
    <div
      className="absolute right-0 z-50 flex flex-col w-full gap-6 p-6 bg-white -top-28 md:top-full h-dvh md:rounded-md md:w-full md:h-auto md:border md:border-stone-200 md:shadow-md md:mt-2"
      ref={popoverRef}
    >
      <div className="flex flex-col flex-1 gap-4">
        <div className="relative flex items-center justify-between md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute left-0 w-6 h-6"
          >
            <ArrowLeft className="w-6 h-6 text-secondary" />
          </button>
          <h2 className="m-auto font-bold text-center text-md">Filters</h2>
        </div>
        <div>
          <span className="text-sm text-stone-400">Characters</span>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                character === "all" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="character"
                checked={character === "all"}
                onChange={() => setCharacter("all")}
              />
              <span className="m-auto">All</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2 rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                character === "starred" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="character"
                checked={character === "starred"}
                onChange={() => setCharacter("starred")}
              />
              <span className="m-auto">Starred</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                character === "other" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="character"
                checked={character === "other"}
                onChange={() => setCharacter("other")}
              />
              <span className="m-auto">Other</span>
            </label>
          </div>
        </div>
        <div>
          <span className="text-sm text-stone-400">Specie</span>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                specie === "all" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="specie"
                checked={specie === "all"}
                onChange={() => setSpecie("all")}
              />
              <span className="m-auto">All</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2 rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                specie === "Human" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="specie"
                checked={specie === "Human"}
                onChange={() => setSpecie("Human")}
              />
              <span className="m-auto">Human</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                specie === "Alien" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="specie"
                checked={specie === "Alien"}
                onChange={() => setSpecie("Alien")}
              />
              <span className="m-auto">Alien</span>
            </label>
          </div>
        </div>
        <div>
          <span className="text-sm text-stone-400">Sort</span>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                sort === "all" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="sort"
                checked={sort === "all"}
                onChange={() => setSort("all")}
              />
              <span className="m-auto">Default</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                sort === "asc" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="sort"
                checked={sort === "asc"}
                onChange={() => setSort("asc")}
              />
              <span className="m-auto">A to Z</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
                sort === "desc" &&
                  "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
              )}
            >
              <input
                type="radio"
                className="hidden"
                name="sort"
                checked={sort === "desc"}
                onChange={() => setSort("desc")}
              />
              <span className="m-auto">Z to A</span>
            </label>
          </div>
        </div>
      </div>

      <button
        className={cn(
          "w-full bg-secondary/90 hover:bg-secondary md:bg-secondary/40 text-white py-2 px-4 rounded-md",
          character === "all" &&
            specie === "all" &&
            "bg-stone-200 text-stone-400"
        )}
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
}

export default PopOver;
