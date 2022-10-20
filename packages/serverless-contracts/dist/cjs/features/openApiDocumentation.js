"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOpenApiDocumentation = void 0;
var _features = require("../contracts/apiGateway/features");
var getOpenApiDocumentation = function getOpenApiDocumentation(contract) {
  switch (contract.contractType) {
    case 'apiGateway':
      {
        return (0, _features.getOpenApiDocumentation)(contract);
      }
    default:
      {
        return undefined;
      }
  }
};
exports.getOpenApiDocumentation = getOpenApiDocumentation;
//# sourceMappingURL=openApiDocumentation.js.map