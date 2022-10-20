"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCodeWorkspace = void 0;
var _devkit = require("@nrwl/devkit");
var _types = require("../types");
var formatFolderName = function formatFolderName(options) {
  var formattedName = options.name.replace(new RegExp('-', 'g'), ' ');
  switch (options.generatorType) {
    case _types.GeneratorType.LIBRARY:
      return "".concat(formattedName, " [").concat(options.generatorType.toLowerCase(), "]");
    case _types.GeneratorType.SERVICE:
      return "".concat(_types.GeneratorTypeToDirectory[options.generatorType], " ").concat(formattedName, " [").concat(options.generatorType.toLowerCase(), "]");
  }
};
var updateCodeWorkspace = function updateCodeWorkspace(tree, options) {
  (0, _devkit.updateJson)(tree, "".concat(options.workspaceName, ".code-workspace"), function (json) {
    json.folders.push({
      path: options.packageRoot,
      name: formatFolderName(options)
    });
    return json;
  });
};
exports.updateCodeWorkspace = updateCodeWorkspace;
//# sourceMappingURL=updateCodeWorkspace.js.map