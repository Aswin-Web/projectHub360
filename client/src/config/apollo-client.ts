import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SERVER_URL } from "./config";

const createApolloClient = () => {
  return new ApolloClient({
    uri: SERVER_URL + "/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
export const client = createApolloClient();
