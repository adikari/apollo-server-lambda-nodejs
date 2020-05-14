const merge = require('lodash.merge');
const rootSchema = require('./schemas/root');
const userSchema = require('./schemas/user');

const graphqlSchema = () => {
  const schemas = [rootSchema, userSchema];

  const typeDefs = schemas.map(schema => schema.typeDefs);
  const resolvers = schemas.reduce((acc, schema) => merge(acc, schema.resolvers), {});

  return { typeDefs, resolvers };
};

module.exports = { graphqlSchema };
