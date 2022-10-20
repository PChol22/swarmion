"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContractFullSchema = void 0;
var _features = require("../contracts/apiGateway/features");
var _features2 = require("../contracts/cloudFormation/features");
var getContractFullSchema = function getContractFullSchema(contract) {
  switch (contract.contractType) {
    case 'apiGateway':
      {
        // @ts-expect-error FIXME: problem with types here
        return (0, _features.getFullContractSchema)(contract);
      }
    case 'cloudFormation':
      {
        return (0, _features2.getFullContractSchema)(contract);
      }
  }
};
exports.getContractFullSchema = getContractFullSchema;
//# sourceMappingURL=fullSchema.js.map