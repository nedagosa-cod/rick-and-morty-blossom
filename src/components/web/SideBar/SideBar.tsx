import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import TopSideBar from "./components/TopSideBar";

function SideBar({ className }: { className?: string }) {
  return (
    <nav
      className={cn("flex flex-col gap-4 bg-stone-100 h-dvh p-4", className)}
    >
      <TopSideBar />
      {/* Starred characters */}
      <div>
        <h2 className="text-md text-stone-600 my-4">Starred characters</h2>
        <div className="flex items-center gap-4 bg-secondary/20 p-5 rounded-md">
          <figure className="w-10 h-10 rounded-full overflow-hidden ">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="character"
            />
          </figure>
          <div className="flex flex-col flex-1">
            <h3 className="text-md font-bold">Rick Sanchez</h3>
            <span className="text-sm text-stone-400">Human</span>
          </div>

          <button className="p-2 rounded-full hover:bg-secondary/20 transition-all duration-300">
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </button>
        </div>
        <h2 className="text-md text-stone-600 my-4">Characters</h2>
        <Separator />
        <div className="flex items-center gap-4 p-5 rounded-md">
          <figure className="w-10 h-10 rounded-full overflow-hidden ">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="character"
            />
          </figure>
          <div className="flex flex-col flex-1">
            <h3 className="text-md font-bold">Rick Sanchez</h3>
            <span className="text-sm text-stone-400">Human</span>
          </div>

          <button className="p-2 rounded-full ">
            <Heart className="w-6 h-6 text-stone-300" strokeWidth={2.5} />
          </button>
        </div>
        <Separator />
        <div className="flex items-center gap-4 p-5 rounded-md">
          <figure className="w-10 h-10 rounded-full overflow-hidden ">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="character"
            />
          </figure>
          <div className="flex flex-col flex-1">
            <h3 className="text-md font-bold">Rick Sanchez</h3>
            <span className="text-sm text-stone-400">Human</span>
          </div>

          <button className="p-2 rounded-full ">
            <Heart className="w-6 h-6 text-stone-300" strokeWidth={2.5} />
          </button>
        </div>
        <Separator />
        <div className="flex items-center gap-4 p-5 rounded-md">
          <figure className="w-10 h-10 rounded-full overflow-hidden ">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="character"
            />
          </figure>
          <div className="flex flex-col flex-1">
            <h3 className="text-md font-bold">Rick Sanchez</h3>
            <span className="text-sm text-stone-400">Human</span>
          </div>

          <button className="p-2 rounded-full ">
            <Heart className="w-6 h-6 text-stone-300" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
