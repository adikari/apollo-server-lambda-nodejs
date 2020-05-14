const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  input AddUserInput {
    name: String!
  }

  extend type Query {
    userById(id: String!): User
  }

  extend type Mutation {
    addUser(input: AddUserInput): User
  }
`;

const resolvers = {
  Query: {
    userById: (_, { id }, { UserService }) => UserService.userById({ id })
  },
  Mutation: {
    addUser: (_, { input }, { UserService }) => UserService.addUser({ name: input.name })
  }
};

module.exports = { typeDefs, resolvers };
