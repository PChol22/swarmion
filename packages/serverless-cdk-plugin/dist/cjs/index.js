"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;
var _serverlessCdk = require("./serverlessCdk");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
module.exports = _serverlessCdk.ServerlessCdkPlugin;
var _default = _serverlessCdk.ServerlessCdkPlugin;
exports["default"] = _default;
//# sourceMappingURL=index.js.map