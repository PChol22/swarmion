"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symlinkVsCodeConfiguration = void 0;
var _fs = require("fs");
var _path = require("path");
var symlinkVsCodeConfiguration = function symlinkVsCodeConfiguration(options) {
  var relativePath = (0, _path.join)(options.offsetFromRoot, 'commonConfiguration/.vscode');
  (0, _fs.symlinkSync)(relativePath, (0, _path.join)(options.packageRoot, '.vscode'), 'dir');
};
exports.symlinkVsCodeConfiguration = symlinkVsCodeConfiguration;
//# sourceMappingURL=symlink.js.map