"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _serverless = require("./serverless");
Object.keys(_serverless).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serverless[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serverless[key];
    }
  });
});
//# sourceMappingURL=index.js.map