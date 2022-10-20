"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageBuildTsConfig = void 0;
var packageBuildTsConfig = {
  "extends": './tsconfig.json',
  compilerOptions: {
    rootDir: 'src'
  },
  exclude: ['./vite*', './**/*.test.ts', './dist']
};
exports.packageBuildTsConfig = packageBuildTsConfig;
//# sourceMappingURL=tsconfig.build.json.js.map