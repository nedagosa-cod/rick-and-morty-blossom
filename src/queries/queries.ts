import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $species: String) {
    characters(filter: { name: $name, species: $species }) {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
    }
  }
`;
