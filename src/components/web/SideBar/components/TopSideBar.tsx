import React, { useState } from "react";
import { Search, SlidersVertical } from "lucide-react";
import PopOver from "./PopOver";

function TopSideBar() {
  const [open, setOpen] = useState(false);

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
        {open && <PopOver open={open} setOpen={setOpen} />}
      </div>
    </>
  );
}

export default TopSideBar;
