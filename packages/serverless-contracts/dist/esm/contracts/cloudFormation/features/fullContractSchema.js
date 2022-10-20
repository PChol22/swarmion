export var getFullContractSchema = function getFullContractSchema(contract) {
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
//# sourceMappingURL=fullContractSchema.js.map