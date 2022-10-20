"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullContractSchema = void 0;
var getFullContractSchema = function getFullContractSchema(contract) {
  return {
    type: 'object',
    properties: {
      contractId: {
        "const": contract.id
      },
      contractType: {
        "const": 'cloudFormation'
      },
      name: {
        "const": contract.name
      }
    },
    required: ['contractId', 'name', 'contractType'],
    additionalProperties: false
  };
};
exports.getFullContractSchema = getFullContractSchema;
//# sourceMappingURL=fullContractSchema.js.map