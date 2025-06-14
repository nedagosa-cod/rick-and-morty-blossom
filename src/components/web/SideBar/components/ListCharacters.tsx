import React from "react";
import { Separator } from "@/components/ui/separator";
import CardCharacter from "./CardCharacter";

function ListCharacters() {
  return (
    <div>
      <h2 className="text-md text-stone-600 my-4">Starred characters</h2>

      <CardCharacter />

      <h2 className="text-md text-stone-600 my-4">Characters</h2>
      <Separator />
      <CardCharacter />
      <Separator />
      <CardCharacter />
      <Separator />
      <CardCharacter />
    </div>
  );
}

export default ListCharacters;
