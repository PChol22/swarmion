"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRootPackageJson = void 0;
var _devkit = require("@nrwl/devkit");
var updateRootPackageJson = function updateRootPackageJson(tree, options) {
  (0, _devkit.updateJson)(tree, 'package.json', function (json) {
    json.workspaces = Array.from(new Set(json.workspaces).add("".concat(options.directory, "/*"))).sort();
    return json;
  });
};
exports.updateRootPackageJson = updateRootPackageJson;
//# sourceMappingURL=updateRootPackageJson.js.map