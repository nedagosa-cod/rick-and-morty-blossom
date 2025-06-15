import React, { useRef, useState } from "react";
import type { PopOverProps } from "@/types/props";
import { cn } from "@/lib/utils";

function PopOver({ open, setOpen, filter, setFilter }: PopOverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [gender, setGender] = useState<string>(filter.gender);
  const [specie, setSpecie] = useState<string>(filter.specie);

  const handleFilter = () => {
    if (gender !== "all" || specie !== "all") {
      setFilter({ gender, specie });
      setOpen(false);
    }
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
      className="flex flex-col gap-6 absolute top-full right-0 bg-white rounded-md p-6 w-full border border-stone-200 shadow-md mt-2 "
      ref={popoverRef}
    >
      <div>
        <span className="text-sm text-stone-400">Character</span>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <label
            className={cn(
              "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
              gender === "all" &&
                "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
            )}
          >
            <input
              type="radio"
              className="hidden"
              name="gender"
              checked={gender === "all"}
              onChange={() => setGender("all")}
            />
            <span className="m-auto">All</span>
          </label>
          <label
            className={cn(
              "flex items-center gap-2 rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
              gender === "starred" &&
                "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
            )}
          >
            <input
              type="radio"
              className="hidden"
              name="gender"
              checked={gender === "starred"}
              onChange={() => setGender("starred")}
            />
            <span className="m-auto">Starred</span>
          </label>
          <label
            className={cn(
              "flex items-center gap-2  rounded-md p-2 border-stone-300 border-2 text-sm text-center hover:bg-stone-100 font-bold transition-all duration-300",
              gender === "other" &&
                "bg-secondary/20 text-secondary border-none hover:bg-secondary/20"
            )}
          >
            <input
              type="radio"
              className="hidden"
              name="gender"
              checked={gender === "other"}
              onChange={() => setGender("other")}
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
      <button
        className={cn(
          "w-full bg-stone-200 text-stone-400 py-2 px-4 rounded-md",
          gender !== "all" &&
            "bg-secondary/60 text-white hover:bg-secondary cursor-pointer",
          specie !== "all" &&
            "bg-secondary/60 text-white hover:bg-secondary cursor-pointer"
        )}
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
}

export default PopOver;
