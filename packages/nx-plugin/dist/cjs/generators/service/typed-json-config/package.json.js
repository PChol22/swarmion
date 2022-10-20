"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageJson = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var packageJson = function packageJson(options) {
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
    dependencies: (_dependencies = {}, (0, _defineProperty2["default"])(_dependencies, "@".concat(options.workspaceName, "/serverless-configuration"), 'workspace:^'), (0, _defineProperty2["default"])(_dependencies, '@swarmion/serverless-helpers', 'latest'), _dependencies),
    devDependencies: (_devDependencies = {}, (0, _defineProperty2["default"])(_devDependencies, "@".concat(options.workspaceName, "/core-contracts"), 'workspace:^'), (0, _defineProperty2["default"])(_devDependencies, '@serverless/typescript', 'latest'), (0, _defineProperty2["default"])(_devDependencies, '@types/node', 'latest'), (0, _defineProperty2["default"])(_devDependencies, '@vitest/coverage-c8', 'latest'), (0, _defineProperty2["default"])(_devDependencies, 'dependency-cruiser', 'latest'), (0, _defineProperty2["default"])(_devDependencies, "esbuild", 'latest'), (0, _defineProperty2["default"])(_devDependencies, "eslint", 'latest'), (0, _defineProperty2["default"])(_devDependencies, "serverless", 'latest'), (0, _defineProperty2["default"])(_devDependencies, 'serverless-custom-iam-roles-per-function', 'latest'), (0, _defineProperty2["default"])(_devDependencies, 'serverless-esbuild', 'latest'), (0, _defineProperty2["default"])(_devDependencies, 'serverless-iam-roles-per-function', 'latest'), (0, _defineProperty2["default"])(_devDependencies, 'ts-node', 'latest'), (0, _defineProperty2["default"])(_devDependencies, "typescript", 'latest'), (0, _defineProperty2["default"])(_devDependencies, "vite", 'latest'), (0, _defineProperty2["default"])(_devDependencies, 'vite-tsconfig-paths', 'latest'), (0, _defineProperty2["default"])(_devDependencies, "vitest", 'latest'), _devDependencies)
  };
};
exports.packageJson = packageJson;
//# sourceMappingURL=package.json.js.map