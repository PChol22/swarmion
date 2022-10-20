import findUp from 'find-up';
import { readFileSync } from 'fs';
import path from 'path';
var create = function create(context) {
  return {
    ImportDeclaration: function ImportDeclaration(node) {
      var importedModule = node.source.value;
      if (typeof importedModule !== 'string') {
        return;
      }
      var importedModulePackageJson = "node_modules/".concat(importedModule, "/package.json");
      var targetDirectory = findUp.sync(function (directory) {
        var packageJsonFound = findUp.sync.exists(path.join(directory, importedModulePackageJson));
        if (!packageJsonFound) {
          return undefined;
        }
        return directory;
      }, {
        type: 'directory'
      });
      if (targetDirectory === undefined) {
        return;
      }
      var importeModulePackageJson = path.join(targetDirectory, importedModulePackageJson);
      var packageJsonFile = JSON.parse(readFileSync(importeModulePackageJson, 'utf8'));
      if (packageJsonFile.contracts !== true) {
        return;
      }
      var currentDirectoryServerlessConf = path.join(context.getCwd(), 'serverless.ts');
      var closestServerlessTsPath = findUp.sync.exists(currentDirectoryServerlessConf) ? currentDirectoryServerlessConf : findUp.sync('serverless.ts');
      if (closestServerlessTsPath === undefined) {
        return;
      }
      var serverlessConfFile = readFileSync(closestServerlessTsPath, 'utf-8');
      var contracts = node.specifiers.map(function (specifier) {
        return specifier.local.name;
      });
      var invalidContracts = contracts.filter(function (contract) {
        var contractRegex = new RegExp("contracts: {(\n|.)*(provides|consumes): {(\n|.)*".concat(contract));
        return !contractRegex.test(serverlessConfFile);
      });
      if (invalidContracts.length === 0) {
        return;
      }
      context.report({
        node: node,
        message: "Contract".concat(invalidContracts.length > 1 ? 's' : '', " ").concat(invalidContracts.map(function (invalidContract) {
          return "`".concat(invalidContract, "`");
        }).join(', '), " from package '").concat(importedModule, "' must be declared in the `contracts.consumes` or `contracts.provides` property of the 'serverless.ts' service file")
      });
    }
  };
};
var module = {
  create: create
};
export default module;
//# sourceMappingURL=noUndeclaredContracts.js.map