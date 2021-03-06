import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.blocktap.io/graphql',
  cache: new InMemoryCache(),
});

export default client;
