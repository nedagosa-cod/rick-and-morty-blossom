import React, { createContext, useContext, useState } from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface GlobalContextType {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("There is no context");
  return context;
};

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const toggleFavorite = (character: Character) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === character.id)
        ? prev.filter((fav) => fav.id !== character.id)
        : [...prev, character]
    );
  };

  const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
