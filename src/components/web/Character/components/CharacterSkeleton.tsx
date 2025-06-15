import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
function CharacterSkeleton() {
  return (
    <div
      className={
        "container flex-col p-8 md:p-20 mx-auto w-full md:w-3/4 h-dvh bg-contain bg-center bg-no-repeat overflow-y-hidden "
      }
    >
      <div className="w-full md:hidden my-4">
        <Skeleton className="w-8 h-8" />
      </div>
      <header className="w-full flex h-40 gap-4">
        <div className="w-11/12 space-y-4">
          <div className="relative w-fit flex flex-col gap-4">
            <Skeleton className="rounded-full w-20 h-20" />
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <section className="w-full h-full flex flex-col space-y-4 mt-8 relative">
            <Skeleton className="w-full h-14" />
            <Skeleton className="w-full h-14" />
            <Skeleton className="w-full h-14" />
          </section>
        </div>
      </header>
    </div>
  );
}

export default CharacterSkeleton;
