"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneratorTypeToDirectory = exports.GeneratorType = void 0;
var GeneratorType;
exports.GeneratorType = GeneratorType;
(function (GeneratorType) {
  GeneratorType["LIBRARY"] = "LIBRARY";
  GeneratorType["SERVICE"] = "SERVICE";
})(GeneratorType || (exports.GeneratorType = GeneratorType = {}));
var GeneratorTypeToDirectory;
exports.GeneratorTypeToDirectory = GeneratorTypeToDirectory;
(function (GeneratorTypeToDirectory) {
  GeneratorTypeToDirectory["LIBRARY"] = "packages";
  GeneratorTypeToDirectory["SERVICE"] = "backend";
})(GeneratorTypeToDirectory || (exports.GeneratorTypeToDirectory = GeneratorTypeToDirectory = {}));
//# sourceMappingURL=GeneratorType.js.map