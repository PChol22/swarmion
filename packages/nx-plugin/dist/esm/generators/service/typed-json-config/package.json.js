import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var packageJson = function packageJson(options) {
  var _dependencies, _devDependencies;
  return {
    name: "@".concat(options.workspaceName, "/").concat(options.importPath),
    "private": true,
    version: '1.0.0',
    license: 'UNLICENSED',
    scripts: {
      deploy: 'serverless deploy',
      'deploy-production': 'serverless deploy --stage production',
      'deploy-staging': 'serverless deploy --stage staging',
      deployedCommit: 'serverless deployedCommit',
      'lint-fix': 'pnpm linter-base-config --fix',
      'lint-fix-all': 'pnpm lint-fix .',
      'linter-base-config': 'eslint --ext=js,ts',
      remove: 'serverless remove',
      'remove-production': 'serverless remove --stage production',
      'remove-staging': 'serverless remove --stage staging',
      'sls-info': 'serverless info --verbose',
      test: 'pnpm test-linter && pnpm test-type && pnpm test-unit && pnpm test-circular',
      'test-circular': 'pnpm depcruise --validate .dependency-cruiser.js .',
      'test-linter': 'pnpm linter-base-config .',
      'test-type': 'tsc --noEmit --emitDeclarationOnly false',
      'test-unit': 'vitest run --coverage'
    },
    dependencies: (_dependencies = {}, _defineProperty(_dependencies, "@".concat(options.workspaceName, "/serverless-configuration"), 'workspace:^'), _defineProperty(_dependencies, '@swarmion/serverless-helpers', 'latest'), _dependencies),
    devDependencies: (_devDependencies = {}, _defineProperty(_devDependencies, "@".concat(options.workspaceName, "/core-contracts"), 'workspace:^'), _defineProperty(_devDependencies, '@serverless/typescript', 'latest'), _defineProperty(_devDependencies, '@types/node', 'latest'), _defineProperty(_devDependencies, '@vitest/coverage-c8', 'latest'), _defineProperty(_devDependencies, 'dependency-cruiser', 'latest'), _defineProperty(_devDependencies, "esbuild", 'latest'), _defineProperty(_devDependencies, "eslint", 'latest'), _defineProperty(_devDependencies, "serverless", 'latest'), _defineProperty(_devDependencies, 'serverless-custom-iam-roles-per-function', 'latest'), _defineProperty(_devDependencies, 'serverless-esbuild', 'latest'), _defineProperty(_devDependencies, 'serverless-iam-roles-per-function', 'latest'), _defineProperty(_devDependencies, 'ts-node', 'latest'), _defineProperty(_devDependencies, "typescript", 'latest'), _defineProperty(_devDependencies, "vite", 'latest'), _defineProperty(_devDependencies, 'vite-tsconfig-paths', 'latest'), _defineProperty(_devDependencies, "vitest", 'latest'), _devDependencies)
  };
};
//# sourceMappingURL=package.json.js.map