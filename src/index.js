const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    user: User
  }

  type User {
    id: ID
    name: String
  }
`;

const resolvers = {
  Query: {
    user: () => ({ id: 123, name: 'John Doe' })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.handler = server.createHandler();
