import type { Character } from "./props";

export interface GlobalContextType {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: string) => boolean;
  viewPageCharacter: boolean;
  setViewPageCharacter: (value: boolean) => void;
}
