"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _requestSyncDeployment = require("./requestSyncDeployment");
Object.keys(_requestSyncDeployment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _requestSyncDeployment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requestSyncDeployment[key];
    }
  });
});
//# sourceMappingURL=index.js.map