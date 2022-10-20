import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { generateFiles, names } from '@nrwl/devkit';
export var createFiles = function createFiles(tree, options, sourcePath) {
  var _names = names(options.name),
    className = _names.className,
    name = _names.name,
    propertyName = _names.propertyName;
  generateFiles(tree, sourcePath, options.packageRoot, _objectSpread(_objectSpread({}, options), {}, {
    dot: '.',
    className: className,
    name: name,
    propertyName: propertyName,
    cliCommand: 'nx',
    strict: undefined,
    tmpl: ''
  }));
};
//# sourceMappingURL=createFiles.js.map