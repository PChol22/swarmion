import { updateJson } from '@nrwl/devkit';
import { GeneratorType, GeneratorTypeToDirectory } from "../types";
var formatFolderName = function formatFolderName(options) {
  var formattedName = options.name.replace(new RegExp('-', 'g'), ' ');
  switch (options.generatorType) {
    case GeneratorType.LIBRARY:
      return "".concat(formattedName, " [").concat(options.generatorType.toLowerCase(), "]");
    case GeneratorType.SERVICE:
      return "".concat(GeneratorTypeToDirectory[options.generatorType], " ").concat(formattedName, " [").concat(options.generatorType.toLowerCase(), "]");
  }
};
export var updateCodeWorkspace = function updateCodeWorkspace(tree, options) {
  updateJson(tree, "".concat(options.workspaceName, ".code-workspace"), function (json) {
    json.folders.push({
      path: options.packageRoot,
      name: formatFolderName(options)
    });
    return json;
  });
};
//# sourceMappingURL=updateCodeWorkspace.js.map