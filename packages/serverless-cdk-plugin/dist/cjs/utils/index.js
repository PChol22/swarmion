"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _throwIfBootstrapMetadataDetected = require("./throwIfBootstrapMetadataDetected");
Object.keys(_throwIfBootstrapMetadataDetected).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _throwIfBootstrapMetadataDetected[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _throwIfBootstrapMetadataDetected[key];
    }
  });
});
//# sourceMappingURL=index.js.map