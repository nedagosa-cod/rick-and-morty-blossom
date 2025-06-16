export interface Filter {
  character: string;
  specie: string;
  sort: string;
}
export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
export interface CharacterQuery {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  };
}
export interface PopOverProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  filter: {
    character: string;
    specie: string;
    sort: string;
  };
  setFilter: (value: {
    character: string;
    specie: string;
    sort: string;
  }) => void;
}
export interface CardCharacterProps {
  character: Character;
  activeCard: string | null;
  setActiveCard: (id: string) => void;
}
export interface ListCharactersProps {
  characters: Character[];
  filter: Filter;
  filteredFavorites: Character[];
  setFilter: (filter: Filter) => void;
}
export interface TopSideBarProps {
  search: string;
  setSearch: (value: string) => void;
  filter: Filter;
  setFilter: (value: Filter) => void;
}
