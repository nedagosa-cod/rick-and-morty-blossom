import { ApolloClient, InMemoryCache } from "@apollo/client";

// Client to connect to the graphql api
export const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
