exports.handler = function(event, context, callback) {
  console.log("Hello World!");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
