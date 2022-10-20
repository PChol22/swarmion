"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _fillPathTemplate = require("./fillPathTemplate");
Object.keys(_fillPathTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fillPathTemplate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fillPathTemplate[key];
    }
  });
});
//# sourceMappingURL=index.js.map