"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _sharedConfig = require("./sharedConfig");
Object.keys(_sharedConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sharedConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sharedConfig[key];
    }
  });
});
//# sourceMappingURL=index.js.map