import { joinPathFragments } from '@nrwl/devkit';
export var packageTsConfig = function packageTsConfig(options) {
  return {
    "extends": joinPathFragments(options.offsetFromRoot, 'tsconfig.json'),
    compilerOptions: {
      baseUrl: 'src',
      composite: true,
      outDir: './dist/types'
    },
    exclude: ['./dist'],
    include: ['./**/*.ts']
  };
};
//# sourceMappingURL=tsconfig.json.js.map