exports.handler = async (event, context) => {
  console.log(event, context);

  console.log('hello from lambda');

  return true;
};
