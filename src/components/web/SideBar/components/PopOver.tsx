import React, { useRef, useState } from "react";
import type { PopOverProps } from "@/types/props";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

function PopOver({ open, setOpen, filter, setFilter }: PopOverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [character, setCharacter] = useState<string>(filter.character);
  const [specie, setSpecie] = useState<string>(filter.specie);

  const handleFilter = () => {
    setFilter({ character, specie });
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
      className="flex flex-col gap-6 absolute -top-28 md:top-full h-dvh right-0 bg-white md:rounded-md p-6 w-full md:w-full md:h-auto md:border md:border-stone-200 md:shadow-md md:mt-2 z-50"
      ref={popoverRef}
    >
      <div className="flex justify-between items-center md:hidden relative">
        <button
          onClick={() => setOpen(false)}
          className="w-6 h-6 absolute left-0"
        >
          <ArrowLeft className="w-6 h-6 text-secondary" />
        </button>
        <h2 className="text-md font-bold text-center m-auto">Filters</h2>
      </div>
      <div>
        <span className="text-sm text-stone-400">Character</span>
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
        <span className="text-sm text-stone-400">Character</span>
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
      <button
        className={cn(
          "w-full bg-secondary/40 text-stone-400 py-2 px-4 rounded-md",
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
