"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _serverlessContract = require("./serverlessContract");
Object.keys(_serverlessContract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serverlessContract[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serverlessContract[key];
    }
  });
});
//# sourceMappingURL=index.js.map