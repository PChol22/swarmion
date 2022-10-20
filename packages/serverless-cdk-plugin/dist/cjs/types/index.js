"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _cloudFormationTemplate = require("./cloudFormationTemplate");
Object.keys(_cloudFormationTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cloudFormationTemplate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cloudFormationTemplate[key];
    }
  });
});
var _serverlessCdkPluginConfig = require("./serverlessCdkPluginConfig");
Object.keys(_serverlessCdkPluginConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serverlessCdkPluginConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serverlessCdkPluginConfig[key];
    }
  });
});
var _serverlessConstruct = require("./serverlessConstruct");
Object.keys(_serverlessConstruct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _serverlessConstruct[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serverlessConstruct[key];
    }
  });
});
//# sourceMappingURL=index.js.map