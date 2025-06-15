export interface PopOverProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  filter: {
    gender: string;
    specie: string;
  };
  setFilter: (value: { gender: string; specie: string }) => void;
}
export interface TopSideBarProps {
  search: string;
  setSearch: (value: string) => void;
  filter: {
    gender: string;
    specie: string;
  };
  setFilter: (value: { gender: string; specie: string }) => void;
}
export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
export interface CardCharacterProps {
  character: Character;
  activeCard: string | null;
  setActiveCard: (id: string) => void;
}
