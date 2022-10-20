"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAxiosRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _requestParameters = require("./requestParameters");
var getAxiosRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(contract, axiosClient, requestArguments) {
    var _getRequestParameters, path, method, queryStringParameters, body, headers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getRequestParameters = (0, _requestParameters.getRequestParameters)(contract, requestArguments), path = _getRequestParameters.path, method = _getRequestParameters.method, queryStringParameters = _getRequestParameters.queryStringParameters, body = _getRequestParameters.body, headers = _getRequestParameters.headers;
            return _context.abrupt("return", axiosClient.request({
              method: method,
              url: path,
              headers: headers,
              data: body,
              params: queryStringParameters
            }));
          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getAxiosRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAxiosRequest = getAxiosRequest;
//# sourceMappingURL=axiosRequest.js.map