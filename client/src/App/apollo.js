import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri:
    process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  request: async (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${localStorage.getItem('id_token')}`,
      },
    });
  },
});
