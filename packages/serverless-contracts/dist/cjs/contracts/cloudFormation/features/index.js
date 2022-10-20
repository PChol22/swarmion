"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _fullContractSchema = require("./fullContractSchema");
Object.keys(_fullContractSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fullContractSchema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fullContractSchema[key];
    }
  });
});
//# sourceMappingURL=index.js.map