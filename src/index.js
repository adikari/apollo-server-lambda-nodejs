exports.handler = async (event, context) => {
  console.log(event, context);

  return { body: 'hello world' };
};
