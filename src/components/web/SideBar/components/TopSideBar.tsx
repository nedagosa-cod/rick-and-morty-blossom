import React, { useEffect, useRef, useState } from "react";
import { Search, SlidersVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function TopSideBar() {
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState<"all" | "starred" | "other">(
    "all"
  );
  const [specie, setSpecie] = useState<"all" | "Human" | "Alien">("all");
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <>
      <div className="flex h-20 items-end text-2xl font-bold">
        <h1>Rick and Morty list</h1>
      </div>
      {/* Search */}
      <div className="flex items-center gap-2 bg-stone-200 h-14 py-2 px-6 rounded-md w-full relative">
        <Search className="w-6 h-6 text-stone-400" />
        <input
          type="text"
          placeholder="Search or filter results"
          className="bg-transparent outline-none flex-1"
        />
        <button onClick={() => setOpen(!open)}>
          <SlidersVertical
            className="w-6 h-6 hover:ring-8 hover:ring-secondary/10 rounded-sm hover:bg-secondary/10 text-secondary transition-all duration-300 font-bold"
            strokeWidth={2.5}
          />
        </button>
        {/* popover */}
        {open && (
          <div
            className="flex flex-col gap-6 absolute top-full right-0 bg-white rounded-md p-6 w-full border border-stone-200 shadow-md mt-2 "
            ref={popoverRef}
          >
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
            <Button
              variant="ghost"
              className="w-full text-stone-400 bg-stone-200"
            >
              Filter
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default TopSideBar;
