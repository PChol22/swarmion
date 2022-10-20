import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Ajv from 'ajv';
import createHttpError, { isHttpError } from 'http-errors';
import { handlerResponseToProxyResult, proxyEventToHandlerEvent } from "../utils";
export var getHandler = function getHandler(contract) {
  return function (handler) {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event, context, _callback) {
        var ajv,
          parsedEvent,
          inputValidator,
          _len,
          additionalArgs,
          _key,
          handlerResponse,
          outputValidator,
          _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                ajv = new Ajv();
                parsedEvent = proxyEventToHandlerEvent(event);
                inputValidator = ajv.compile(contract.inputSchema);
                if (inputValidator(parsedEvent)) {
                  _context.next = 7;
                  break;
                }
                console.error('Error: Invalid input');
                throw createHttpError(400, 'Invalid input');
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
                throw createHttpError(400, 'Invalid output');
              case 16:
                return _context.abrupt("return", handlerResponseToProxyResult(handlerResponse));
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                if (!(isHttpError(_context.t0) && _context.t0.expose)) {
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
export var getLambdaHandler = function getLambdaHandler(contract, additionalContext) {
  return function (handler) {
    return handler;
  };
};
//# sourceMappingURL=lambdaHandler.js.map