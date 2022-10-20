import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { getRequestParameters } from "./requestParameters";
export var getAxiosRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(contract, axiosClient, requestArguments) {
    var _getRequestParameters, path, method, queryStringParameters, body, headers;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getRequestParameters = getRequestParameters(contract, requestArguments), path = _getRequestParameters.path, method = _getRequestParameters.method, queryStringParameters = _getRequestParameters.queryStringParameters, body = _getRequestParameters.body, headers = _getRequestParameters.headers;
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
//# sourceMappingURL=axiosRequest.js.map