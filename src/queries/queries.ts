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
