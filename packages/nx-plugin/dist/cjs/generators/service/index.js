"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _devkit = require("@nrwl/devkit");
var _path = require("path");
var _helpers = require("../helpers");
var _types = require("../types");
var _typedJsonConfig = require("./typed-json-config");
var SOURCE_FOLDER = './files';
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tree, schema) {
    var options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = (0, _helpers.normalizeOptions)(tree, schema, _types.GeneratorType.SERVICE);
            (0, _helpers.packageGenerator)({
              tree: tree,
              options: options,
              sourcePath: (0, _path.join)(__dirname, SOURCE_FOLDER),
              packageJson: _typedJsonConfig.packageJson,
              packageProjectJson: _typedJsonConfig.packageProjectJson,
              packageTsConfig: _typedJsonConfig.packageTsConfig
            });
            _context.next = 4;
            return (0, _devkit.formatFiles)(tree);
          case 4:
            return _context.abrupt("return", function () {
              (0, _helpers.symlinkVsCodeConfiguration)(options);
              (0, _helpers.updatePackages)(tree, options);
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;
//# sourceMappingURL=index.js.map