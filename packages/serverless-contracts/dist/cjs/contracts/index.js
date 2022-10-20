"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _apiGateway = require("./apiGateway");
Object.keys(_apiGateway).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiGateway[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _apiGateway[key];
    }
  });
});
var _cloudFormation = require("./cloudFormation");
Object.keys(_cloudFormation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cloudFormation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cloudFormation[key];
    }
  });
});
//# sourceMappingURL=index.js.map