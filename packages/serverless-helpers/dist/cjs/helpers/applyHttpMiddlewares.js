"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _core = _interopRequireDefault(require("@middy/core"));
var _httpErrorHandler = _interopRequireDefault(require("@middy/http-error-handler"));
var _httpJsonBodyParser = _interopRequireDefault(require("@middy/http-json-body-parser"));
var _validator = _interopRequireDefault(require("@middy/validator"));
var applyHttpMiddlewares = function applyHttpMiddlewares(handler, _ref) {
  var inputSchema = _ref.inputSchema,
    outputSchema = _ref.outputSchema;
  var middyfiedHandler = (0, _core["default"])(handler);
  middyfiedHandler.use((0, _httpJsonBodyParser["default"])());
  middyfiedHandler.use((0, _validator["default"])({
    inputSchema: inputSchema,
    outputSchema: outputSchema
  }));
  middyfiedHandler.use((0, _httpErrorHandler["default"])());
  return middyfiedHandler;
};
var _default = applyHttpMiddlewares;
exports["default"] = _default;
//# sourceMappingURL=applyHttpMiddlewares.js.map