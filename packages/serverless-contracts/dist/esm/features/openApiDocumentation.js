import { getOpenApiDocumentation as getApiGatewayOpenApiDocumentation } from "../contracts/apiGateway/features";
export var getOpenApiDocumentation = function getOpenApiDocumentation(contract) {
  switch (contract.contractType) {
    case 'apiGateway':
      {
        return getApiGatewayOpenApiDocumentation(contract);
      }
    default:
      {
        return undefined;
      }
  }
};
//# sourceMappingURL=openApiDocumentation.js.map