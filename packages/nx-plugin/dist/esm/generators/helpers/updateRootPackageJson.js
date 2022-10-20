import { updateJson } from '@nrwl/devkit';
export var updateRootPackageJson = function updateRootPackageJson(tree, options) {
  updateJson(tree, 'package.json', function (json) {
    json.workspaces = Array.from(new Set(json.workspaces).add("".concat(options.directory, "/*"))).sort();
    return json;
  });
};
//# sourceMappingURL=updateRootPackageJson.js.map