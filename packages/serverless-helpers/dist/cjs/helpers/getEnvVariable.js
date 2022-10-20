"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var getEnvVariable = function getEnvVariable(name) {
  var variable = process.env[name];
  if (variable === undefined) throw new Error("Environment variable not found: ".concat(name));
  return variable;
};
var _default = getEnvVariable;
exports["default"] = _default;
//# sourceMappingURL=getEnvVariable.js.map