import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
/// <reference lib="dom" />

import { getRequestParameters } from "./requestParameters";
export var getFetchRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(contract, fetchFunction, options) {
    var _getRequestParameters, path, method, queryStringParameters, body, headers, url, searchString, response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getRequestParameters = getRequestParameters(contract, options), path = _getRequestParameters.path, method = _getRequestParameters.method, queryStringParameters = _getRequestParameters.queryStringParameters, body = _getRequestParameters.body, headers = _getRequestParameters.headers;
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
//# sourceMappingURL=fetchRequest.js.map