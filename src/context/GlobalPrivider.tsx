import type { GlobalContextType } from "@/types/context";
import type { Character } from "@/types/props";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("There is no context");
  return context;
};

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [viewPageCharacter, setViewPageCharacter] = useState<boolean>(false);

  const toggleFavorite = (character: Character) => {
    setFavorites(
      (prev) =>
        prev.some((fav) => fav.id === character.id) // Verifica si el personaje ya está en favoritos
          ? prev.filter((fav) => fav.id !== character.id) // Si ya está en favoritos, lo elimina
          : [...prev, character] // Si no está en favoritos, lo agrega
    );
  };

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        viewPageCharacter,
        setViewPageCharacter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
