import { ApiGatewayContract } from "../..";
export var pathParametersSchema = {
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
export var queryStringParametersSchema = {
  type: 'object',
  properties: {
    testId: {
      type: 'string'
    }
  },
  required: ['testId'],
  additionalProperties: false
};
export var headersSchema = {
  type: 'object',
  properties: {
    myHeader: {
      type: 'string'
    }
  },
  required: ['myHeader']
};
export var bodySchema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  },
  required: ['foo']
};
export var outputSchema = {
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
export var httpApiGatewayContractMock = new ApiGatewayContract({
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
//# sourceMappingURL=httpApiGatewayContract.js.map