import { InMemoryCache, createHttpLink, ApolloClient } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { IS_LOGGED_IN } from "../queries/User";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'http://localhost:7777/graphql',
  });
  
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
});

cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
        IsLoggedIn: !!localStorage.getItem("token"),
        User: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("user")) : null,
    }
});

export default client;