const responseMessage = function (response, statusCode, message,isError) {
  var data = {
    error: isError,
    message: message,
  };
  response.status(statusCode).json(data);
  response.end;
};

module.exports = {
  responseMessage,
};
