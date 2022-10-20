import { joinPathFragments } from '@nrwl/devkit';
export var packageTsConfig = function packageTsConfig(options) {
  return {
    "extends": joinPathFragments(options.offsetFromRoot, 'tsconfig.json'),
    compilerOptions: {
      preserveSymlinks: true,
      baseUrl: '.',
      esModuleInterop: true
    },
    references: [{
      path: joinPathFragments(options.offsetFromRoot, 'contracts/core-contracts/tsconfig.build.json')
    }, {
      path: joinPathFragments(options.offsetFromRoot, 'packages/serverless-configuration/tsconfig.build.json')
    }],
    include: ['./**/*.ts'],
    'ts-node': {
      files: true
    }
  };
};
//# sourceMappingURL=tsconfig.json.js.map