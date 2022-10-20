"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _package = require("./package.json");
Object.keys(_package).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _package[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _package[key];
    }
  });
});
var _project = require("./project.json");
Object.keys(_project).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _project[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _project[key];
    }
  });
});
var _tsconfig = require("./tsconfig.json");
Object.keys(_tsconfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tsconfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tsconfig[key];
    }
  });
});
//# sourceMappingURL=index.js.map