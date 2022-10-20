"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _apiGatewayProxyTransformers = require("./apiGatewayProxyTransformers");
Object.keys(_apiGatewayProxyTransformers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiGatewayProxyTransformers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _apiGatewayProxyTransformers[key];
    }
  });
});
//# sourceMappingURL=index.js.map