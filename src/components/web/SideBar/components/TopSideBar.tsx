import React, { useState } from "react";
import { Search, SlidersVertical } from "lucide-react";
import PopOver from "./PopOver";
import type { TopSideBarProps } from "@/types/props";

function TopSideBar({ search, setSearch, filter, setFilter }: TopSideBarProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-end h-20 text-2xl font-bold text-slate-800">
        <h1>Rick and Morty list</h1>
      </div>
      {/* Search */}
      <div className="relative flex items-center w-full h-10 gap-2 px-6 rounded-md bg-slate-100 md:h-14 md:py-2">
        <Search className="w-6 h-6 text-slate-400" />
        <input
          type="text"
          placeholder="Search or filter results"
          className="flex-1 bg-transparent outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setOpen((prev) => !prev)}>
          <SlidersVertical
            className="w-6 h-6 font-bold transition-all duration-300 rounded-sm hover:ring-8 hover:ring-secondary/10 hover:bg-secondary/10 text-secondary"
            strokeWidth={2.5}
          />
        </button>
        {/* popover */}
        {open && (
          <PopOver
            open={open}
            setOpen={setOpen}
            filter={filter}
            setFilter={setFilter}
          />
        )}
      </div>
    </>
  );
}

export default TopSideBar;
