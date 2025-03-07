"use client"; // Ensures this runs only on the client

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { SERVER_URL } from "./config";

const httpLink = createHttpLink({
  uri: SERVER_URL + "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // Ensure `localStorage` is accessed only on the client
  const token =
    typeof window !== "undefined" ? localStorage.getItem("ticket") : null;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// const createApolloClient = () => {
//   return new ApolloClient({
//     link: authLink.concat(httpLink), // Combine auth middleware with HTTP link
//     // cache: new InMemoryCache(),
//     cache: new InMemoryCache(),
//   },{def});
// };

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink), // Combine auth middleware with HTTP link
    cache: new InMemoryCache({
      addTypename: false, // Disables automatic __typename fields
      resultCaching: false, // Disables caching responses
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache", // Always fetch fresh data
      },
      query: {
        fetchPolicy: "no-cache",
      },
      mutate: {
        fetchPolicy: "no-cache",
      },
    },
  });
};

export default createApolloClient;
export const client = createApolloClient();
