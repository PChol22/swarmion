import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { getOpenApiDocumentation } from '@swarmion/serverless-contracts';
import { isDefined } from "./isDefined";
export var generateOpenApiDocumentation = function generateOpenApiDocumentation(serverless) {
  // @ts-ignore mistype in the orignals (the animals)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  var _ref = serverless.service.initialServerlessConfig.contracts,
    provides = _ref.provides;
  var contractDocumentations = Object.values(provides).map(function (contract) {
    return getOpenApiDocumentation(contract);
  }).filter(isDefined);
  var paths = contractDocumentations.reduce(function (pathsObject, pathDocumentation) {
    pathsObject[pathDocumentation.path] = _defineProperty({}, pathDocumentation.method, pathDocumentation.documentation);
    return pathsObject;
  }, {});
  var openApiDocumentation = {
    openapi: '3.0.1',
    info: {
      title: serverless.service.getServiceName(),
      description: serverless.service.initialServerlessConfig.resources.Description,
      version: new Date().toISOString()
    },
    paths: paths
  };
  console.log(JSON.stringify(openApiDocumentation, null, 2));
};
//# sourceMappingURL=generateOpenApiDocumentation.js.map