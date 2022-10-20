"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/** Helper to be used in config.ts files to retrieve the path of the handler. */
var getHandlerPath = function getHandlerPath(directoryPath) {
  var processRunLocation = process.cwd();
  return directoryPath.replace(processRunLocation + '/', '') + '/handler.main';
};
var _default = getHandlerPath;
exports["default"] = _default;
//# sourceMappingURL=getHandlerPath.js.map