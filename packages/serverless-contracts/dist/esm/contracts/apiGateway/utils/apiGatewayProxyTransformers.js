export var proxyEventToHandlerEvent = function proxyEventToHandlerEvent(_ref) {
  var requestContext = _ref.requestContext,
    _ref$body = _ref.body,
    proxyEventBody = _ref$body === void 0 ? null : _ref$body,
    headers = _ref.headers,
    pathParameters = _ref.pathParameters,
    queryStringParameters = _ref.queryStringParameters;
  return {
    requestContext: requestContext,
    body: proxyEventBody !== null ? JSON.parse(proxyEventBody) : undefined,
    headers: headers,
    pathParameters: pathParameters,
    queryStringParameters: queryStringParameters
  };
};
export var handlerResponseToProxyResult = function handlerResponseToProxyResult(handlerResponse) {
  return {
    statusCode: 200,
    body: handlerResponse !== undefined ? JSON.stringify(handlerResponse) : '',
    headers: handlerResponse !== undefined ? {
      'Content-Type': 'application/json'
    } : undefined
  };
};
//# sourceMappingURL=apiGatewayProxyTransformers.js.map