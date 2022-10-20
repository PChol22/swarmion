"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFetchRequest = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _requestParameters = require("./requestParameters");
/// <reference lib="dom" />

var getFetchRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(contract, fetchFunction, options) {
    var _getRequestParameters, path, method, queryStringParameters, body, headers, url, searchString, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getRequestParameters = (0, _requestParameters.getRequestParameters)(contract, options), path = _getRequestParameters.path, method = _getRequestParameters.method, queryStringParameters = _getRequestParameters.queryStringParameters, body = _getRequestParameters.body, headers = _getRequestParameters.headers;
            searchString = new URLSearchParams(queryStringParameters).toString();
            if (options.baseUrl !== undefined) {
              url = new URL(path, options.baseUrl);
              url.search = searchString;
            } else {
              url = "".concat(path, "?").concat(searchString);
            }
            _context.next = 5;
            return fetchFunction(url, {
              method: method,
              headers: headers,
              body: JSON.stringify(body)
            });
          case 5:
            response = _context.sent;
            return _context.abrupt("return", response.json());
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getFetchRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.getFetchRequest = getFetchRequest;
//# sourceMappingURL=fetchRequest.js.map