import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { formatFiles } from '@nrwl/devkit';
import { join } from 'path';
import { normalizeOptions, packageGenerator, symlinkVsCodeConfiguration, updatePackages } from "../helpers";
import { GeneratorType } from "../types";
import { packageJson, packageProjectJson, packageTsConfig } from "./typed-json-config";
var SOURCE_FOLDER = './files';
export default /*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(tree, schema) {
    var options;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = normalizeOptions(tree, schema, GeneratorType.SERVICE);
            packageGenerator({
              tree: tree,
              options: options,
              sourcePath: join(__dirname, SOURCE_FOLDER),
              packageJson: packageJson,
              packageProjectJson: packageProjectJson,
              packageTsConfig: packageTsConfig
            });
            _context.next = 4;
            return formatFiles(tree);
          case 4:
            return _context.abrupt("return", function () {
              symlinkVsCodeConfiguration(options);
              updatePackages(tree, options);
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
})();
//# sourceMappingURL=index.js.map