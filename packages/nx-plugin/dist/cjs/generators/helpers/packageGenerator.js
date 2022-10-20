"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageGenerator = void 0;
var _devkit = require("@nrwl/devkit");
var _path = require("path");
var _createFiles = require("./createFiles");
var _updateCodeWorkspace = require("./updateCodeWorkspace");
var _updateRootPackageJson = require("./updateRootPackageJson");
var packageGenerator = function packageGenerator(_ref) {
  var options = _ref.options,
    packageJson = _ref.packageJson,
    packageProjectJson = _ref.packageProjectJson,
    packageTsConfig = _ref.packageTsConfig,
    sourcePath = _ref.sourcePath,
    tree = _ref.tree;
  (0, _createFiles.createFiles)(tree, options, sourcePath);
  (0, _devkit.writeJson)(tree, (0, _path.join)(options.packageRoot, "package.json"), packageJson(options));
  (0, _devkit.writeJson)(tree, (0, _path.join)(options.packageRoot, "tsconfig.json"), packageTsConfig(options));
  var projectConfiguration = packageProjectJson(options.packageRoot);
  (0, _devkit.addProjectConfiguration)(tree, options.importPath, projectConfiguration);
  (0, _updateCodeWorkspace.updateCodeWorkspace)(tree, options);
  (0, _updateRootPackageJson.updateRootPackageJson)(tree, options);
};
exports.packageGenerator = packageGenerator;
//# sourceMappingURL=packageGenerator.js.map