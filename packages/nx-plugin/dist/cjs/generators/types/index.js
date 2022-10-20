"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _PackageJson = require("./PackageJson");
Object.keys(_PackageJson).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PackageJson[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PackageJson[key];
    }
  });
});
var _GeneratorType = require("./GeneratorType");
Object.keys(_GeneratorType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _GeneratorType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GeneratorType[key];
    }
  });
});
var _TsConfig = require("./TsConfig");
Object.keys(_TsConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TsConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TsConfig[key];
    }
  });
});
var _Shema = require("./Shema");
Object.keys(_Shema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Shema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Shema[key];
    }
  });
});
//# sourceMappingURL=index.js.map