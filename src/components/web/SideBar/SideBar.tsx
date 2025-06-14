import React from "react";
import { cn } from "@/lib/utils";

import TopSideBar from "./components/TopSideBar";
import ListCharacters from "./components/ListCharacters";

function SideBar({ className }: { className?: string }) {
  return (
    <nav
      className={cn("flex flex-col gap-4 bg-stone-100 h-dvh p-4", className)}
    >
      <TopSideBar />
      <ListCharacters />
    </nav>
  );
}

export default SideBar;
