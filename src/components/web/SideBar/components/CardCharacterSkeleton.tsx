import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function CardCharacterSkeleton() {
  return (
    <div className="flex flex-col flex-1 h-80">
      <h2 className="text-md text-stone-600 my-4">STARRED CHARACTERS (0)</h2>
      <h2 className="text-md text-stone-600 my-4">CHARACTERS (0)</h2>

      <div className="flex flex-col flex-1 gap-4">
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-12 w-12 rounded-full bg-primary/20" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-primary/20" />
            <Skeleton className="h-4 w-[200px] bg-primary/20" />
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-12 w-12 rounded-full bg-primary/20" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-primary/20" />
            <Skeleton className="h-4 w-[200px] bg-primary/20" />
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-12 w-12 rounded-full bg-primary/10" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-primary/10" />
            <Skeleton className="h-4 w-[200px] bg-primary/10" />
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-12 w-12 rounded-full bg-primary/5" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-primary/5" />
            <Skeleton className="h-4 w-[200px] bg-primary/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCharacterSkeleton;
