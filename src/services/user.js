const makeUserService = ({ event }) => ({
  userById: ({ id }) => ({
    id,
    name: 'John Doe'
  }),
  addUser: ({ name }) => ({
    id: Date.now(),
    name
  })
});

module.exports = { makeUserService };
