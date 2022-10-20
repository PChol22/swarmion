"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSyncDeployment = void 0;
var _serverlessContracts = require("@swarmion/serverless-contracts");
var bodySchema = {
  type: 'object',
  properties: {
    serviceId: {
      type: 'string'
    },
    applicationId: {
      type: 'string'
    }
  },
  required: ['serviceId', 'applicationId'],
  additionalProperties: false
};
var outputSchema = {
  type: 'object',
  properties: {
    status: {
      "enum": ['ACCEPTED', 'REJECTED']
    },
    message: {
      type: 'string'
    }
  },
  required: ['status', 'message'],
  additionalProperties: false
};
var requestSyncDeployment = new _serverlessContracts.ApiGatewayContract({
  id: 'orchestrator-requestSyncDeployment',
  path: '/request-sync-deployment',
  method: 'POST',
  integrationType: 'httpApi',
  pathParametersSchema: undefined,
  queryStringParametersSchema: undefined,
  bodySchema: bodySchema,
  headersSchema: undefined,
  outputSchema: outputSchema,
  authorizerType: undefined
});
exports.requestSyncDeployment = requestSyncDeployment;
//# sourceMappingURL=requestSyncDeployment.js.map