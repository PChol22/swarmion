import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
export var getRequestContextMock = function getRequestContextMock(args) {
  return _objectSpread({
    accountId: '',
    apiId: '',
    authorizer: undefined,
    protocol: '',
    httpMethod: '',
    identity: {
      accessKey: null,
      accountId: null,
      apiKey: null,
      apiKeyId: null,
      caller: null,
      clientCert: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      principalOrgId: null,
      sourceIp: 'string',
      user: null,
      userAgent: null,
      userArn: null
    },
    path: '',
    stage: '',
    requestId: '',
    requestTimeEpoch: 0,
    resourceId: '',
    resourcePath: ''
  }, args);
};
export var getRequestContextMockV2 = function getRequestContextMockV2(args) {
  return _objectSpread({
    authorizer: undefined,
    accountId: '',
    apiId: '',
    domainName: '',
    domainPrefix: '',
    http: {
      method: '',
      path: '',
      protocol: '',
      sourceIp: '',
      userAgent: ''
    },
    requestId: '',
    routeKey: '',
    stage: '',
    time: '',
    timeEpoch: 0
  }, args);
};
export var getHandlerContextMock = function getHandlerContextMock(args) {
  return (// @ts-expect-error only partial typing here
    _objectSpread({
      callbackWaitsForEmptyEventLoop: false,
      functionName: '',
      functionVersion: '',
      invokedFunctionArn: '',
      memoryLimitInMB: '',
      awsRequestId: '',
      logGroupName: '',
      logStreamName: ''
    }, args)
  );
};
//# sourceMappingURL=requestContext.js.map