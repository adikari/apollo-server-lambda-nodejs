const { ApolloServer } = require('apollo-server-lambda');
const { graphqlContext } = require('./gql-context');
const { graphqlSchema } = require('./gql-schema');

const { typeDefs, resolvers } = graphqlSchema();

console.log(typeDefs, resolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: graphqlContext
});

exports.handler = server.createHandler();
