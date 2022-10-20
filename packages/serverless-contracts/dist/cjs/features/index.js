"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _fullSchema = require("./fullSchema");
Object.keys(_fullSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fullSchema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fullSchema[key];
    }
  });
});
var _openApiDocumentation = require("./openApiDocumentation");
Object.keys(_openApiDocumentation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _openApiDocumentation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _openApiDocumentation[key];
    }
  });
});
//# sourceMappingURL=index.js.map