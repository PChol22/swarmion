"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeOptions = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _devkit = require("@nrwl/devkit");
var _linter = require("@nrwl/linter");
var _path = require("path");
var _types = require("../types");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var normalizeOptions = function normalizeOptions(tree, options, generatorType) {
  var name = (0, _devkit.names)(options.name).fileName;
  var packageRoot = (0, _devkit.joinPathFragments)((0, _devkit.names)(options.directory).fileName, name);
  var linter = _linter.Linter.EsLint;
  var projectName = name.replace(new RegExp('/', 'g'), '-');
  var fileName = getCaseAwareFileName({
    fileName: projectName,
    pascalCaseFiles: false
  });
  var _getWorkspaceLayout = (0, _devkit.getWorkspaceLayout)(tree),
    npmScope = _getWorkspaceLayout.npmScope;
  var offsetFromRoot = (0, _path.relative)(packageRoot, tree.root);
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
exports.normalizeOptions = normalizeOptions;
var getCaseAwareFileName = function getCaseAwareFileName(options) {
  var normalized = (0, _devkit.names)(options.fileName);
  return options.pascalCaseFiles ? normalized.className : normalized.fileName;
};
var formatImportPath = function formatImportPath(generatorType, projectName) {
  switch (generatorType) {
    case _types.GeneratorType.LIBRARY:
      return projectName;
    case _types.GeneratorType.SERVICE:
      return "".concat(_types.GeneratorTypeToDirectory[generatorType], "-").concat(projectName);
  }
};
//# sourceMappingURL=normalizeOptions.js.map