"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateOpenApiDocumentation = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _serverlessContracts = require("@swarmion/serverless-contracts");
var _isDefined = require("./isDefined");
var generateOpenApiDocumentation = function generateOpenApiDocumentation(serverless) {
  // @ts-ignore mistype in the orignals (the animals)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  var _ref = serverless.service.initialServerlessConfig.contracts,
    provides = _ref.provides;
  var contractDocumentations = Object.values(provides).map(function (contract) {
    return (0, _serverlessContracts.getOpenApiDocumentation)(contract);
  }).filter(_isDefined.isDefined);
  var paths = contractDocumentations.reduce(function (pathsObject, pathDocumentation) {
    pathsObject[pathDocumentation.path] = (0, _defineProperty2["default"])({}, pathDocumentation.method, pathDocumentation.documentation);
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
exports.generateOpenApiDocumentation = generateOpenApiDocumentation;
//# sourceMappingURL=generateOpenApiDocumentation.js.map