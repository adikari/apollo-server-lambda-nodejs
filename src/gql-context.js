const { makeUserService } = require('./services/user');

const graphqlContext = ({ event }) => {
  if (!event) {
    throw new Error('Lambda event is missing!!');
  }

  return {
    UserService: makeUserService({ event })
  };
};

module.exports = { graphqlContext };
