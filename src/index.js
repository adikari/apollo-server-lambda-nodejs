exports.handler = async (event, context) => {
  console.log(event, context);

  return JSON.stringify({ message: 'hello world' });
};
