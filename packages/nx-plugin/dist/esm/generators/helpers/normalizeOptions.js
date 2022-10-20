import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { getWorkspaceLayout, joinPathFragments, names } from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { relative } from 'path';
import { GeneratorType, GeneratorTypeToDirectory } from "../types";
export var normalizeOptions = function normalizeOptions(tree, options, generatorType) {
  var name = names(options.name).fileName;
  var packageRoot = joinPathFragments(names(options.directory).fileName, name);
  var linter = Linter.EsLint;
  var projectName = name.replace(new RegExp('/', 'g'), '-');
  var fileName = getCaseAwareFileName({
    fileName: projectName,
    pascalCaseFiles: false
  });
  var _getWorkspaceLayout = getWorkspaceLayout(tree),
    npmScope = _getWorkspaceLayout.npmScope;
  var offsetFromRoot = relative(packageRoot, tree.root);
  var importPath = formatImportPath(generatorType, projectName);
  return _objectSpread(_objectSpread({}, options), {}, {
    fileName: fileName,
    generatorType: generatorType,
    importPath: importPath,
    linter: linter,
    name: projectName,
    packageRoot: packageRoot,
    offsetFromRoot: offsetFromRoot,
    workspaceName: npmScope
  });
};
var getCaseAwareFileName = function getCaseAwareFileName(options) {
  var normalized = names(options.fileName);
  return options.pascalCaseFiles ? normalized.className : normalized.fileName;
};
var formatImportPath = function formatImportPath(generatorType, projectName) {
  switch (generatorType) {
    case GeneratorType.LIBRARY:
      return projectName;
    case GeneratorType.SERVICE:
      return "".concat(GeneratorTypeToDirectory[generatorType], "-").concat(projectName);
  }
};
//# sourceMappingURL=normalizeOptions.js.map