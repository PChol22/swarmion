import { addProjectConfiguration, writeJson } from '@nrwl/devkit';
import { join } from 'path';
import { createFiles } from "./createFiles";
import { updateCodeWorkspace } from "./updateCodeWorkspace";
import { updateRootPackageJson } from "./updateRootPackageJson";
export var packageGenerator = function packageGenerator(_ref) {
  var options = _ref.options,
    packageJson = _ref.packageJson,
    packageProjectJson = _ref.packageProjectJson,
    packageTsConfig = _ref.packageTsConfig,
    sourcePath = _ref.sourcePath,
    tree = _ref.tree;
  createFiles(tree, options, sourcePath);
  writeJson(tree, join(options.packageRoot, "package.json"), packageJson(options));
  writeJson(tree, join(options.packageRoot, "tsconfig.json"), packageTsConfig(options));
  var projectConfiguration = packageProjectJson(options.packageRoot);
  addProjectConfiguration(tree, options.importPath, projectConfiguration);
  updateCodeWorkspace(tree, options);
  updateRootPackageJson(tree, options);
};
//# sourceMappingURL=packageGenerator.js.map