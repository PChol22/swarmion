"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageTsConfig = void 0;
var _devkit = require("@nrwl/devkit");
var packageTsConfig = function packageTsConfig(options) {
  return {
    "extends": (0, _devkit.joinPathFragments)(options.offsetFromRoot, 'tsconfig.json'),
    compilerOptions: {
      baseUrl: 'src',
      composite: true,
      outDir: './dist/types'
    },
    exclude: ['./dist'],
    include: ['./**/*.ts']
  };
};
exports.packageTsConfig = packageTsConfig;
//# sourceMappingURL=tsconfig.json.js.map