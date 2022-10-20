import { getFullContractSchema as getApiGatewayFullContractSchema } from "../contracts/apiGateway/features";
import { getFullContractSchema as getCloudFormationFullContractSchema } from "../contracts/cloudFormation/features";
export var getContractFullSchema = function getContractFullSchema(contract) {
  switch (contract.contractType) {
    case 'apiGateway':
      {
        // @ts-expect-error FIXME: problem with types here
        return getApiGatewayFullContractSchema(contract);
      }
    case 'cloudFormation':
      {
        return getCloudFormationFullContractSchema(contract);
      }
  }
};
//# sourceMappingURL=fullSchema.js.map