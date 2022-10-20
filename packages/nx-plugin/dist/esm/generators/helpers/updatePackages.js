import { readJson } from '@nrwl/devkit';
import { execSync } from 'child_process';
import { join } from 'path';
export var updatePackages = function updatePackages(tree, options) {
  var _readJson = readJson(tree, join(options.packageRoot, "package.json")),
    dependencies = _readJson.dependencies,
    devDependencies = _readJson.devDependencies;
  execSync("pnpm --dir ".concat(options.directory, "/").concat(options.name, "       add ").concat(Object.keys(dependencies !== null && dependencies !== void 0 ? dependencies : {}).join(' ')), {
    cwd: join(tree.root),
    stdio: [0, 1, 2]
  });
  execSync("pnpm --dir ".concat(options.directory, "/").concat(options.name, "       add --save-dev ").concat(Object.keys(devDependencies !== null && devDependencies !== void 0 ? devDependencies : {}).join(' ')), {
    cwd: join(tree.root),
    stdio: [0, 1, 2]
  });
};
//# sourceMappingURL=updatePackages.js.map