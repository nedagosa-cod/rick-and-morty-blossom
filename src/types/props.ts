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
