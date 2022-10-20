"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _contracts = require("./contracts");
Object.keys(_contracts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _contracts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contracts[key];
    }
  });
});
//# sourceMappingURL=index.js.map