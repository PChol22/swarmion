"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageProjectJson = void 0;
var packageProjectJson = function packageProjectJson(root) {
  return {
    root: root,
    projectType: 'application',
    tags: [],
    implicitDependencies: ['backend-core']
  };
};
exports.packageProjectJson = packageProjectJson;
//# sourceMappingURL=project.json.js.map