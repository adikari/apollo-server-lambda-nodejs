const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    healthcheck: Boolean
  }

  type Mutation {
    ping: String
  }
`;

const resolvers = {
  Query: {
    healthcheck: () => true
  },
  Mutation: {
    ping: () => 'pong'
  }
};

module.exports = { typeDefs, resolvers };
