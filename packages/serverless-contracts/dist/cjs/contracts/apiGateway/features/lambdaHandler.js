"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLambdaHandler = exports.getHandler = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _ajv = _interopRequireDefault(require("ajv"));
var _httpErrors = _interopRequireWildcard(require("http-errors"));
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getHandler = function getHandler(contract) {
  return function (handler) {
    return /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event, context, _callback) {
        var ajv,
          parsedEvent,
          inputValidator,
          _len,
          additionalArgs,
          _key,
          handlerResponse,
          outputValidator,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                ajv = new _ajv["default"]();
                parsedEvent = (0, _utils.proxyEventToHandlerEvent)(event);
                inputValidator = ajv.compile(contract.inputSchema);
                if (inputValidator(parsedEvent)) {
                  _context.next = 7;
                  break;
                }
                console.error('Error: Invalid input');
                throw (0, _httpErrors["default"])(400, 'Invalid input');
              case 7:
                for (_len = _args.length, additionalArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                  additionalArgs[_key - 3] = _args[_key];
                }
                _context.next = 10;
                return handler.apply(void 0, [parsedEvent, context].concat(additionalArgs));
              case 10:
                handlerResponse = _context.sent;
                if (!(contract.outputSchema !== undefined)) {
                  _context.next = 16;
                  break;
                }
                outputValidator = ajv.compile(contract.outputSchema);
                if (outputValidator(handlerResponse)) {
                  _context.next = 16;
                  break;
                }
                console.error('Error: Invalid output');
                throw (0, _httpErrors["default"])(400, 'Invalid output');
              case 16:
                return _context.abrupt("return", (0, _utils.handlerResponseToProxyResult)(handlerResponse));
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                if (!((0, _httpErrors.isHttpError)(_context.t0) && _context.t0.expose)) {
                  _context.next = 24;
                  break;
                }
                return _context.abrupt("return", {
                  headers: _context.t0.headers,
                  statusCode: _context.t0.statusCode,
                  body: _context.t0.message
                });
              case 24:
                return _context.abrupt("return", {
                  statusCode: 500,
                  body: 'Internal server error'
                });
              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }));
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
  };
};

/**
 * A wrapper to get the proper typing for a lambda handler.
 * This does not include parsing and validation.
 *
 * Use `getHandler` for a more advanced usage
 */
exports.getHandler = getHandler;
var getLambdaHandler = function getLambdaHandler(contract, additionalContext) {
  return function (handler) {
    return handler;
  };
};
exports.getLambdaHandler = getLambdaHandler;
//# sourceMappingURL=lambdaHandler.js.map