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
      preserveSymlinks: true,
      baseUrl: '.',
      esModuleInterop: true
    },
    references: [{
      path: (0, _devkit.joinPathFragments)(options.offsetFromRoot, 'contracts/core-contracts/tsconfig.build.json')
    }, {
      path: (0, _devkit.joinPathFragments)(options.offsetFromRoot, 'packages/serverless-configuration/tsconfig.build.json')
    }],
    include: ['./**/*.ts'],
    'ts-node': {
      files: true
    }
  };
};
exports.packageTsConfig = packageTsConfig;
//# sourceMappingURL=tsconfig.json.js.map