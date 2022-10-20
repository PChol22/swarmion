"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePackages = void 0;
var _devkit = require("@nrwl/devkit");
var _child_process = require("child_process");
var _path = require("path");
var updatePackages = function updatePackages(tree, options) {
  var _readJson = (0, _devkit.readJson)(tree, (0, _path.join)(options.packageRoot, "package.json")),
    dependencies = _readJson.dependencies,
    devDependencies = _readJson.devDependencies;
  (0, _child_process.execSync)("pnpm --dir ".concat(options.directory, "/").concat(options.name, "       add ").concat(Object.keys(dependencies !== null && dependencies !== void 0 ? dependencies : {}).join(' ')), {
    cwd: (0, _path.join)(tree.root),
    stdio: [0, 1, 2]
  });
  (0, _child_process.execSync)("pnpm --dir ".concat(options.directory, "/").concat(options.name, "       add --save-dev ").concat(Object.keys(devDependencies !== null && devDependencies !== void 0 ? devDependencies : {}).join(' ')), {
    cwd: (0, _path.join)(tree.root),
    stdio: [0, 1, 2]
  });
};
exports.updatePackages = updatePackages;
//# sourceMappingURL=updatePackages.js.map