"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequestParameters = void 0;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
var _utils = require("../../../utils");
var getRequestParameters = function getRequestParameters(contract, requestArguments) {
  // TODO improve inner typing here
  var _ref = requestArguments,
    pathParameters = _ref.pathParameters,
    queryStringParameters = _ref.queryStringParameters,
    headers = _ref.headers,
    body = _ref.body;
  var path = typeof pathParameters !== 'undefined' ? (0, _utils.fillPathTemplate)(contract.path, pathParameters) : contract.path;
  return (0, _omitBy["default"])({
    method: contract.method,
    path: path,
    body: body,
    queryStringParameters: (0, _omitBy["default"])(queryStringParameters, _isUndefined["default"]),
    headers: headers
  }, _isUndefined["default"]);
};
exports.getRequestParameters = getRequestParameters;
//# sourceMappingURL=requestParameters.js.map