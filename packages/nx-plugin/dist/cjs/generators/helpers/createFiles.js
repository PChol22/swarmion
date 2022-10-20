"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFiles = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _devkit = require("@nrwl/devkit");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var createFiles = function createFiles(tree, options, sourcePath) {
  var _names = (0, _devkit.names)(options.name),
    className = _names.className,
    name = _names.name,
    propertyName = _names.propertyName;
  (0, _devkit.generateFiles)(tree, sourcePath, options.packageRoot, _objectSpread(_objectSpread({}, options), {}, {
    dot: '.',
    className: className,
    name: name,
    propertyName: propertyName,
    cliCommand: 'nx',
    strict: undefined,
    tmpl: ''
  }));
};
exports.createFiles = createFiles;
//# sourceMappingURL=createFiles.js.map