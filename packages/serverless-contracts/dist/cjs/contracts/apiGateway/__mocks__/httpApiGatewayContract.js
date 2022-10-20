"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryStringParametersSchema = exports.pathParametersSchema = exports.outputSchema = exports.httpApiGatewayContractMock = exports.headersSchema = exports.bodySchema = void 0;
var _ = require("../..");
var pathParametersSchema = {
  type: 'object',
  properties: {
    userId: {
      type: 'string'
    },
    pageNumber: {
      type: 'string'
    }
  },
  required: ['userId', 'pageNumber'],
  additionalProperties: false
};
exports.pathParametersSchema = pathParametersSchema;
var queryStringParametersSchema = {
  type: 'object',
  properties: {
    testId: {
      type: 'string'
    }
  },
  required: ['testId'],
  additionalProperties: false
};
exports.queryStringParametersSchema = queryStringParametersSchema;
var headersSchema = {
  type: 'object',
  properties: {
    myHeader: {
      type: 'string'
    }
  },
  required: ['myHeader']
};
exports.headersSchema = headersSchema;
var bodySchema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  },
  required: ['foo']
};
exports.bodySchema = bodySchema;
var outputSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  },
  required: ['id', 'name']
};
exports.outputSchema = outputSchema;
var httpApiGatewayContractMock = new _.ApiGatewayContract({
  id: 'testContract',
  path: '/users/{userId}',
  method: 'GET',
  integrationType: 'httpApi',
  authorizerType: 'cognito',
  pathParametersSchema: pathParametersSchema,
  queryStringParametersSchema: queryStringParametersSchema,
  headersSchema: headersSchema,
  bodySchema: bodySchema,
  outputSchema: outputSchema
});
exports.httpApiGatewayContractMock = httpApiGatewayContractMock;
//# sourceMappingURL=httpApiGatewayContract.js.map