"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _requests = require("./requests");
Object.keys(_requests).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _requests[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requests[key];
    }
  });
});
//# sourceMappingURL=index.js.map